// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config({path : "backend/config/config.env"});

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
console.log(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.log('MongoDB connection Error: ', err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});