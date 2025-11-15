# CRUD Practice Backend

A comprehensive backend setup for practicing CRUD operations with both **Prisma (PostgreSQL)** and **Mongoose (MongoDB)**.

## 🚀 Technologies Used

- **Express.js** - Web framework
- **Prisma** - PostgreSQL ORM
- **Mongoose** - MongoDB ODM
- **PostgreSQL** - Relational database
- **MongoDB** - NoSQL database
- **Node.js** - Runtime environment

## 📁 Project Structure

```
backend/
├── config/
│   ├── prisma.js           # Prisma connection configuration
│   └── mongoose.js         # Mongoose connection configuration
├── controllers/
│   ├── prisma/             # PostgreSQL controllers
│   │   ├── userController.js
│   │   ├── postController.js
│   │   └── productController.js
│   └── mongoose/           # MongoDB controllers
│       ├── userController.js
│       ├── postController.js
│       └── productController.js
├── models/
│   └── mongoose/           # Mongoose schemas
│       ├── User.js
│       ├── Post.js
│       └── Product.js
├── routes/
│   ├── prisma/             # PostgreSQL routes
│   │   ├── userRoutes.js
│   │   ├── postRoutes.js
│   │   └── productRoutes.js
│   └── mongoose/           # MongoDB routes
│       ├── userRoutes.js
│       ├── postRoutes.js
│       └── productRoutes.js
├── prisma/
│   └── schema.prisma       # Prisma schema
├── app.js                  # Express app configuration
├── server.js               # Entry point
├── .env.example            # Environment variables template
└── package.json
```

## ⚙️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Update the `.env` file with your database credentials:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# PostgreSQL (for Prisma)
DATABASE_URL="postgresql://username:password@localhost:5432/crud_practice_db"

# MongoDB (for Mongoose)
MONGODB_URI="mongodb://localhost:27017/crud_practice_db"

# CORS
CLIENT_URL=http://localhost:3000
```

### 3. Database Setup

#### For PostgreSQL (Prisma):

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Open Prisma Studio (optional - database GUI)
npm run prisma:studio
```

#### For MongoDB (Mongoose):

Make sure MongoDB is running locally or use MongoDB Atlas connection string.

### 4. Start the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server will run on `http://localhost:5000`

## 📡 API Endpoints

### Prisma (PostgreSQL) Endpoints

#### Users
- `GET /api/prisma/users` - Get all users
- `GET /api/prisma/users/:id` - Get user by ID
- `POST /api/prisma/users` - Create user
- `PUT /api/prisma/users/:id` - Update user
- `DELETE /api/prisma/users/:id` - Delete user

#### Posts
- `GET /api/prisma/posts` - Get all posts
- `GET /api/prisma/posts/:id` - Get post by ID
- `POST /api/prisma/posts` - Create post
- `PUT /api/prisma/posts/:id` - Update post
- `DELETE /api/prisma/posts/:id` - Delete post

#### Products
- `GET /api/prisma/products` - Get all products (supports query params: category, minPrice, maxPrice)
- `GET /api/prisma/products/:id` - Get product by ID
- `POST /api/prisma/products` - Create product
- `PUT /api/prisma/products/:id` - Update product
- `DELETE /api/prisma/products/:id` - Delete product

### Mongoose (MongoDB) Endpoints

Same structure as Prisma, but use `/api/mongoose/*` instead:

- `/api/mongoose/users`
- `/api/mongoose/posts`
- `/api/mongoose/products`

### Other Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check

## 📝 Request Examples

### Create User (POST)

```json
{
  "email": "john@example.com",
  "name": "John Doe",
  "age": 25
}
```

### Create Post (POST)

```json
{
  "title": "My First Post",
  "content": "This is the content of my post",
  "published": true,
  "authorId": 1  // For Prisma
  // OR
  "author": "64abc123..."  // For Mongoose (MongoDB ObjectId)
}
```

### Create Product (POST)

```json
{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 999.99,
  "stock": 50,
  "category": "Electronics",
  "imageUrl": "https://example.com/laptop.jpg"
}
```

## 🎯 Learning Objectives

This backend setup helps you practice:

1. **Prisma (PostgreSQL)**:
   - Relational database modeling
   - Type-safe queries
   - Relations (one-to-many)
   - Migrations

2. **Mongoose (MongoDB)**:
   - Schema design
   - Document-based storage
   - Validation
   - Virtual fields
   - Population (joins)

3. **Express.js**:
   - Routing
   - Middleware
   - Error handling
   - Request/response cycle

4. **CRUD Operations**:
   - Create (POST)
   - Read (GET)
   - Update (PUT)
   - Delete (DELETE)

## 🛠️ Useful Commands

```bash
# Install dependencies
npm install

# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Generate Prisma Client
npm run prisma:generate

# Run Prisma migrations
npm run prisma:migrate

# Open Prisma Studio
npm run prisma:studio
```

## 🔍 Tips for Practice

1. Start with simple CRUD operations on Users
2. Practice creating relationships (User -> Posts)
3. Try filtering and querying (Products by category/price)
4. Compare Prisma vs Mongoose syntax
5. Test error handling (duplicate emails, invalid IDs)
6. Use Postman or Thunder Client for testing APIs

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
