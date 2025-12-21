import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// Examples
import VanillaFetchPrisma from './examples/simple/VanillaFetchPrisma'
import AxiosPrisma from './examples/simple/AxiosPrisma'
import ReactQueryPrisma from './examples/simple/ReactQueryPrisma'
import FullStackPrisma from './examples/simple/FullStackPrisma'
import VanillaFetchMongoose from './examples/simple/VanillaFetchMongoose'
import AxiosMongoose from './examples/simple/AxiosMongoose'
import ReactQueryMongoose from './examples/simple/ReactQueryMongoose'
import FullStackMongoose from './examples/simple/FullStackMongoose'

// CRUD Pages - POST
import CreateUser from './pages/crud/post/CreateUser'
import CreatePost from './pages/crud/post/CreatePost'
import CreateProduct from './pages/crud/post/CreateProduct'
import CreateOrder from './pages/crud/post/CreateOrder'

// CRUD Pages - GET
import ListUsers from './pages/crud/get/ListUsers'
import GetUserById from './pages/crud/get/GetUserById'
import ListPosts from './pages/crud/get/ListPosts'
import ListProducts from './pages/crud/get/ListProducts'
import ListOrders from './pages/crud/get/ListOrders'

// CRUD Pages - UPDATE
import UpdateUser from './pages/crud/update/UpdateUser'
import UpdatePost from './pages/crud/update/UpdatePost'
import UpdateProduct from './pages/crud/update/UpdateProduct'
import UpdateOrderStatus from './pages/crud/update/UpdateOrderStatus'

// CRUD Pages - DELETE
import DeleteUser from './pages/crud/delete/DeleteUser'
import DeletePost from './pages/crud/delete/DeletePost'
import DeleteProduct from './pages/crud/delete/DeleteProduct'
import DeleteOrder from './pages/crud/delete/DeleteOrder'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Examples */}
        <Route path="/examples/vanilla-fetch-prisma" element={<VanillaFetchPrisma />} />
        <Route path="/examples/axios-prisma" element={<AxiosPrisma />} />
        <Route path="/examples/react-query-prisma" element={<ReactQueryPrisma />} />
        <Route path="/examples/fullstack-prisma" element={<FullStackPrisma />} />
        <Route path="/examples/vanilla-fetch-mongoose" element={<VanillaFetchMongoose />} />
        <Route path="/examples/axios-mongoose" element={<AxiosMongoose />} />
        <Route path="/examples/react-query-mongoose" element={<ReactQueryMongoose />} />
        <Route path="/examples/fullstack-mongoose" element={<FullStackMongoose />} />
        
        {/* CRUD - POST */}
        <Route path="/crud/create-user" element={<CreateUser />} />
        <Route path="/crud/create-post" element={<CreatePost />} />
        <Route path="/crud/create-product" element={<CreateProduct />} />
        <Route path="/crud/create-order" element={<CreateOrder />} />
        
        {/* CRUD - GET */}
        <Route path="/crud/list-users" element={<ListUsers />} />
        <Route path="/crud/get-user" element={<GetUserById />} />
        <Route path="/crud/list-posts" element={<ListPosts />} />
        <Route path="/crud/list-products" element={<ListProducts />} />
        <Route path="/crud/list-orders" element={<ListOrders />} />
        
        {/* CRUD - UPDATE */}
        <Route path="/crud/update-user" element={<UpdateUser />} />
        <Route path="/crud/update-post" element={<UpdatePost />} />
        <Route path="/crud/update-product" element={<UpdateProduct />} />
        <Route path="/crud/update-order-status" element={<UpdateOrderStatus />} />
        
        {/* CRUD - DELETE */}
        <Route path="/crud/delete-user" element={<DeleteUser />} />
        <Route path="/crud/delete-post" element={<DeletePost />} />
        <Route path="/crud/delete-product" element={<DeleteProduct />} />
        <Route path="/crud/delete-order" element={<DeleteOrder />} />
      </Routes>
    </BrowserRouter>
  )
}
