import React,{useState,useEffect} from "react"
import '../App.css'
import Product from "../components/product"
import { FaArrowRightLong } from "react-icons/fa6";
import Hero1 from "../components/hero1";
import Hero3 from "../components/Hero3";
import hero1img from '../assets/hero1img.jpg'
import BigSales from "../components/bigSales";
import { Link } from "react-router-dom";

function Home() {
    //hero section
    const [hero,setHero] = useState('hero1')
    const changeToHero1 = () => {
        setHero('hero1');
    };

    const changeToHero2 = () => {
        setHero('hero2');
    };

    return(
            <section className="pt-32">
                <div className="flex justify-center border-b">
                    <div className="p-16 relative">
                        <div className="absolute bottom-5 left-5 flex">
                            <div onClick={changeToHero1} className={`mr-1 cursor-pointer text-4xl font-bold ${hero === 'hero1' ? "text-black" : "text-gray-300"}`}>.</div>
                            <div onClick={changeToHero2} className={`cursor-pointer text-4xl font-bold ${hero === 'hero2' ? "text-black" : "text-gray-300"}`}>.</div>
                        </div>
                        {hero === 'hero1' && <Hero1 />}
                        {hero === 'hero2' && <Hero3 />}
                    </div>
                    {hero === 'hero1' && <img className="hero-img fade-in" src={hero1img}/>}
                    {hero === 'hero2' && <img className="hero-img fade-in" src="https://topmaj.com/wp-content/uploads/2024/05/ricky-2131286131.jpg"/>}
                </div>
                <BigSales />
                <div>
                    <div className="flex justify-center items-center my-12">
                        <div className="bg-gray-400 h-0.25 w-96"></div>
                        <p className="mx-4 text-xl font-semibold">Top Brands</p>
                        <div className="bg-gray-400 h-0.25 w-96"></div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="image-container">
                            <img className="w-60 cropped-image" src="https://img.yumpu.com/65625264/1/500x640/mos-mosh-lookbook.jpg" alt="" />
                            <Link to='/products?brand=mos-mosh'>
                                <p className="absolute bg-white flex items-center bottom-1/4 right-1/4 px-6 py-2 text-sm shadow-black shadow-lg">Shop Now <span className="mt-1 ml-1"><FaArrowRightLong /></span></p>
                            </Link>
                        </div>
                        <div className="image-container">
                            <img className="w-60 cropped-image" src="https://i.pinimg.com/736x/76/5e/3c/765e3c072635ac513c35999eda5d58f2.jpg" alt="" />
                            <Link to='/products?brand=polo'>
                            <p className="absolute bg-white flex items-center bottom-1/4 right-1/4 px-6 py-2 text-sm shadow-black shadow-lg">Shop Now <span className="mt-1 ml-1"><FaArrowRightLong /></span></p>
                            </Link>
                        </div>
                        <div className="image-container">
                            <img className="w-60 cropped-image"  src="https://tacticalgear.com.au/cdn/shop/collections/under-armour_09c38e54-70fb-4f2b-9662-6bad4717b709.jpg?v=1707287069&width=1024" alt="" />
                            <Link to='/products?brand=Under Armour'>
                            <p className="absolute bg-white flex items-center bottom-1/4 right-1/4 px-6 py-2 text-sm shadow-black shadow-lg">Shop Now <span className="mt-1 ml-1"><FaArrowRightLong /></span></p>
                            </Link>
                        </div>
                        <div className="image-container">
                           <img className="w-60 cropped-image"  src="https://theimpression.com/wp-content/uploads/2022/11/BALENCIAGA-GARDE-ROBE-CAMPAIGN-KHADIM-SOCK-IMAGE-LOGO-7.jpg" alt="" />
                           <Link to='/products?brand=Balenciaga'>
                            <p className="absolute bg-white flex items-center bottom-1/4 right-1/4 px-6 py-2 text-sm shadow-black shadow-lg">Shop Now <span className="mt-1 ml-1"><FaArrowRightLong /></span></p>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </section>
    )
}

export default Home;