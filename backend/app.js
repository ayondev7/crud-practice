import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is running' });
});

app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Welcome to CRUD Practice API' });
});

import prismaUserRoutes from './routes/prisma/userRoutes.js';
import prismaPostRoutes from './routes/prisma/postRoutes.js';
import prismaProductRoutes from './routes/prisma/productRoutes.js';

import mongooseUserRoutes from './routes/mongoose/userRoutes.js';
import mongoosePostRoutes from './routes/mongoose/postRoutes.js';
import mongooseProductRoutes from './routes/mongoose/productRoutes.js';

app.use('/api/prisma/users', prismaUserRoutes);
app.use('/api/prisma/posts', prismaPostRoutes);
app.use('/api/prisma/products', prismaProductRoutes);

app.use('/api/mongoose/users', mongooseUserRoutes);
app.use('/api/mongoose/posts', mongoosePostRoutes);
app.use('/api/mongoose/products', mongooseProductRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({ success: false, message: err.message || 'Internal Server Error' });
});

export default app;
