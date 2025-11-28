// routes/adminRoutes.js
import express from 'express';
import { adminLogin, addAdmin, updateAdminProfile, getAdminProfile, adminLogout } from '../controllers/adminController.js';
import { adminAuth } from '../middleware/adminAuth.js'; // Import middleware
const router = express.Router();

// POST /api/admin/login - Admin login
router.post('/login', adminLogin);
router.put('/profile',adminAuth, updateAdminProfile);
// POST /api/admin/add - Add new admin
router.post('/add', addAdmin);
router.get('/profile', adminAuth, getAdminProfile);
router.post('/logout', adminAuth, adminLogout);
export default router;
