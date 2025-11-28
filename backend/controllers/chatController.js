
import Chat from "../models/chatModel.js";
import Knowledge from "../models/knowledgeModel.js";
import OpenAI from "openai";

export const startChat = async (req, res) => {
  try {
    const { username } = req.body;
    const effectiveUsername = username?.trim() || 'Anonymous';

    // Upsert – create only if it does not exist
    const chat = await Chat.findOneAndUpdate(
      { username: effectiveUsername },
      {
        $setOnInsert: {
          messages: [
            {
              role: "assistant",
              content:
                "Hi! I'm AI Greato, your professional IT consultant at GreatOdeal. How can I assist you with your AI and IT needs today?",
            },
          ],
          queries: [],
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.json({
      success: true,
      chatId: chat._id,
      messages: chat.messages,
    });
  } catch (error) {
    console.error("Error in startChat:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { chatId, userMessage } = req.body;
    if (!chatId || !userMessage) {
      return res.status(400).json({ success: false, message: "chatId and userMessage are required" });
    }

    // Find chat by ID
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ success: false, message: "Chat not found" });
    }

    // Improved displayName logic: hide UUID or long IDs, show only human-readable names
    const isAnonymousId = chat.username === 'Anonymous' || 
                          (chat.username.length === 36 && chat.username.includes('-')) || 
                          chat.username.length > 20;
    const displayName = isAnonymousId ? '' : chat.username;

    // Save user message and add to queries
    chat.messages.push({ role: "user", content: userMessage });
    chat.queries.push(userMessage);
    await chat.save();

    let botResponse;

    // Check for services queries
    if (/(services?|what.*(do you|can you).*(offer|provide)|offerings|what can you do)/i.test(userMessage)) {
      botResponse = `Hi${displayName ? `, ${displayName}` : ''}, at GreatOdeal, we specialize in comprehensive **AI & IT solutions** designed to empower your business. Here's an overview of our core services:

**Our Key Services:**
- **AI & Automation**: AI & Agentic Automation, Website & App Automation – Build intelligent systems that streamline operations and enhance efficiency.
- **ERP Development**: Custom ERP systems for integrated business management and workflow optimization.
- **Websites & Web Applications**: Modern web solutions using React, Angular, Vue.js – Scalable, responsive, and user-centric.
- **Mobile Apps**: Cross-platform applications with Flutter and React Native for iOS and Android.
- **Custom Software Development**: Tailored enterprise software solutions for unique business needs.
- **SaaS Platforms**: Scalable cloud-based platforms for subscription-based services.
- **UI/UX Design**: Intuitive and engaging user interfaces focused on user experience.
- **Data Analytics & API Integration**: Actionable insights through data analysis and seamless system integrations.

Each service is customized to your requirements. Which area interests you most, or would you like to discuss a specific project? 🚀`;
    }
    // Check for lifetime support queries
    else if (/(lifetime support|lifetime|life time support)/i.test(userMessage)) {
      botResponse = `Hi${displayName ? `, ${displayName}` : ''}, yes, at GreatOdeal, we provide **lifetime support** for our projects! This includes ongoing maintenance, updates, and assistance to ensure your solution remains robust and up-to-date.

**Our Support Commitment:**
- **Post-Launch Maintenance**: Bug fixes and performance optimizations at no extra cost.
- **Security Updates**: Regular patches to keep your system secure.
- **Consultation**: Lifetime access to our experts for advice on enhancements.

For detailed terms, feel free to contact our team. How else may I assist you today?`;
    }
    // Check for head office specific queries
    else if (/(head office|headquarter|hq location|amsterdam office)/i.test(userMessage)) {
      botResponse = `Hi${displayName ? `, ${displayName}` : ''}, our **Head Office** is located in **Amsterdam, Netherlands**. 

**Contact Details:**
- **Location**: Amsterdam, Netherlands
- **Email**: sales@greatodeal.com
- **Phone/WhatsApp**: +31 6 14996035

We also have a **Sub-Office** in Lahore, Pakistan:
- **Location**: Lahore, Pakistan
- **Phone/WhatsApp**: +92 3011060841

How else may I assist you today?`;
    }
    // Check for pricing, budget, cost, payment process queries
    else if (/(price|pricing|cost|budget|quotation|quote|plan|payment|subscription|charge|how.*(payment|charge)|development.*process|process.*(payment|charge|price))/i.test(userMessage)) {
      botResponse = `Hi${displayName ? `, ${displayName}` : ''}, at GreatOdeal, our project pricing is flexible and tailored to your needs. We decide pricing based on project scope, technology stack, timeline, and required resources. Our development process is structured for transparency and efficiency.

**Development & Payment Process:**
1. **Initial Consultation**: Free discovery call to understand your needs (no charge).
2. **Proposal & Quote**: Detailed scope, timeline, and fixed/milestone pricing provided.
3. **Contract & Milestone Setup**: Agreement on deliverables with payments tied to milestones (e.g., 30% upfront, 40% mid-project, 30% on delivery).
4. **Development Phase**: Agile sprints with regular updates and revisions.
5. **Testing & Launch**: QA, deployment, and handover.
6. **Ongoing Support**: Lifetime maintenance included.

**Pricing Options:**
- **One-Time Payment**: Ideal for simple and static websites. Pay once for development and basic setup—no ongoing fees.
- **Monthly Subscription Plan**: Recommended for dynamic projects needing updates with new technologies. This keeps your solution current, saves you from potential losses due to outdated tech, and ensures steady growth. Plus, spreading costs over time makes it more affordable in smaller amounts.

If your budget is limited, share details about your project—we can customize a plan that fits perfectly, prioritizing essentials and phasing development.

How can I assist you further?`;
    }
    // Check for "How will your team help me?" or similar queries
    else if (/(how.*team.*help|will.*team.*help)/i.test(userMessage)) {
      botResponse = `Hi${displayName ? `, ${displayName}` : ''}, our team at GreatOdeal specializes in **AI and IT solutions**. We offer:

- **AI & Automation**: Developing intelligent chatbots, automation pipelines, and ERP systems to streamline operations.
- **Web & Mobile Apps**: Building responsive, scalable websites and mobile applications with seamless UI/UX.
- **Backend Support**: Optimizing databases and APIs for robust performance.

Please share more details about your project, and we'll tailor our support to your needs. How can we assist you further? 🚀`;
    } 
    // Check for portfolio queries
    else if (/(portfolio|past projects|examples)/i.test(userMessage)) {
      const portfolioKeywords = [
        'website', 'web development', 'web application', 'mobile app', 'mobile application',
        'ai', 'automation', 'erp', 'saas', 'ui/ux', 'uiux', 'design', 'custom software',
        'cloud', 'data analytics', 'api integration'
      ];
      const matchedCategory = portfolioKeywords.find(keyword => 
        userMessage.toLowerCase().includes(keyword)
      );

      const knowledgeDocs = await Knowledge.find();
      let portfolioResponse = `Hi${displayName ? `, ${displayName}` : ''}, here are examples of **AI & IT solutions** we can develop at GreatOdeal:\n\n`;

      if (matchedCategory) {
        // Map keywords to category names
        const categoryMap = {
          'website': 'Websites & Web Applications',
          'web development': 'Websites & Web Applications',
          'web application': 'Websites & Web Applications',
          'mobile app': 'Mobile Apps',
          'mobile application': 'Mobile Apps',
          'ai': 'AI & Automation',
          'automation': 'AI & Automation',
          'erp': 'ERP Development',
          'saas': 'SaaS Platforms',
          'ui/ux': 'UI/UX Design',
          'uiux': 'UI/UX Design',
          'design': 'UI/UX Design',
          'custom software': 'Custom Software Development',
          'cloud': 'Cloud Native Solutions',
          'data analytics': 'Data Analytics & API Integration',
          'api integration': 'Data Analytics & API Integration'
        };

        const targetCategory = categoryMap[matchedCategory.toLowerCase()];
        let matchedPortfolio = null;
        for (const doc of knowledgeDocs) {
          if (doc.categories && doc.categories.length > 0 && doc.categories[0].name) {
            if (doc.categories[0].name.toLowerCase() === targetCategory.toLowerCase()) {
              matchedPortfolio = doc;
              break;
            }
          }
        }

        if (matchedPortfolio && matchedPortfolio.categories[0].links.length > 0) {
          portfolioResponse += `**${matchedPortfolio.categories[0].name}**\n`;
          matchedPortfolio.categories[0].links.forEach(link => {
            let previewImageMarkdown = '';
            if (link.previewImage) {
              previewImageMarkdown = `![Preview of ${link.url}](${link.previewImage})`;
              portfolioResponse += `[${previewImageMarkdown}](${link.url})\n`;
            }
            portfolioResponse += `- [${link.url}](${link.url}) — ${link.description}\n`;
          });
        } else {
          portfolioResponse = `Hi${displayName ? `, ${displayName}` : ''}, at GreatOdeal, we craft innovative **${targetCategory}** solutions, such as ${
            targetCategory === 'Mobile Apps' ? 'user-friendly mobile apps for Android and iOS' :
            targetCategory === 'AI & Automation' ? 'intelligent chatbots and automation pipelines' :
            targetCategory === 'ERP Development' ? 'integrated platforms for streamlined business operations' :
            targetCategory === 'SaaS Platforms' ? 'scalable cloud-based platforms' :
            targetCategory === 'UI/UX Design' ? 'engaging and intuitive user interfaces' :
            targetCategory === 'Custom Software Development' ? 'bespoke software tailored to your business needs' :
            targetCategory === 'Data Analytics & API Integration' ? 'data-driven insights and seamless API integrations' :
            targetCategory === 'Cloud Native Solutions' ? 'secure infrastructure and DevOps solutions' :
            'scalable e-commerce platforms and web applications'
          }. 

**Our Core AI & IT Services:**
- E-commerce Platforms: Secure, scalable stores with optimized checkout.
- ERP Systems: Integrated platforms for streamlined business operations.
- Mobile Apps: User-friendly applications for Android and iOS.

Let’s discuss your project!`;
        }
      } else {
        // General portfolio query: list all valid categories
        let validCategories = 0;
        for (const doc of knowledgeDocs) {
          if (doc.categories && doc.categories.length > 0 && doc.categories[0].name && doc.categories[0].links.length > 0) {
            portfolioResponse += `**${doc.categories[0].name}**\n`;
            doc.categories[0].links.forEach(link => {
              let previewImageMarkdown = '';
              if (link.previewImage) {
                previewImageMarkdown = `![Preview of ${link.url}](${link.previewImage})`;
                portfolioResponse += `[${previewImageMarkdown}](${link.url})\n`;
              }
              portfolioResponse += `- [${link.url}](${link.url}) — ${link.description}\n`;
            });
            portfolioResponse += '\n';
            validCategories++;
          } else {
            console.warn(`Skipping invalid Knowledge document: ${doc._id}`);
          }
        }

        if (validCategories === 0) {
          portfolioResponse = `Hi${displayName ? `, ${displayName}` : ''}, at GreatOdeal, we specialize in **AI & IT solutions** including:
- **AI & Automation**: Intelligent chatbots and automation pipelines
- **ERP Development**: Integrated platforms for business operations
- **Websites & Web Applications**: Scalable e-commerce and web apps
- **Mobile Apps**: Cross-platform Android/iOS applications
- **Custom Software Development**: Bespoke enterprise solutions
- **SaaS Platforms**: Cloud-based scalable platforms
- **UI/UX Design**: Engaging user interfaces
- **Cloud Native Solutions**: Secure infrastructure solutions
- **Data Analytics & API Integration**: Data-driven insights

While our public portfolio is being updated, we can deliver tailored **AI & IT solutions** for your business. Let’s discuss your project!`;
        }
      }

      portfolioResponse += `\nWould you like to discuss a tech stack, estimated timeline, or schedule a consultation with our team? 🚀`;
      botResponse = portfolioResponse;
    } 
    // Check for greeting
    else {
      const greetings = ['hello', 'hi', 'hey', 'greetings', 'howdy'];
      const isGreeting = greetings.includes(userMessage.toLowerCase().trim());
      if (isGreeting) {
        botResponse = `Hi${displayName ? `, ${displayName}` : ''}, how may I assist you today?`;
      } else {
        // Check for support-related query (excluding specific ones handled above)
        const supportKeywords = [
          'customer support', 'support', 'contact', 'office', 'sub office',
          'lahore', 'pakistan', 'netherlands', 'amsterdam', 'assistance', 'consultation',
          'whatsapp', 'email'
        ];
        const isSupportQuery = supportKeywords.some(keyword => userMessage.toLowerCase().includes(keyword));

        if (isSupportQuery) {
          if (!chat.supportQuery) {
            chat.supportQuery = userMessage;
            await chat.save();
          }

          botResponse = `Hi${displayName ? `, ${displayName}` : ''}, for support, you can contact us via:

- **Email**: [sales@greatodeal.com](mailto:sales@greatodeal.com)

- **WhatsApp - Netherlands Head Office (Amsterdam)**: [+31 6 14996035](https://wa.me/31614996035)

- **WhatsApp - Pakistan Sub-Office (Lahore)**: [+92 3011060841](https://wa.me/923011060841)

How else may I assist you today?`;
          chat.supportQuery = "";
          await chat.save();
        } else {
          // Normal OpenAI flow for non-support queries
          const knowledgeDocs = await Knowledge.find();
          let portfolioText = '';
          for (const doc of knowledgeDocs) {
            if (doc.categories && doc.categories.length > 0 && doc.categories[0].name) {
              portfolioText += `Category: ${doc.categories[0].name}\nPortfolio Items (links to viewable projects/designs):\n`;
              doc.categories[0].links.forEach(link => {
                let previewImageMarkdown = '';
                if (link.previewImage) {
                  previewImageMarkdown = `![Preview of ${link.url}](${link.previewImage})`;
                  portfolioText += `[${previewImageMarkdown}](${link.url})\n`;
                }
                portfolioText += `- [${link.url}](${link.url}) — ${link.description}\n`;
              });
              portfolioText += '\n' || 'None yet\n\n';
            } else {
              console.warn(`Skipping invalid Knowledge document in portfolioText: ${doc._id}`);
            }
          }

          const systemPrompt = `
You are **AI Greato**, the official conversational AI assistant for **GreatOdeal**, a global **AI and IT automation company** founded in 2016. Your role is to assist users professionally with inquiries about GreatOdeal's **AI & IT services**, expertise, technologies, and collaboration opportunities. GreatOdeal specializes in cutting-edge AI and IT solutions as your trusted technology partner.

---

### 🧠 About You
- You are a knowledgeable, polite, and professional assistant.
- Always address the user by their name (e.g., "Hi, [name], ...") if they've shared it in the conversation history.
- **Name Handling**: Scan the conversation history for any name provided by the user (e.g., "My name is Zia", "Call me Zia", or even reversed like "Zia name my"). Remember and use this name consistently in future responses. When asked "What is my name?" or similar, respond with the remembered name if available (e.g., "Your name is Zia."); otherwise, politely ask for it.
- **Focus exclusively on GreatOdeal's AI & IT services**: AI & Automation, ERP Development, Websites & Web Applications, Mobile Apps, Custom Software Development, SaaS Platforms, UI/UX Design, Cloud Native Solutions, and Data Analytics & API Integration.
- **Do NOT mention**: Graphic Design, Marketing, Blogging, or any non-technical services.
- Avoid off-topic content. If a user requests unrelated tasks, respond:
  > "I apologize, but I'm here to assist with GreatOdeal's **AI & IT solutions** and support queries. How can I help you with your technical project or question?"
- Support and contact queries are handled by custom logic that provides direct contact information.
- Always end responses with a clear call-to-action.

---

### 🌍 About GreatOdeal
Founded in 2016, GreatOdeal specializes in **AI & IT Solutions**:
- **AI & Automation** (AI & Agentic Automation, Website & App Automation)
- **ERP Development**
- **Websites & Web Applications** (React, Angular, Vue.js)
- **Mobile Apps** (Flutter, React Native)
- **Custom Software Development** (Enterprise Software)
- **SaaS Platforms**
- **UI/UX Design**
- **Cloud Native Solutions** (DevOps, API Integration)
- **Data Analytics & API Integration**

**Head Office**: Amsterdam, Netherlands (WhatsApp: +31614996035)  
**Sub-Office**: Lahore, Pakistan (WhatsApp: +923011060841)  

---

### 💼 Portfolio & Project-Related Queries
When users ask for portfolio/examples:
1. Focus on **AI & IT categories only**.
2. Use knowledge base links when available.
3. For missing categories, describe **technical capabilities**:
   - AI & Automation: "Intelligent chatbots and automation pipelines"
   - ERP: "Integrated business operation platforms"
   - Mobile Apps: "Cross-platform Android/iOS applications"
   - etc.
4. **Never mention graphic design, marketing, or blogging** in portfolio responses.

---

### ⚙️ System Behavior
- **Scope**: AI & IT services, technical support, company info only.
- **Tone**: Professional, confident, technical-focused.
- **CTA**: Always end with "How can I assist you further?" or similar.
- **No casual language** or excessive emojis (🚀 sparingly).

---

### 🧩 Portfolio Data
**Technical Portfolio**:
${portfolioText || 'Portfolio items will be populated from Knowledge base.'}

---

### 🗣️ Response Guidelines
- Technical, professional tone
- Focus on **AI & IT expertise**
- Clear, actionable responses
- Use markdown for readability
`;

          const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
          if (!process.env.OPENAI_API_KEY) {
            throw new Error("OPENAI_API_KEY is not set");
          }

          const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              { role: "system", content: systemPrompt },
              ...chat.messages.map(msg => ({
                role: msg.role === "user" ? "user" : "assistant",
                content: msg.content,
              })),
            ],
            max_tokens: 400,
            temperature: 0.7,
          });

          botResponse = completion.choices[0].message.content;
        }
      }
    }

    // Save AI message to chat
    chat.messages.push({ role: "assistant", content: botResponse });
    await chat.save();

    // Respond back with updated chat
    res.json({
      success: true,
      chatId: chat._id,
      response: botResponse,
      messages: chat.messages,
    });

  } catch (error) {
    console.error("Error in sendMessage:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};



export const getChatHistory = async (req, res) => {
  try {
    const { chatId } = req.params;
    if (!chatId) {
      return res.status(400).json({ success: false, message: "chatId is required" });
    }

    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ success: false, message: "Chat not found" });
    }

    res.json({
      success: true,
      chatId: chat._id,
      messages: chat.messages,
      queries: chat.queries,
    });
  } catch (error) {
    console.error("Error in getChatHistory:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllChats = async (req, res) => {
  try {
    const { username } = req.params;
    if (!username) {
      return res.status(400).json({ success: false, message: "Username is required" });
    }

    // Removed strict 'Anonymous' check to allow fetching for all users, including anonymous sessions
    const effectiveUsername = username;
    const chats = await Chat.find({ username: effectiveUsername }).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: chats.length,
      chats: chats.map(chat => ({
        chatId: chat._id,
        messages: chat.messages,
        queries: chat.queries,
        createdAt: chat.createdAt,
      })),
    });
  } catch (error) {
    console.error("Error in getAllChats:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// New endpoint for admin to get all chats from all users
export const getAllUserChats = async (req, res) => {
  try {
    const { page = 1, limit = 50 } = req.query; // Pagination support
    const skip = (page - 1) * limit;

    const chats = await Chat.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Chat.countDocuments();

    res.json({
      success: true,
      count: chats.length,
      total,
      page: parseInt(page),
      chats: chats.map(chat => ({
        chatId: chat._id,
        username: chat.username,
        messages: chat.messages,
        queries: chat.queries,
        createdAt: chat.createdAt,
        updatedAt: chat.updatedAt,
        supportQuery: chat.supportQuery,
      })),
    });
  } catch (error) {
    console.error("Error in getAllUserChats:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};