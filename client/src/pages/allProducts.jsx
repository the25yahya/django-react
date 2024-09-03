import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import SearchFilter from "../components/searchFilter";
import { LuSettings2 } from "react-icons/lu";
import { useStateContext } from "../context/contextProvider";
import Product from "../components/product";
import { useState, useEffect } from "react";

export default function AllProducts() {
    // Toggle filter function from context
    const { toggleFilter,apiUrl } = useStateContext();
    // State for storing all products
    const [allProducts, setAllProducts] = useState([]);
    
    // Initialize URL state and fetch trigger state
    const [url, setUrl] = useState(`${apiUrl}/products`);
    const [fetchTrigger, setFetchTrigger] = useState(false);
    
    // Extract query parameters from the current URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const filter = urlParams.get('brand'); // Get 'brand' parameter value

    // Set the URL based on the 'brand' query parameter once at the start
    useEffect(() => {
        if (filter) {
            setUrl(`${apiUrl}/products?brand=${filter}`);
        }else {
            setUrl(`${apiUrl}/products`); // Default URL
        }
        setFetchTrigger(true); // Trigger fetch when URL is set
    }, [filter]);

    // Fetch products from the API only when fetchTrigger is true
    useEffect(() => {
        if (fetchTrigger) {
            fetch(url, {
                method: 'GET'
            })
            .then((response) => response.json())
            .then((data) => {
                setAllProducts(data);
                setFetchTrigger(false); // Reset trigger after fetching
            })
            .catch(error => console.error('Error fetching products:', error));
        }
    }, [url, fetchTrigger]);

    // Map through the fetched products to create Product components
    const allProductsComponents = allProducts.map((item) => (
        <Product
            key={item.fields.name} // Ensure key is unique, use item.id if available
            img1={item.fields.img1}
            img2={item.fields.img2}
            img3={item.fields.img3}
            img4={item.fields.img4}
            img5={item.fields.img5}
            name={item.fields.name}
            tag={item.tag}
            type={item.type}
            price={item.fields.price}
            brand={item.fields.brand}
            xs={item.fields.xs}
            l={item.fields.l}
            m={item.fields.m}
            xl={item.fields.xl}
        />
    ));

    
    return (
        <div className="pt-36 fade-in">
            <div className="relative flex items-center border-b pb-2 w-full justify-center">
                <p className="mx-2"><Link to="/">HOME</Link></p>
                <span><GoChevronRight /></span>
                <p>Products</p>
                <div onClick={toggleFilter} className="cursor-pointer absolute top-10 right-5 flex items-center px-4 py-1 bg-black text-white">
                    <p><LuSettings2 /></p>
                    <p>Filter</p>
                </div>
                <SearchFilter />
            </div>
            <div className="flex flex-wrap items-center p-8 mt-10">
                {allProductsComponents}
            </div>
        </div>
    );
}
