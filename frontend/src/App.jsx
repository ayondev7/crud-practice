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

// Practice
import ProductVanillaPrisma from './practice/ProductVanillaPrisma'
import ProductVanillaMongoose from './practice/ProductVanillaMongoose'
import ProductAxiosPrisma from './practice/ProductAxiosPrisma'
import ProductAxiosMongoose from './practice/ProductAxiosMongoose'
import PostReactQueryPrisma from './practice/PostReactQueryPrisma'
import PostReactQueryMongoose from './practice/PostReactQueryMongoose'
import PostFullStackPrisma from './practice/PostFullStackPrisma'
import PostFullStackMongoose from './practice/PostFullStackMongoose'

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
        
        {/* Practice */}
        <Route path="/practice/product-vanilla-prisma" element={<ProductVanillaPrisma />} />
        <Route path="/practice/product-vanilla-mongoose" element={<ProductVanillaMongoose />} />
        <Route path="/practice/product-axios-prisma" element={<ProductAxiosPrisma />} />
        <Route path="/practice/product-axios-mongoose" element={<ProductAxiosMongoose />} />
        <Route path="/practice/post-react-query-prisma" element={<PostReactQueryPrisma />} />
        <Route path="/practice/post-react-query-mongoose" element={<PostReactQueryMongoose />} />
        <Route path="/practice/post-fullstack-prisma" element={<PostFullStackPrisma />} />
        <Route path="/practice/post-fullstack-mongoose" element={<PostFullStackMongoose />} />
      </Routes>
    </BrowserRouter>
  )
}
