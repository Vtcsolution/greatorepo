import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, Shield, Zap, Cloud, BarChart3, Users } from 'lucide-react';
import { Helmet } from "react-helmet-async";


const InvestmentItservices = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [isVisible, setIsVisible] = useState({});
 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const investmentData = {
    title: "Investment IT Services and Solutions",
    description: "Greatodeal provides cutting-edge IT solutions for the investment industry, empowering wealth managers, hedge funds, and financial advisors with advanced tools for portfolio management, trading, and analytics. Our services focus on digital transformation, real-time data processing.",
    whoWeServe: [
      "Wealth management firms",
      "Hedge funds",
      "Private equity firms",
      "Asset management companies",
      "Investment banks",
      "Financial advisory firms",
      "Robo-advisors",
      "Family offices"
    ],
    solutions: [
      {
        title: "Portfolio Management Systems",
        description: "We develop sophisticated systems for portfolio tracking, asset allocation, and performance analysis, enabling investment firms to optimize client portfolios with real-time insights."
      },
      {
        title: "Trading Platforms",
        description: "Our high-performance trading platforms support multi-asset trading, algorithmic execution, and real-time market data integration for seamless operations."
      },
      {
        title: "Financial Analytics Tools",
        description: "Advanced analytics solutions leveraging AI and big data to provide actionable insights, risk assessment, and predictive modeling for investment strategies."
      },
      {
        title: "Client Reporting Portals",
        description: "Customizable, secure portals for clients to access performance reports, investment insights, and personalized financial dashboards."
      },
      {
        title: "Regulatory Compliance Solutions",
        description: "Automated tools to ensure compliance with regulations like MiFID II, SEC, and GDPR, streamlining reporting and audit processes."
      },
      {
        title: "Wealth Management CRM",
        description: "Tailored CRM systems to manage client relationships, identify cross-selling opportunities, and deliver personalized investment advice."
      }
    ],
    services: [
      "Portfolio Optimization Software",
      "Algorithmic Trading Systems",
      "Data Visualization and Reporting",
      "Cloud-Based Financial Solutions",
      "Client Onboarding Automation",
      "API Integration for Financial Ecosystems"
    ],
    technologies: [
      {
        title: "Artificial Intelligence (AI)",
        description: "We harness AI for predictive analytics, automated trading strategies, and personalized client recommendations to enhance investment outcomes."
      },
      {
        title: "Big Data and Analytics",
        description: "Our solutions process vast financial datasets to deliver real-time insights, market trends, and risk management capabilities."
      },
      {
        title: "Cloud Computing",
        description: "Scalable cloud solutions on AWS and Azure ensure secure data storage, high availability, and seamless collaboration for investment firms."
      },
      {
        title: "Blockchain",
        description: "Secure blockchain applications for transparent transaction records, smart contracts, and digital asset management."
      },
      {
        title: "Robotic Process Automation (RPA)",
        description: "RPA streamlines repetitive tasks like data reconciliation, compliance reporting, and client onboarding, reducing costs and errors."
      },
      {
        title: "APIs for Financial Integration",
        description: "Seamless integration with market data providers, trading platforms, and third-party financial services via secure APIs."
      }
    ],
    whyChooseUs: [
      {
        title: "Our industry expertise",
        description: "With deep knowledge of the investment sector, we deliver tailored IT solutions to meet the complex needs of financial institutions."
      },
      {
        title: "Cutting-edge technologies",
        description: "We integrate AI, blockchain, and cloud computing to drive performance, transparency, and innovation in investment operations."
      },
     
      {
        title: "Risk management and analytics",
        description: "Our solutions provide real-time risk assessment and predictive analytics to optimize investment strategies and minimize exposure."
      },
      {
        title: "Client-centric solutions",
        description: "We build tools to enhance client experiences, from intuitive portals to personalized analytics, fostering trust and loyalty."
      },
      {
        title: "Flexible collaboration",
        description: "We offer adaptable engagement models, including project-based and managed services, to align with your investment firm's goals."
      }
    ],
    securityMeasures: [
      {
        category: "Personnel",
        items: [
          "We conduct thorough background checks on all employees.",
          "All employees sign non-disclosure agreements (NDAs) to protect your confidential information.",
          "We provide regular security awareness training to keep our team informed about the latest threats and best practices.",
          "We have dedicated security personnel who perform regular spot checks and monitor our systems for any suspicious activity."
        ]
      },
      {
        category: "Processes and Standards",
        items: [
          "We are ISO 27001:2013 certified, demonstrating our commitment to information security management.",
          "We comply with SOC 2 standards for security, availability, processing integrity, confidentiality, and privacy.",
          "We conduct annual risk assessments and have incident management procedures in place.",
          "We have a business continuity plan to ensure minimal disruption in case of unexpected events.",
          "We have an internal audit program to regularly review and improve our security practices."
        ]
      },
      {
        category: "Technology and Infrastructure",
        items: [
          "We maintain a highly available and stable network infrastructure to protect against downtime and ensure data accessibility.",
          "We have centralized IT operation management to monitor and control our systems effectively.",
          "We implement physical security measures to protect our facilities and equipment.",
          "We support a hybrid working model with secure remote access solutions."
        ]
      }
    ]
  };

  const faqs = [
    {
      question: "What IT services do you offer for investment firms?",
      answer: "We provide portfolio management systems, trading platforms, financial analytics tools, client reporting portals, compliance solutions, and wealth management CRMs tailored to investment needs."
    },
    {
      question: "How do you ensure data security for financial systems?",
      answer: "We implement ISO 27001-certified measures, including encryption, multi-factor authentication, and regular audits to safeguard sensitive financial data."
    },
    {
      question: "Can you customize solutions for our investment strategies?",
      answer: "Yes, we offer bespoke and platform-based solutions tailored to your specific investment workflows and objectives."
    },
    {
      question: "What types of investment firms do you serve?",
      answer: "We serve wealth management firms, hedge funds, private equity firms, asset managers, investment banks, financial advisors, robo-advisors, and family offices."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Animation variants for smooth transitions
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: isMobile ? 30 : 10, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
    }),
    hover: { scale: 1.03, boxShadow: "0 10px 20px rgba(46, 125, 123, 0.3)" }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 8px 16px rgba(46, 125, 123, 0.4)", transition: { duration: 0.3, ease: "easeOut" } },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-[#1C2526] text-[#F5F6F5] overflow-x-hidden font-sans">
      {/* Hero Section with Video */}

 <Helmet>
  {/* Basic Meta Tags */}
  <title>Investment IT Services & Financial Software Solutions | Greatodeal Lahore Pakistan</title>
  <meta
    name="description"
    content="Greatodeal delivers advanced Investment IT Services in Lahore Pakistan, offering portfolio management systems, trading platforms, financial analytics, AI-driven investment tools, regulatory compliance software, and secure financial technology solutions for global investment firms."
  />
  <link rel="canonical" href="https://greatodeal.com/focus-areas/investment" />

  {/* Keywords */}
  <meta
    name="keywords"
    content="Investment IT Services Lahore, Financial Software Development Pakistan, Portfolio Management Systems, Trading Platform Development, Investment Analytics Software, Wealth Management Software Lahore, Hedge Fund IT Solutions, FinTech Software Pakistan, Greatodeal investment technology"
  />

  {/* Open Graph / Facebook / LinkedIn */}
  <meta property="og:title" content="Investment IT Services & Financial Software Solutions | Greatodeal" />
  <meta
    property="og:description"
    content="Portfolio management systems, trading software, AI-driven analytics, financial dashboards, compliance tools, and secure FinTech development for investment firms."
  />
  <meta property="og:type" content="video.other" />
  <meta property="og:url" content="https://greatodeal.com/focus-areas/investment" />
  <meta property="og:video" content="https://greatodeal.com/public/images/investments.mp4" />
  <meta property="og:video:type" content="video/mp4" />
  <meta property="og:video:width" content="1280" />
  <meta property="og:video:height" content="720" />
  <meta property="og:image" content="https://greatodeal.com/public/images/investments.jpg" />
  <meta property="og:image:alt" content="Investment IT Services & Financial Solutions - Greatodeal" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="player" />
  <meta name="twitter:title" content="Investment IT Services & Financial Software Solutions | Greatodeal" />
  <meta
    name="twitter:description"
    content="Advanced IT services for investment firms: trading platforms, portfolio systems, AI analytics, compliance tools, and wealth management software."
  />
  <meta name="twitter:player" content="https://greatodeal.com/public/images/investments.mp4" />
  <meta name="twitter:player:width" content="1280" />
  <meta name="twitter:player:height" content="720" />

  {/* Structured Data (JSON-LD) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "Investment IT Services & Financial Software Solutions",
        "url": "https://greatodeal.com/focus-areas/investment",
        "image": "https://greatodeal.com/public/images/investments.jpg",
        "description": "Greatodeal provides investment software solutions including portfolio management, trading platforms, AI analytics, compliance systems, and wealth management technology.",
        "provider": {
          "@type": "Organization",
          "name": "Greatodeal",
          "url": "https://greatodeal.com",
          "logo": "https://greatodeal.com/public/images/investments.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shadman 2, Gulberg",
            "addressLocality": "Lahore",
            "addressCountry": "Pakistan"
          }
        },
        "areaServed": ["Pakistan", "Lahore", "Netherlands", "UK", "UAE", "USA"],
        "serviceType": [
          "Portfolio Management Systems",
          "Trading Platform Development",
          "Financial Analytics Solutions",
          "Compliance Automation (MiFID II, SEC, GDPR)",
          "Wealth Management CRM",
          "Client Reporting Portals",
          "Blockchain-based Financial Software",
          "AI & Predictive Investment Analytics",
          "RPA for Investment Operations",
          "Cloud-hosted Financial Systems"
        ],
        "video": {
          "@type": "VideoObject",
          "name": "Investment Technology Overview",
          "contentUrl": "https://greatodeal.com/public/images/investments.mp4",
          "uploadDate": "2024-01-01",
          "thumbnailUrl": "https://greatodeal.com/public/images/investments.jpg",
          "description": "A video showcasing Greatodeal's Investment IT and FinTech capabilities."
        }
      }
    `}
  </script>
</Helmet>


      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1C2526] to-[#2E7D7B]"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyRTdENEIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <motion.div
              className="text-center lg:text-left"
              variants={sectionVariants}
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-[#F5F6F5]">
                Investment IT Services and Solutions
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] mb-8 max-w-3xl mx-auto lg:mx-0 text-left">
                {investmentData.description}
              </p>
             <div className="flex justify-center lg:justify-start gap-4">
                                          
                                           <Link to="/contact" className="bg-[#ffffff] text-[#000000] px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                             Get a Cost Estimate
                                           </Link>
                                         </div>
            </motion.div>
            
            {/* Right: Video */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              variants={sectionVariants}
            >
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src='../public/images/investments.mp4'
                  poster="https://images.unsplash.com/photo-1642085030944-58c7f4ebec13?w=600&h=600&fit=crop"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/50 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who We Serve */}
      <motion.section
        id="who-we-serve"
        className="py-20 bg-[#F5F9F9]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Who We Serve?</h2>
          <p className="text-base sm:text-lg text-[#1B211E] mb-8 max-w-3xl mx-auto text-left">Greatodeal delivers innovative IT solutions tailored to the unique needs of investment firms, enabling them to optimize operations and enhance client outcomes.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {investmentData.whoWeServe.map((client, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
                className="bg-[#2E7D7B] p-4 rounded-lg border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300 text-center"
              >
                <span className="text-sm sm:text-base text-[#F5F6F5]">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Solutions */}
      <motion.section
        id="solutions"
        className="py-20 bg-[#E1E1E1]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Our Investment Software Solutions</h2>
          <p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left">Greatodeal builds advanced software solutions to empower investment firms with tools for performance, compliance, and client engagement.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentData.solutions.map((solution, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
                className="bg-[#2E7D7B] p-6 rounded-xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300 hover:shadow-lg hover:shadow-[#2E7D7B]/20"
              >
                <h3 className="text-lg font-semibold text-[#F5F6F5] mb-2">{solution.title}</h3>
                <p className="text-sm text-[#EEF4F1]">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        id="services"
        className="py-20 bg-[#F5F9F9]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Comprehensive Investment Software Development Services</h2>
          <p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left">Greatodeal offers a full suite of software engineering services to help investment firms innovate, streamline operations, and enhance client experiences.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentData.services.map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
                className="bg-[#2E7D7B] p-4 rounded-lg border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300 flex items-center justify-center text-center"
              >
                <span className="text-sm sm:text-base text-[#F5F6F5]">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies */}
      <motion.section
        id="technologies"
        className="py-20 bg-[#E1E1E1]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#2E7D7B]">Future-Forward Technologies in Investment Software Development</h2>
          <p className="text-base sm:text-lg text-[#000000] mb-12 max-w-3xl mx-auto text-left">Greatodeal leverages cutting-edge technologies to deliver investment software that drives performance and meets industry demands.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentData.technologies.map((tech, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
                className="bg-[#2E7D7B] p-6 rounded-xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300 hover:shadow-lg hover:shadow-[#2E7D7B]/20"
              >
                <h3 className="text-lg font-semibold text-[#F5F6F5] mb-2">{tech.title}</h3>
                <p className="text-sm text-[#B0B7B4]">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        id="why-choose-us"
        className="py-20 bg-[#F5F9F9]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Why Choose Greatodeal for Investment Solutions</h2>
          <p className="text-base sm:text-lg text-[#141313] mb-12 max-w-3xl mx-auto text-left">At Greatodeal, we partner with investment firms to deliver secure, innovative IT solutions that enhance performance and client trust.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentData.whyChooseUs.map((point, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
                className="bg-[#1C2526] p-6 rounded-xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300"
              >
                <div className="flex items-start mb-2">
                  <motion.div
                    className="mr-3 mt-1"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {i === 0 && <Shield className="w-5 h-5 text-[#F5F9F9]" />}
                    {i === 1 && <Zap className="w-5 h-5 text-[#F5F9F9]" />}
                    {i === 2 && <Cloud className="w-5 h-5 text-[#F5F9F9]" />}
                    {i === 3 && <Shield className="w-5 h-5 text-[#F5F9F9]" />}
                    {i === 4 && <BarChart3 className="w-5 h-5 text-[#F5F9F9]" />}
                    {i === 5 && <Users className="w-5 h-5 text-[#F5F9F9]" />}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-[#F5F9F9]">{point.title}</h3>
                </div>
                <p className="text-sm text-[#B0B7B4]">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Security Measures */}
      <motion.section
        id="security-measures"
        className="py-20 bg-[#F5F9F9]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Our Security Measures to Protect Your Intellectual Property</h2>
          <p className="text-base sm:text-lg text-[#141313] mb-12 max-w-3xl mx-auto text-left">At Greatodeal, we prioritize the security of your sensitive financial data with comprehensive measures tailored for the investment industry.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentData.securityMeasures.map((measure, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
                className="bg-[#2E7D7B] bg-opacity-30 p-6 rounded-xl border border-[#2E7D7B]/30"
              >
                <h3 className="text-lg font-semibold text-[#141313] mb-4">{measure.category}</h3>
                <ul className="space-y-2">
                  {measure.items.map((item, j) => (
                    <motion.li
                      key={j}
                      custom={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: j * 0.1 }}
                      className="flex items-start text-sm text-[#141313]"
                    >
                      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                        <CheckCircle className="w-4 h-4 text-[#141313] mr-2 mt-1 flex-shrink-0" />
                      </motion.div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        className="py-20 bg-[#F5F9F9]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-[#141313]">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#2E7D7B] rounded-xl overflow-hidden border border-[#2E7D7B]/30 hover:shadow-lg hover:shadow-[#2E7D7B]/30 transition-all duration-300 ${
                  isVisible.faq ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <motion.button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? -1 : index)}
                  className="w-full text-left p-6 hover:bg-[#266966] transition-colors duration-300 flex justify-between items-center"
                  whileHover={{ backgroundColor: "#266966", scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-base sm:text-lg font-semibold text-[#F5F6F5]">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: expandedFAQ === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="w-5 h-5 text-[#F5F6F5]" />
                  </motion.div>
                </motion.button>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="px-6 pb-6 text-[#EEF4F1] text-sm sm:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-[#1C2526] to-[#2E7D7B] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#F5F6F5]">
            Ready to Transform Your Investment Firm with Technology?
          </h2>
          <p className="text-lg text-[#B0B7B4] mb-8">Partner with Greatodeal to build innovative solutions that enhance performance, ensure compliance, and deliver superior client experiences.</p>
          <Link
                       to="/contact"
                       className="bg-[#2E7D7B] hover:bg-[#266966] text-[#F5F6F5] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
                     >
                       Get in Touch
                     </Link>
        </div>
      </motion.section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        body {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default InvestmentItservices;