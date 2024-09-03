import { useState } from "react";
import { FaRegHeart,FaHeart } from "react-icons/fa";

export default function Product(props) {
    const [ isInWishlist, setIsInWishlist ] = useState(false);
    const [ img, setImg ] = useState(props.img1)
    const changeImg = ()=>{
        setImg(props.img2)
    }
    const resetImg = ()=>{
        setImg(props.img1)
    }

    const handleAddToWishlist = async () => {
        try{
            const response = await fetch('http://localhost:8000/api/add-wishlist',{
                method:'POST',
                body:JSON.stringify({
                    productId:props.id
                })
            });
            if (response.ok){
                setIsInWishlist(true);
                alert('Item added to wishlist !')
            }else{
                alert('Failed to add item to wishlist , try again later')
            }
        }catch (error){
            console.error(error);
            
        }
    }

    return(
        <div className="flex-col items-start justify-center mx-4 mt-12">
            <div className="relative">
                <p className={`absolute left-2 top-2 bg-white px-1 border ${props.tag ? "" : "hidden"}`}>{props.tag}</p>
                <img onMouseEnter={changeImg} onMouseLeave={resetImg} className="product-img w-64 cursor-pointer" src={img} alt="" />
                <p className="absolute opacity-90 bottom-1 w-full bg-stone-500 text-white font-sm">{props.type}</p>
            </div>
            <div className="flex items-center justify-between">
                <p>{props.brand}</p>
                <p onClick={handleAddToWishlist} className="cursor-pointer">{isInWishlist ? <FaHeart/> : <FaRegHeart/>}</p>
            </div>
            <div className="flex w-full justify-start"><p className="text-lg font-semibold">{props.name}</p></div>
            <p className="flex items-center">
                <span className="mr-1 font-bold">{props.price}</span>
                <span className="font-bold">$</span>
            </p>
            <div className="flex items-center">
                <p className="mr-1">{props.xs ? 'xs' : null}</p>
                <p className="mr-1">{props.m ? 'm' : null}</p>
                <p className="mr-1">{props.l ? 'L' : null}</p>
                <p className="mr-1">{props.xl ? 'xl' : null}</p>
            </div>
        </div>
    )
}