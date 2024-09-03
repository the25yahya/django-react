import Navigation from "./navigation"
import { useStateContext } from "../../context/contextProvider"
import { useEffect, useState } from "react";
import { FaChevronDown,FaChevronUp } from "react-icons/fa";

export default function Settings(params) {
    const { updateData,userData, setUserData } = useStateContext()
    const [ langCountry,setLangCountry ] = useState(["USA","https://flagcdn.com/w320/us.png"]);
    const [ countries,setCountries ] = useState([])
    const [ scroll,setScroll ] = useState(false)

    const switchScroll = ()=>{
        setScroll(!scroll)
    }

    useEffect(()=>{

        fetch('https://restcountries.com/v3.1/all?fields=name,flags',{
            method:'GET'
        })
        .then((response)=>{
            if(response.ok){
                return response.json()
            }
        }).then((data)=>{
            const apiData = data.map(country => ({
                name : country.name.common,
                flag : country.flags.png
            }))
            setCountries(apiData)
        }).catch((error)=>{
            console.error(error);
        })
    },[])

    const LangCountryDiv = (props) => {
        return(
            <div className="flex items-center my-1 cursor-pointer">
                <img className="w-8 mr-2" src={props.flag} alt="" />
                <p>{props.name}</p>
            </div>
        )
    }
    const langCountryContainer = countries.map((item)=>{
        return(
            <LangCountryDiv 
            key = {item.name}
            flag = {item.flag}
            name = {item.name}
            />
        )
    })
    return(
        <div className="pt-44 flex items-start justify-start px-10">
            <Navigation />
            <div className="mt-8 border-b pb-4 border-black w-1/2">
                   <h1 className="text-3xl mb-4 font-semibold">Site settings</h1>
                   <div className="flex items-center justify-between">
                        <p>Language and Country</p>
                        <div className="flex items-center">
                            <p>{userData?.country}</p>
                        </div>
                    </div>
                   <div>
                        <div className="flex items-center justify-between border border-black rounder-lg my-2 py-1 px-2">
                            <div className="flex items-center">
                               <img className="w-8 mr-2" src={langCountry['1']} alt="" />
                               <p>{langCountry[0]}</p>
                            </div>
                            <div onClick={switchScroll} className="cursor-pointer">{scroll ? <FaChevronUp /> : <FaChevronDown />}</div>
                        </div>
                        <div className={scroll ? "h-64 overflow-y-scroll" : "h-64 overflow-y-scroll hidden"}>
                                {langCountryContainer}
                        </div>
                        <button onClick={()=>updateData('country',langCountry)} className="mt-6 border border-transparent px-4 py-2 bg-black text-white hover:bg-transparent hover:text-black transition">Save Changes</button>
                   </div>
               </div>
        </div>
    )
}