
import nodemailer from 'nodemailer';
import Contact from '../models/ContactModel.js'; // MongoDB Model
import dotenv from 'dotenv';

dotenv.config();

const contactController = {
  // 1. SAVE INCOMING EMAIL TO DB + SEND NOTIFICATION
  sendContactEmail: async (req, res) => {
    try {
      const { fullName, company, phone, email, services, message } = req.body;
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        tls: { rejectUnauthorized: false }
      });

      // Service labels
      const serviceLabels = {
        'web-development': 'Web Development',
        'mobile-app': 'Mobile App Development',
        'ui-ux-design': 'UI/UX Design',
        'digital-marketing': 'Digital Marketing',
        'consultation': 'General Consultation',
        'other': 'Other'
      };

      // SAVE TO DATABASE
      const newContact = new Contact({
        fullName, company, phone, email, services, message, status: 'new'
      });
      await newContact.save();

      // SEND NOTIFICATION EMAIL TO YOU
      const mailOptions = {
        from: `"Greatodeal Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `🆕 NEW: ${serviceLabels[services]} - ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #333333; line-height: 1.6; border: 1px solid #e5e7eb;">
          
            <div style="padding: 30px;">
              <h2 style="color: #111827; font-size: 20px; margin-bottom: 20px;">New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Service:</strong> ${serviceLabels[services]}</p>
              <div style="margin: 20px 0; background: #f3f4f6; padding: 15px; border-radius: 4px;">
                <h3 style="margin: 0 0 10px; color: #111827;">Message</h3>
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="color: #6b7280; font-size: 14px;">This is an automated notification. Please reply to the customer at your earliest convenience.</p>
            </div>
            <div style="background: #f3f4f6; padding: 10px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb;">
              © 2025 Greatodeal. All rights reserved.
            </div>
          </div>`
      };

      await transporter.sendMail(mailOptions);
      
      res.status(200).json({
        success: true,
        message: 'Message sent successfully! We will reply within 24 hours.',
        data: { contactId: newContact._id }
      });

    } catch (error) {
      console.error('❌ Email failed:', error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
  },

  // 2. GET ALL INCOMING EMAILS
  getAllContacts: async (req, res) => {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      res.json({ success: true, data: contacts });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // 3. SEND REPLY
  sendReplyEmail: async (req, res) => {
    try {
      const { contactId, replyMessage, aiService } = req.body;
      const contact = await Contact.findById(contactId);
      
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        tls: { rejectUnauthorized: false }
      });

      const aiServiceLabels = {
        'ai-websites': 'AI & Custom Websites',
        'ai-apps': 'AI & Custom Apps',
        'ai-software': 'AI & Custom Software',
        'ai-saas': 'AI & Custom SaaS Platform'
      };

      // Generate HTML for recommended service
      const recommendedServiceHtml = aiService ? `
        <p><strong>Recommended Solution:</strong> ${aiServiceLabels[aiService]}</p>
      ` : '';

      const mailOptions = {
        from: `"Greatodeal" <${process.env.EMAIL_USER}>`,
        to: contact.email,
        replyTo: process.env.EMAIL_USER,
        subject: `${contact.services}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #333333; line-height: 1.6; border: 1px solid #e5e7eb;">
            <div style="background: #f3f4f6; padding: 20px; text-align: center; border-bottom: 1px solid #e5e7eb;">
              <h1 style="margin: 0; font-size: 24px; color: #111827;">Greatodeal</h1>
            </div>
            <div style="padding: 30px;">
              <h2 style="color: #111827; font-size: 20px; margin-bottom: 20px;">Hello ${contact.fullName},</h2>
              <p>Thank you for reaching out to Greatodeal. We appreciate your interest in our services.</p>
              <div style="margin: 20px 0; background: #f3f4f6; padding: 15px; border-radius: 4px;">
                <p style="margin: 0;">${replyMessage}</p>
              </div>
              <p style="margin: 20px 0;">At Greatodeal, we offer a range of AI services including AI & Automation Websites, Mobile Apps, SaaS Platform, Software, and more. Let us help you leverage cutting-edge technology for your business.</p>
              ${recommendedServiceHtml}
              <p style="margin: 20px 0;">For further assistance or to schedule a free consultation, please feel free to contact us:</p>
              <p><strong>Netherlands:</strong> +31 6 14996035</p>
              <p><strong>Pakistan Sub Office:</strong> +92 3011060841</p>
              <p><a href="mailto:${process.env.EMAIL_USER}?subject=Consultation" style="color: #2563eb; text-decoration: none;">Email for Consultation</a></p>
              <p style="color: #6b7280; font-size: 14px;">We look forward to assisting you!</p>
            </div>
            <div style="background: #f3f4f6; padding: 10px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb;">
              © 2025 Greatodeal. All rights reserved.
            </div>
          </div>`
      };

      await transporter.sendMail(mailOptions);
      
      // UPDATE STATUS TO REPLIED
      contact.status = 'replied';
      contact.repliedAt = new Date();
      await contact.save();

      res.json({ success: true, message: `Reply sent to ${contact.fullName}!` });

    } catch (error) {
      console.error('❌ Reply failed:', error);
      res.status(500).json({ success: false, message: 'Failed to send reply.' });
    }
  }
};

export default contactController;
