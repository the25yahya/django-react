import React from "react"
import Home from "./pages/home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import User from "./pages/user";
import Footer from "./components/footer";
import '../src/app.css'
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import SearchPage from "./pages/searchPage";
import NewCollection from "./pages/newCollection";
import WinterCollection from "./pages/winterCollection";
import AllProducts from "./pages/allProducts";

export default function App() {
    return(
        <Router>
             <div className="container fade-in">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user-account" element={<User/>} />
                    <Route path="/shopping-cart" element={<Cart/>} />
                    <Route path="/Wishlist" element={<Wishlist/>} />
                    <Route path="/search" element={<SearchPage/>} />
                    <Route path="newCollection" element={<NewCollection/>} />
                    <Route path="winterCollection" element={<WinterCollection/>} />
                    <Route path="products" element={<AllProducts/>} />
               </Routes>
               <Footer />
            </div>
        </Router>
    )
}