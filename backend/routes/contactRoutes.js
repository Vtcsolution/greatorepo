import express from 'express';
import contactController from '../controllers/contactController.js';

const router = express.Router();

router.post('/send', contactController.sendContactEmail);
router.get('/all', contactController.getAllContacts);
router.post('/reply', contactController.sendReplyEmail);

export default router;