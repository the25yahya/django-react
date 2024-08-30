import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useStateContext } from "../context/contextProvider";

export default function SearchFilter(params) {
    const { toggleFilter, filterSidebar } = useStateContext();
    
    // State to manage which accordion sections are open
    const [openSection, setOpenSection] = useState(null);

    // Function to toggle a section
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div
            className={`z-10 shadow-sm shadow-black fixed border-l border-gray-300 right-0 -top-2 bg-white w-1/3 h-screen p-10 ${filterSidebar ? '' : 'hidden'}`}
        >
            <div onClick={toggleFilter} className="absolute text-xl cursor-pointer top-5 right-5"><IoMdClose /></div>
            
            <div className="border-b border-gray-500 pb-2 my-4">
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection('categories')}
                >
                    <p>CATEGORIES</p>
                    <p className="cursor-pointer">{openSection === 'categories' ? <FaChevronRight /> : <FiPlus />}</p>
                </div>
                {openSection === 'categories' && (
                    <div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1">Women</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1">Men</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1">Kids</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1">Accessories</p>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="border-b border-gray-500 pb-2 mb-4">
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection('price')}
                >
                    <p>PRICE</p>
                    <p className="cursor-pointer">{openSection === 'price' ? <FaChevronRight /> : <FiPlus />}</p>
                </div>
                {openSection === 'price' && (
                    <div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1 flex items-center font-semibold"><FaChevronLeft />100$</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1 flex items-center font-semibold"><FaChevronLeft />250$</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1 flex items-center font-semibold"><FaChevronLeft />500$</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1 flex items-center font-semibold"><FaChevronRight />500$</p>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="border-b border-gray-500 pb-2 mb-4">
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection('size')}
                >
                    <p>SIZE</p>
                    <p className="cursor-pointer">{openSection === 'size' ? <FaChevronRight /> : <FiPlus />}</p>
                </div>
                {openSection === 'size' && (
                    <div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1 flex items-center font-semibold">XSS</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1 flex items-center font-semibold"><FaChevronLeft />M</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1 flex items-center font-semibold"><FaChevronLeft />L</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1 flex items-center font-semibold"><FaChevronRight />XL</p>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="border-b border-gray-500 pb-2 mb-4">
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection('brand')}
                >
                    <p>BRAND</p>
                    <p className="cursor-pointer">{openSection === 'brand' ? <FaChevronRight /> : <FiPlus />}</p>
                </div>
                {openSection === 'brand' && (
                    <div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1">NIKE</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1">BALENCIAGA</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1">POLO</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1">MOS MOSH</p>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <input type="checkbox" />
                            <p className="text-sm ml-1">UNDER ARMOR</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
