import React,{useState,useEffect} from "react"
import '../App.css'
import Product from "../components/product"
import { FaArrowRightLong } from "react-icons/fa6";
import Hero1 from "../components/hero1";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import hero1img from '../assets/hero1img.jpg'

function Home() {
    const [ bigSales,setBigSales ] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/api/bigSales',{
            method:'GET'
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setBigSales(data)
        })
        .catch(
            error => console.error(error)
        )
    },[])
    const bigSalesProducts = bigSales.map((item)=>{
        return(
            <Product
            key = {item.fields.name}
            img1 = {item.fields.img1}
            name = {item.fields.name}
            price = {item.fields.price}
            brand = {item.fields.brand}
            />
        )
    })    

    //hero section
    const [hero,setHero] = useState('hero1')
    return(
            <section className="pt-32">
                <div className="flex justify-center border-b">
                    <div className="p-16 relative">
                        <div className="absolute bottom-5 left-5 flex">
                            <div className="cursor-pointer text-4xl font-bold text-gray-300">.</div>
                            <div className="cursor-pointer text-4xl font-bold text-gray-300 mx-2">.</div>
                            <div className="cursor-pointer text-4xl font-bold text-gray-300">.</div>
                        </div>
                        <Hero1 />
                    </div>
                    <img src={hero1img}/>
                </div>
                <div className="text-center">
                    <h1 className="my-8 text-3xl font-semibold">Big Sales</h1>
                    <div className="flex items-center justify-center mb-10">
                        <p className="mx-2 underline text-xl text-gray-500 font-semibold cursor-pointer opacity-80">Women</p>
                        <p className="mx-2 underline text-xl text-gray-500 font-semibold cursor-pointer opacity-80">Men</p>
                        <p className="mx-2 underline text-xl text-gray-500 font-semibold cursor-pointer opacity-80">Kids</p>
                        <p className="mx-2 underline text-xl text-gray-500 font-semibold cursor-pointer opacity-80">Accessories</p>
                    </div>
                    <div className="flex items-center justify-center">
                        {bigSalesProducts}
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center my-12">
                        <div className="bg-gray-400 h-0.25 w-96"></div>
                        <p className="mx-4 text-xl font-semibold">Top Brands</p>
                        <div className="bg-gray-400 h-0.25 w-96"></div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="image-container">
                            <img className="w-60 cropped-image" src="https://img.yumpu.com/65625264/1/500x640/mos-mosh-lookbook.jpg" alt="" />
                            <p className="absolute bg-white flex items-center bottom-1/4 right-1/4 px-6 py-2 text-sm shadow-black shadow-lg">Shop Now <span className="mt-1 ml-1"><FaArrowRightLong /></span></p>
                        </div>
                        <div className="image-container">
                            <img className="w-60 cropped-image" src="https://i.pinimg.com/736x/76/5e/3c/765e3c072635ac513c35999eda5d58f2.jpg" alt="" />
                            <p className="absolute bg-white flex items-center bottom-1/4 right-1/4 px-6 py-2 text-sm shadow-black shadow-lg">Shop Now <span className="mt-1 ml-1"><FaArrowRightLong /></span></p>
                        </div>
                        <div className="image-container">
                            <img className="w-60 cropped-image"  src="https://tacticalgear.com.au/cdn/shop/collections/under-armour_09c38e54-70fb-4f2b-9662-6bad4717b709.jpg?v=1707287069&width=1024" alt="" />
                            <p className="absolute bg-white flex items-center bottom-1/4 right-1/4 px-6 py-2 text-sm shadow-black shadow-lg">Shop Now <span className="mt-1 ml-1"><FaArrowRightLong /></span></p>
                        </div>
                        <div className="image-container">
                           <img className="w-60 cropped-image"  src="https://theimpression.com/wp-content/uploads/2022/11/BALENCIAGA-GARDE-ROBE-CAMPAIGN-KHADIM-SOCK-IMAGE-LOGO-7.jpg" alt="" />
                           <p className="absolute bg-white flex items-center bottom-1/4 right-1/4 px-6 py-2 text-sm shadow-black shadow-lg">Shop Now <span className="mt-1 ml-1"><FaArrowRightLong /></span></p>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                
            </section>
    )
}

export default Home;