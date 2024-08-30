import React from "react"
import { CiHeart} from "react-icons/ci";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

export default function Wishlist(props) {
    return(
        <div className="pt-36 grid place-items-center">
            <div className="flex items-center border-b pb-2 w-full justify-center">
                <p className="mx-2"><Link to="/">HOME</Link></p>
                <span><GoChevronRight/></span>
                <p>Wishlist</p>
            </div>
            <div className="text-center mt-12">
                <div className="text-8xl flex items-center justify-center"><CiHeart/></div>
                <p className="text-xl my-3 flex items-center"><span>Click the</span><span className="mt-1 mx-1"><CiHeart/></span><span> To add Products</span></p>
                <Link to="/"><button className="border px-6 py-2 border-black hover:bg-black hover:text-white transition">Return to shop</button></Link>
            </div>
        </div>
    )
}