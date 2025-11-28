// models/Admin.js (Updated)
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true }, // Auto-lowercase on save
  password: { type: String, required: true, minlength: 6 },
  name: { type: String },
  role: { type: String, default: 'Administrator' },
}, { timestamps: true });

// Pre-save: Hash + lowercase email
adminSchema.pre('save', async function (next) {
  this.email = this.email.toLowerCase(); // Ensure lowercase
  if (this.isModified('password')) {
    try {
      this.password = await bcrypt.hash(this.password, 10);
    } catch (err) {
      return next(err);
    }
  }
  next();
});

adminSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;