import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import authRoutes from './Routers/authRoutes.js';
import ConnectDb from './config/db.js';
import sessionRoutes from './Routers/sessionRoutes.js';
import questionRoutes from './Routers/questionRoutes.js';
import protect from './Middleware/authMiddleware.js';
import {
  generateInterviewQuestion,
  generateConceptExplanation
} from './controllers/aicontroller.js';

// Load environment variables
dotenv.config();

const app = express();

// Determine __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to handle CORS
app.use(cors({
  origin: 'https://interviewboost.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to database
ConnectDb();

// Middleware
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/ai/generate-questions', protect, generateInterviewQuestion);
app.use('/api/ai/generate-explanation', protect, generateConceptExplanation);

// Serve uploads statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Start server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
