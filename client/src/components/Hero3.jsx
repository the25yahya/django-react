import { Link } from "react-router-dom"

export default function Hero3() {
    return(
        <div className="fade-in">
           <h2 className="text-6xl font-bold">NEW COLLECTION 2024</h2>
           <p className="w-60 my-4">Introducing the 2024 Men's Collection, where contemporary style meets timeless elegance. This new lineup brings fresh perspectives with sharp tailoring, innovative fabrics, and statement pieces that redefine modern menswear.</p>
           <Link to='/newCollection'>
               <button className="pulsate transition bg-black text-white py-2 px-6 mt-4 hover:bg-transparent hover:text-black">SHOP NOW</button>
           </Link>
       </div>
    )
}