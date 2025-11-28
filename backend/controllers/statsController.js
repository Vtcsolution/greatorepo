// controllers/statsController.js (New controller for dashboard stats)
import Chat from '../models/chatModel.js';
import Contact from '../models/ContactModel.js'; // Assuming contact model path
import Blog from '../models/Blog.js'; // Blog model

const statsController = {
  getStats: async (req, res) => {
    try {
      // Get total chats
      const totalChats = await Chat.countDocuments();

      // Get total contacts/emails received
      const totalContacts = await Contact.countDocuments();

      // Get total blogs created
      const totalBlogs = await Blog.countDocuments();

      res.json({
        success: true,
        data: {
          totalChats,
          totalContacts,
          totalBlogs,
        },
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch stats' });
    }
  },
};

export default statsController;