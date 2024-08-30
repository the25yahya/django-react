import { CiSearch } from "react-icons/ci";
import SearchFilter from "../components/searchFilter";
import { useStateContext } from "../context/contextProvider";
import { LuSettings2 } from "react-icons/lu";
import { useState,useEffect } from "react";
import Product from "../components/product";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function SearchPage(props) {
    const navigate = useNavigate(); 
    //states
    const { toggleFilter } = useStateContext()
    const [ products,setProducts ] = useState([])
    const [ searchQuery,setSearchQuery ] = useState("")

    //map results 
    const allProducts = products.map((item)=>{
        return(
            <Product
            key = {item.fields.name}
            img1 = {item.fields.img1}
            name = {item.fields.name}
            tag = {item.tag}
            type = {item.type} 
            price = {item.fields.price}
            brand = {item.fields.brand}
            />
        )
    }) 
    
    //search query logic
    const location = useLocation(); // Get the current location object
    const getQueryParams = () => {
       const params = new URLSearchParams(location.search); // Parse the search string
       const searchQuery = params.get("searchQuery"); // Get the 'searchQuery' parameter
       return searchQuery;
    };
    useEffect(() => {
        // Extract the search query when the component mounts or location changes
        const query = getQueryParams();
        if (query) {
          setSearchQuery(query)
          const url = `http://localhost:8000/api/search?searchQuery=${encodeURIComponent(query)}`;
          // Fetch products or perform actions based on the search query here
          fetch(url,{
            method:'GET'
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setProducts(data)
        })
        .catch(
            error => console.error(error)
        )
        }
      }, [location]);

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
        <div className="pt-36">
            <div className="relative flex items-center justify-between">
                < SearchFilter />
                <form
                onSubmit={handleSearchSubmit} 
                className="w-full flex items-center justify-center mt-8">
                    <input
                    value={searchQuery}
                     onChange={handleInputChange}
                     type="text" className="border h-10 w-96 pl-2"/>
                    <p className="bg-black text-white w-10 h-10 grid place-items-center text-sm"><CiSearch /></p>
                </form>
                <div onClick={toggleFilter} className="cursor-pointer absolute top-5 right-5 flex items-center px-4 py-1 bg-black text-white">
                    <p><LuSettings2/></p>
                    <p>Filter</p>
                </div>
            </div>
            <div className="flex items-center justify-center mt-12">
                {allProducts}
            </div>
        </div>
    )
}