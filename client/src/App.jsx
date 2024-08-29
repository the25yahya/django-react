import React from "react"
import Home from "./pages/home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import User from "./pages/user";
import Footer from "./components/footer";


export default function App() {
    return(
        <Router>
             <div className="container">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user-account" element={<User/>} />
               </Routes>
               <Footer />
            </div>
        </Router>
    )
}