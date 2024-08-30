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
               </Routes>
               <Footer />
            </div>
        </Router>
    )
}