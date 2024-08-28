import { CiUser,CiHeart,CiSearch, } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
   
    return(
        <nav className="fixed bg-white w-full z-10">
            <div className="flex justify-between p-6 border-b border-black">
                <p className="text-sm font-bold">
                   Best special offers! 40% Off!
                </p>
                <Link to="/"><h1 className="font-bold text-2xl">VOGUEHUB</h1></Link>
                <div className="flex items-center">
                    <span className="mr-3 text-2xl"><Link to="user-account"><CiUser/></Link></span>
                    <span className="mr-3 text-2xl"><CiSearch/></span>
                    <span className="mr-3 text-2xl"><CiHeart/></span>
                    <span className="mr-3 text-2xl"><IoBagOutline/></span>
                </div>
            </div>
            <div className="flex justify-center items-center border-b">
                <div className="m-4 flex item-center">SHOP<span className="mt-1"><GoChevronDown/></span></div>
                <div className="m-4">BLOG</div>
                <div className="m-4">ABOUT</div>
                <div className="m-4 flex item-center">BRANDS<span className="mt-1"><GoChevronDown/></span></div>
                <div className="m-4 flex item-center">BEAUTY<span className="mt-1"><GoChevronDown/></span></div>
            </div>
        </nav>
    )
} 

export default Navbar;