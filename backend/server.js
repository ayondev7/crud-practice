// Minimal server startup. Removed explicit DB connection management
import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} (${process.env.NODE_ENV || 'development'})`);
});

function shutdown(signal) {
  console.log(`${signal} received — closing server.`);
  server.close(() => {
    console.log('Server closed. Exiting.');
    process.exit(0);
  });
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});
