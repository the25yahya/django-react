import React,{useState} from "react"
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useStateContext } from "../context/contextProvider";
import { Link,useNavigate } from "react-router-dom";

export default function SearchBar(params) {
    const { toggleSearch,searchSidebar } = useStateContext()
    const [searchQuery, setSearchQuery] = useState(""); 
    const navigate = useNavigate(); 

    // Function to handle input changes
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value); // Update state with the input value
    };

    // Function to handle form submission
    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        if (searchQuery.trim()) {
            // Only navigate if there is a search query
           navigate(`/search?searchQuery=${encodeURIComponent(searchQuery)}`);
        }
    };
    return(
        <div
         className={`slide-right absolute border-l border-gray-300 right-0 top-0 bg-white w-1/3 h-screen p-10 ${
         searchSidebar ? '' : 'hidden'
        }`}
        >
            <div onClick={toggleSearch} className="absolute text-xl cursor-pointer top-5 right-5"><IoMdClose/></div>
            <form 
            onSubmit={handleSearchSubmit}
            className="border-b pb-2 flex justify-start items-center">
                <p className="mx-1"><CiSearch/></p>
                <input 
                className="none-input"
                type="text"
                placeholder="Search products or brands"
                value={searchQuery}
                onChange={handleInputChange}
                />
            </form>
            <div className="grid place-items-center text-center mt-20">
                <div className="text-8xl"><CiSearch /></div>
                <p className="text-3xl w-96">Start searching for your favourite brand or product</p>
            </div>
        </div>
    )
}