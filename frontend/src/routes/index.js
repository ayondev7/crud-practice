const API_URL = import.meta.env.VITE_API_URL;
const BASE_URL_MONGOOSE = `${API_URL.replace(/\/$/, '')}/api/mongoose`;
const BASE_URL_PRISMA = `${API_URL.replace(/\/$/, '')}/api/prisma`;

export {BASE_URL_MONGOOSE,BASE_URL_PRISMA};

