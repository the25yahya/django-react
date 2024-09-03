import { Link } from "react-router-dom"

export default function Hero1() {
    return(
        <div className="fade-in">
           <h2 className="text-6xl font-bold">WINTERR COLLECTION</h2>
           <p className="w-60 my-4">Introducing the new fashion winter collection, featuring bold and bright colors, playful prints, and comfortable yet stylish pieces perfect for any occasion. From oversized blazer dresses to monochromatic denim pieces, this collection has something for everyone.</p>
           <Link to='winterCollection'>
               <button className="pulsate transition bg-black text-white py-2 px-6 mt-4 hover:bg-transparent hover:text-black">SHOP NOW</button>
           </Link>
       </div>
    )
}