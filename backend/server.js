import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import chatRoutes from "./routes/chatRoutes.js";
import knowledgeRoutes from "./routes/knowledgeRoutes.js"; // Renamed for clarity
import contactRoutes from './routes/contactRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import statsRoutes from './routes/statsRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Consolidated

// Routes
app.get("/", (req, res) => res.send("API is running..."));

app.use("/api/chat", chatRoutes);
app.use("/api/knowledge", knowledgeRoutes); // Updated variable name
app.use('/api/comments', commentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/stats', statsRoutes);

// 404 handler (Fixed: No path = implicit catch-all for unmatched routes)
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});