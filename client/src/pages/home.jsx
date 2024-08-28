import React,{useState} from "react"
import Navbar from "../components/navbar"
import main1 from "../assets/main1.jpg"

function Home() {

    return(
            <section className="pt-32">
                <div className="flex justify-center">
                    <div className="p-16">
                        <h2 className="text-6xl font-bold">SUMMER COLLECTION</h2>
                        <p className="w-60 my-4">Introducing the new fashion summer collection, featuring bold and bright colors, playful prints, and comfortable yet stylish pieces perfect for any occasion. From oversized blazer dresses to monochromatic denim pieces, this collection has something for everyone.</p>
                        <button className="transition bg-black text-white py-2 px-6 mt-4 hover:bg-transparent hover:text-black">SHOP NOW</button>
                    </div>
                    <img src="https://ztylez.com/wp-content/uploads/2021/08/00-6.jpg"/>
                </div>
            </section>
    )
}

export default Home;