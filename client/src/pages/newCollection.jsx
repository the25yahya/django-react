import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import SearchFilter from "../components/searchFilter";
import { LuSettings2 } from "react-icons/lu";
import { useStateContext } from "../context/contextProvider";
import Product from "../components/product";
import { useState,useEffect } from "react";

export default function NewCollection(props) {
    const [ newCollection,setNewCollection ] = useState([])
    const { apiUrl } = useStateContext()
    useEffect(()=>{
        fetch(`${apiUrl}/newCollection`,{
            method:'GET'
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setNewCollection(data)
        })
        .catch(
            error => console.error(error)
        )
    },[])
    const newCollectionProducts = newCollection.map((item)=>{
        return(
            <Product
            key = {item.fields.name}
            img1 = {item.fields.img1}
            img2 = {item.fields.img2}
            img3 = {item.fields.img3}
            img4 = {item.fields.img4}
            img5 = {item.fields.img5}
            name = {item.fields.name}
            tag = {item.tag}
            type = {item.type} 
            price = {item.fields.price}
            brand = {item.fields.brand}
            xs = {item.fields.xs}
            l = {item.fields.l}
            m = { item.fields.m}
            xl = {item.fields.l}
            />
        )
    })    

    
    const { toggleFilter } = useStateContext();
    
    return(
        <div className="pt-36 fade-in">
            <div className="relative flex items-center border-b pb-2 w-full justify-center">
                <p className="mx-2"><Link to="/">HOME</Link></p>
                <span><GoChevronRight/></span>
                <p>New Collection</p>
                <div onClick={toggleFilter} className="cursor-pointer absolute top-10 right-5 flex items-center px-4 py-1 bg-black text-white">
                    <p><LuSettings2/></p>
                    <p>Filter</p>
                </div>
                <SearchFilter />
            </div>
            <div>
                {newCollectionProducts}
            </div>
        </div>
    )
}