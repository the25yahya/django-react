import { CiHeart } from "react-icons/ci";

export default function Product(props) {
    return(
        <div className="flex-col items-start justify-center mx-4">
            <div className="relative">
                <p className="absolute left-2 top-2 bg-white px-1 border">{props.tag}</p>
                <img className="w-64 cursor-pointer" src={props.img1} alt="" />
                <p className="absolute opacity-90 bottom-1 w-full bg-stone-500 text-white font-sm">{props.type}</p>
            </div>
            <div className="flex items-center justify-between">
                <p>{props.brand}</p>
                <p><CiHeart /></p>
            </div>
            <div className="flex w-full justify-start"><p className="text-lg font-semibold">{props.name}</p></div>
            <p className="flex items-center">
                <span className="mr-1 font-bold">{props.price}</span>
                <span className="font-bold">$</span>
            </p>
            <div className="flex items-center">
                <p>{props.xs}</p>
                <p>{props.m}</p>
                <p>{props.l}</p>
                <p>{props.xl}</p>
            </div>
        </div>
    )
}