// controllers/adminController.js
import Admin from '../models/Admin.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const updateAdminProfile = async (req, res) => {
  try {
    let { email, oldPassword, newPassword } = req.body;
    const adminId = req.user.id;

    const admin = await Admin.findById(adminId);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    // Email update (normalize)
    if (email && email.toLowerCase() !== admin.email) {
      const found = await Admin.findOne({ email: email.toLowerCase() });
      if (found) return res.status(400).json({ message: 'Email already in use' });
      admin.email = email.toLowerCase();
    }

    // Password change
    if (newPassword) {
      if (!oldPassword) return res.status(400).json({ message: 'Old password is required to change password' });
      const isMatch = typeof admin.comparePassword === 'function'
        ? await admin.comparePassword(oldPassword)
        : await bcrypt.compare(oldPassword, admin.password);
      if (!isMatch) return res.status(400).json({ message: 'Old password is incorrect' });

      if (newPassword.length < 6) return res.status(400).json({ message: 'New password must be at least 6 characters' });
      admin.password = newPassword; // pre-save will hash once
    }

    await admin.save();

    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.json({
      message: 'Profile updated successfully',
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
      token,
    });
  } catch (err) {
    console.error('Error updating admin profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// controllers/adminController.js (addAdmin)
export const addAdmin = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const existingAdmin = await Admin.findOne({ email: email.toLowerCase() });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists with this email' });
    }

    // Create new admin without pre-hashing (pre-save will hash)
    const newAdmin = new Admin({
      email,
      password,             // plain text here — pre('save') will hash
      name: name || email.split('@')[0],
    });
    await newAdmin.save();

    const token = jwt.sign(
      { id: newAdmin._id, email: newAdmin.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'Admin created successfully',
      admin: {
        id: newAdmin._id,
        email: newAdmin.email,
        name: newAdmin.name,
      },
      token,
    });
  } catch (error) {
    console.error('Error adding admin:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAdminProfile = async (req, res) => {
  try {
    const adminId = req.user.id; // From auth middleware

    const admin = await Admin.findById(adminId).select('-password'); // Exclude password
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.status(200).json({
      message: 'Admin profile fetched successfully',
      admin: {
        id: admin._id,
        name: admin.name || admin.email, // Fallback to email if no name
        email: admin.email,
        role: admin.role || 'Administrator', // Default if not set
        // Add other fields as needed, e.g., createdAt: admin.createdAt
      },
    });
  } catch (error) {
    console.error('Error fetching admin profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
// =======================
// EXISTING LOGIN FUNCTION
// =======================
export const adminLogout = async (req, res) => {
  try {
    // Optional: Add token to blacklist (e.g., Redis set with expiry matching token)
    // For now, just clear client-side; server stateless
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (token) {
      // Example blacklist (implement if using Redis/Mongo for invalidation)
      // await blacklist.add(token, { exp: 24 * 60 * 60 }); // 24h
    }

    res.status(200).json({
      message: 'Logout successful',
    });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
export const adminLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log('=== LOGIN DEBUG START ===');

    // Normalize and show raw inputs
    console.log('Raw incoming email:', req.body.email);
    console.log('Raw incoming password (raw):', req.body.password);
    email = (email || '').toLowerCase();
    password = password ?? '';

    // Also show length and any visible whitespace (surrounding markers)
    console.log(`Normalized email: "${email}"`);
    console.log(`Password length: ${password.length}`);
    console.log(`Password with markers: ">>${password}<<"`);

    const admin = await Admin.findOne({ email });
    console.log('DB admin found?', !!admin);
    if (!admin) {
      console.log('FAIL: No admin found for', email);
      return res.status(401).json({ message: 'Invalid email or password', debug: { found: false } });
    }

    console.log('Stored hash:', admin.password);
    console.log('Stored hash length:', admin.password.length);

    // Run both async and sync compare for extra data
    const bcryptAsync = await bcrypt.compare(password, admin.password);
    const bcryptSync = bcrypt.compareSync(password, admin.password);

    console.log('bcrypt.compare (async) result ->', bcryptAsync);
    console.log('bcrypt.compareSync (sync) result ->', bcryptSync);

    // For extra safety, try compare with trimmed password and with raw original
    const trimmed = password.trim();
    const compareTrimmed = await bcrypt.compare(trimmed, admin.password);
    console.log('compare with trimmed password ->', compareTrimmed);
    console.log('trimmed markers: >>' + trimmed + '<< length:', trimmed.length);

    if (!bcryptAsync) {
      console.log('FAIL: Password mismatch. Returning debug info.');
      return res.status(401).json({
        message: 'Invalid email or password',
        debug: {
          found: true,
          storedHash: admin.password,
          compareAsync: bcryptAsync,
          compareSync: bcryptSync,
          compareTrimmed,
          incomingPasswordLength: password.length,
          incomingPasswordWithMarkers: `>>${password}<<`,
          trimmedLength: trimmed.length
        }
      });
    }

    // Success path (issue token, etc.)
    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
    console.log('SUCCESS: Token issued for', admin.email);
    return res.json({ message: 'Login success', admin: { id: admin._id, email: admin.email, name: admin.name }, token });

  } catch (error) {
    console.error('LOGIN ERROR:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

