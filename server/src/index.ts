import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';

// Configurations
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
dotenv.config();

// Mount Routes
app.use('/auth', authRoutes);

// DB connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    // Listen to Port
    app.listen(PORT, () => console.log(`App running on port ${PORT}`));
    console.log('Connected to DB');
  })
  .catch((error: any) => {
    throw new Error(error);
  });