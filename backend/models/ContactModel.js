import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  company: String,
  phone: String,
  email: { type: String, required: true },
  services: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'replied'], default: 'new' },
  repliedAt: Date,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Contact', contactSchema);