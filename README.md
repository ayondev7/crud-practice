# 🎓 CRUD Operations Practice Environment

A complete full-stack learning environment for mastering **form handling** and **CRUD operations** with multiple technologies and approaches.

## 📚 What's Inside?

This repository contains:

### Backend (JavaScript)
- **Express.js** server with modular architecture
- **Prisma + PostgreSQL** implementation
- **Mongoose + MongoDB** implementation
- Complete CRUD operations for Users, Posts, and Products
- Fully commented code for learning

### Frontend (JavaScript + React)
- **8 Complete Examples** to study
- **8 Practice Problems** for you to solve
- Multiple approaches:
  - Vanilla JS + Fetch API
  - Axios
  - React Query (TanStack Query)
  - Full Stack (React Query + Axios + React Hook Form)
- Built with **Vite + React + Tailwind CSS**

### TypeScript Versions (Coming After Approval)
- Complete TypeScript versions of both frontend and backend
- Learn TypeScript while reinforcing CRUD concepts

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (for Prisma examples)
- MongoDB (for Mongoose examples)

### 1. Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with your database credentials

# Setup Prisma
npm run prisma:generate
npm run prisma:migrate

# Start server
npm run dev
```

Server runs on `http://localhost:5000`

### 2. Setup Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend runs on `http://localhost:3000`

## 📖 Learning Path

### Phase 1: Study Complete Examples ✅

Start with the **Examples** section (green section on home page):

1. **Vanilla JS + Fetch** - Understand basic HTTP requests
   - Prisma version (`/examples/vanilla-fetch-prisma`)
   - Mongoose version (`/examples/vanilla-fetch-mongoose`)

2. **Axios** - Learn cleaner HTTP syntax
   - Prisma version (`/examples/axios-prisma`)
   - Mongoose version (`/examples/axios-mongoose`)

3. **React Query** - Smart data fetching & caching
   - Prisma version (`/examples/react-query-prisma`)
   - Mongoose version (`/examples/react-query-mongoose`)

4. **Full Stack** - Production-ready approach
   - Prisma version (`/examples/fullstack-prisma`)
   - Mongoose version (`/examples/fullstack-mongoose`)

### Phase 2: Complete Practice Problems 🎯

Work on the **Practice Problems** section (orange/purple section):

#### Product Management (Easier)
- 4 variations with different technologies
- HTML/CSS done, implement the JavaScript functionality
- Practice with: name, description, price, stock, category, imageUrl

#### Blog Posts (Moderate)
- 4 variations with React Query and Full Stack approaches
- Relationships: Posts belong to Users (authorId)
- Practice with: title, content, published status, author

### Phase 3: TypeScript (After Approval) 📘

Once you're comfortable with JavaScript:
- `backend-ts/` - Complete TypeScript backend
- `frontend-ts/` - Complete TypeScript frontend
- Learn type safety while reinforcing concepts

## 🛠️ Technology Stack

### Backend
```
Express.js         - Web framework
Prisma             - PostgreSQL ORM (type-safe)
Mongoose           - MongoDB ODM (schema-based)
PostgreSQL         - Relational database
MongoDB            - NoSQL database
dotenv             - Environment variables
cors               - Cross-origin resource sharing
helmet             - Security headers
morgan             - Request logging
```

### Frontend
```
React 18           - UI library
Vite               - Build tool & dev server
Tailwind CSS       - Utility-first CSS
React Router       - Client-side routing
Axios              - HTTP client
React Query        - Data fetching & caching
React Hook Form    - Form validation
```

## 📂 Project Structure

```
crud-practice/
├── backend/                    # Express + Prisma + Mongoose
│   ├── config/                 # Database configurations
│   ├── controllers/
│   │   ├── prisma/             # PostgreSQL controllers
│   │   └── mongoose/           # MongoDB controllers
│   ├── models/
│   │   └── mongoose/           # Mongoose schemas
│   ├── routes/
│   │   ├── prisma/             # Prisma routes
│   │   └── mongoose/           # Mongoose routes
│   ├── prisma/
│   │   └── schema.prisma       # Prisma schema
│   ├── server.js               # Entry point
│   ├── app.js                  # Express configuration
│   └── README.md
│
├── frontend/                   # React + Vite + Tailwind
│   ├── src/
│   │   ├── examples/           # ✅ Complete examples
│   │   │   └── simple/
│   │   │       ├── VanillaFetchPrisma.jsx
│   │   │       ├── VanillaFetchMongoose.jsx
│   │   │       ├── AxiosPrisma.jsx
│   │   │       ├── AxiosMongoose.jsx
│   │   │       ├── ReactQueryPrisma.jsx
│   │   │       ├── ReactQueryMongoose.jsx
│   │   │       ├── FullStackPrisma.jsx
│   │   │       └── FullStackMongoose.jsx
│   │   ├── practice/           # 🎯 For you to complete
│   │   │   ├── ProductVanillaPrisma.jsx
│   │   │   ├── ProductVanillaMongoose.jsx
│   │   │   ├── ProductAxiosPrisma.jsx
│   │   │   ├── ProductAxiosMongoose.jsx
│   │   │   ├── PostReactQueryPrisma.jsx
│   │   │   ├── PostReactQueryMongoose.jsx
│   │   │   ├── PostFullStackPrisma.jsx
│   │   │   └── PostFullStackMongoose.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── README.md
│
├── backend-ts/                 # TypeScript backend (coming soon)
└── frontend-ts/                # TypeScript frontend (coming soon)
```

## 🎯 What You'll Learn

### HTTP & APIs
- ✅ RESTful API design
- ✅ HTTP methods: GET, POST, PUT, DELETE
- ✅ Request/Response cycle
- ✅ Status codes
- ✅ Headers

### Frontend Skills
- ✅ React hooks (useState, useEffect)
- ✅ Form handling
- ✅ Form validation
- ✅ Async operations
- ✅ Error handling
- ✅ State management
- ✅ API integration

### Backend Skills
- ✅ Express middleware
- ✅ Route handling
- ✅ Controller pattern
- ✅ Database operations
- ✅ Error handling
- ✅ Data validation

### Databases
- ✅ SQL (PostgreSQL with Prisma)
- ✅ NoSQL (MongoDB with Mongoose)
- ✅ Schema design
- ✅ Relationships
- ✅ Migrations

### Libraries & Tools
- ✅ Fetch API
- ✅ Axios
- ✅ React Query (data fetching & caching)
- ✅ React Hook Form (validation)
- ✅ Prisma ORM
- ✅ Mongoose ODM

## 💡 Key Differences

### Prisma vs Mongoose

| Feature | Prisma (PostgreSQL) | Mongoose (MongoDB) |
|---------|---------------------|-------------------|
| ID Field | `id` (integer) | `_id` (ObjectId) |
| Schema | `schema.prisma` file | JavaScript schemas |
| Type Safety | Built-in TypeScript | Manual typing |
| Query Style | prisma.user.findMany() | User.find() |
| Relations | Type-safe relations | Manual population |

### API Endpoints

```
Prisma Endpoints:
GET    /api/prisma/users
POST   /api/prisma/users
PUT    /api/prisma/users/:id
DELETE /api/prisma/users/:id

Mongoose Endpoints:
GET    /api/mongoose/users
POST   /api/mongoose/users
PUT    /api/mongoose/users/:id
DELETE /api/mongoose/users/:id
```

## 🧪 Testing the APIs

### Using VS Code REST Client

Create a file `test.http`:

```http
### Get all users (Prisma)
GET http://localhost:5000/api/prisma/users

### Create user (Prisma)
POST http://localhost:5000/api/prisma/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}

### Get all users (Mongoose)
GET http://localhost:5000/api/mongoose/users
```

### Using Postman or Thunder Client

Import the endpoints and start testing!

## 📝 Practice Exercise Flow

1. **Read the Example Code** - Understand the pattern
2. **Check TODO Comments** - See what needs to be implemented
3. **Implement Functions** - Write the code
4. **Test in Browser** - See if it works
5. **Check Console** - Debug any errors
6. **Compare with Examples** - Verify your approach

## 🐛 Common Issues

### Backend Issues

**"Cannot find module"**
```bash
cd backend
npm install
```

**"Database connection failed"**
- Check if PostgreSQL/MongoDB is running
- Verify DATABASE_URL in .env
- Check credentials

**"Port 5000 already in use"**
- Change PORT in .env
- Or stop other process using port 5000

### Frontend Issues

**"Module not found"**
```bash
cd frontend
npm install
```

**"Network Error" / "Failed to fetch"**
- Make sure backend is running on http://localhost:5000
- Check CORS configuration

**Blank page / White screen**
- Check browser console for errors
- Verify all imports are correct

## 📚 Additional Resources

- [Express.js Docs](https://expressjs.com/)
- [Prisma Docs](https://www.prisma.io/docs/)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [React Query Docs](https://tanstack.com/query/latest)
- [React Hook Form Docs](https://react-hook-form.com/)
- [Axios Docs](https://axios-http.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

## 🎉 Next Steps

After completing JavaScript versions:

1. ✅ **Approve for TypeScript** - Let me know when you're ready
2. **Add Features**:
   - Authentication & Authorization
   - File uploads
   - Pagination & filtering
   - Search functionality
   - Sorting
   - Real-time updates
3. **Deploy**:
   - Backend to Railway/Render
   - Frontend to Vercel/Netlify
   - Databases to cloud providers

## 🤝 Getting Help

If you get stuck:
1. Check the complete examples
2. Read the TODO comments carefully
3. Console.log() everything
4. Check browser DevTools Network tab
5. Review backend API responses

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed for learning.

---

**Happy Learning! 🚀**

Start with the examples, practice with the exercises, and master CRUD operations!
