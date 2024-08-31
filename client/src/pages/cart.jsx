import React from "react"
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { useEffect,useState } from "react";

export default function Cart(props) {
    const [ cart,setCart ] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/api/cart',{
            method:'GET',
            credentials:'include'
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setCart(data)
            console.log(data);
            
        })
        .catch((error)=>{
            console.error(error);
        })
    },[])

    return(
        <div className="pt-36 grid place-items-center">
            <div className="flex items-center border-b pb-2 w-full justify-center">
                <p className="mx-2"><Link to="/">HOME</Link></p>
                <span><GoChevronRight/></span>
                <p>Cart</p>
            </div>
            <div className="text-center mt-12">
                <div className="text-8xl flex items-center justify-center"><IoBagOutline/></div>
                <p className="text-xl my-3">Your cart is currently empty</p>
                <Link to="/"><button className="border px-6 py-2 border-black hover:bg-black hover:text-white transition">Return to shop</button></Link>
            </div>
        </div>
    )
}