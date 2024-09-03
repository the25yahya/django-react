import { useStateContext } from "../../context/contextProvider";
import React, { useEffect,useState } from "react";
import Navigation from "./navigation";

export default function UserProfile(props) {
    // Get the initial state of user data
    const { userData, setUserData } = useStateContext();

      // State for toggling sections
    const [editingSection, setEditingSection] = useState(null);

    // Fetch data when component mounts
    useEffect(() => {
        fetch('http://localhost:8000/api/userData', {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            setUserData(data.data); // Set user data state
        })
        .catch(error => {
            console.error(error);
        });
    }, [setUserData]); // Include setUserData as a dependency

      // Function to toggle visibility
    const handleEditClick = (section) => {
       setEditingSection((prevSection) => (prevSection === section ? null : section));
    };

    //logic for updating data

    const [ name,setName ] = useState('')
    const [ email,setEmail ] = useState('')
    const [ gender,setGender ] = useState('')

    // Function to handle input changes
    const handleInputChangeName = (event) => {
        setName(event.target.value); // Update state with the input value
    };
    const handleInputChangeEmail = (event) => {
        setEmail(event.target.value); // Update state with the input value
    };
    const handleInputChangeGender = (gender) => {
        setGender(gender); // Update state with the input value
    };
    const { updateData } = useStateContext()
    return (
        <div className="pt-44 flex items-start justify-start px-10">
           <Navigation />
           <div className="w-1/2">
                <h1 className="text-3xl mb-4 font-semibold">Personal Information</h1>
                <div className="border-b pb-4 border-black">
                    <div className="flex items-center justify-between">
                        <p>USERNAME</p>
                        <div className="flex items-center">
                            <p>{userData?.name}</p>
                            <button
                             onClick={() => handleEditClick("name")}
                             className="mx-2 border py-1 px-4 text-gray-500 text-sm">Edit</button>
                        </div>
                    </div>
                    <div className={editingSection === "name" ? "" : "hidden"}>
                        <div className="border w-full leading-none pr-6 pl-1 py-1 my-2">
                            <label htmlFor="name" className="block text-sm text-gray-600 leading-none">Enter new name</label>
                            <input onChange={handleInputChangeName} className="none-input font-semibold leading-none border border-transparent" type="text" name="name" />
                        </div>
                        <button onClick={()=>updateData('name',name)} className="border border-transparent px-4 py-2 bg-black text-white hover:bg-transparent hover:text-black transition">Save Changes</button>
                    </div>
               </div>
               <div className="mt-8 border-b pb-4 border-black">
                    <div className="flex items-center justify-between">
                        <p>EMAIL</p>
                        <div className="flex items-center">
                            <p>{userData?.email}</p>
                            <button 
                            onClick={() => handleEditClick("email")}
                            className="mx-2 border py-1 px-4 text-gray-500 text-sm">Edit</button>
                        </div>
                    </div>
                   <div className={editingSection === "email" ? "" : "hidden"}>
                        <div className="border w-full leading-none pr-6 pl-1 py-1 my-2">
                            <label htmlFor="email" className="block text-sm text-gray-600 leading-none">Enter new name</label>
                            <input onChange={handleInputChangeEmail} className="font-semibold leading-none border border-transparent" type="email" name="email"/>
                        </div>
                        <button onClick={()=>updateData('email',email)} className="border border-transparent px-4 py-2 bg-black text-white hover:bg-transparent hover:text-black transition">Save Changes</button>
                   </div>
               </div>
               <div className="mt-8 border-b pb-4 border-black">
                    <div className="flex items-center justify-between">
                        <p>Gender</p>
                        <div className="flex items-center">
                            <p>{userData?.gender}</p>
                            <button 
                            onClick={() => handleEditClick("gender")}
                            className="mx-2 border py-1 px-4 text-gray-500 text-sm">Edit</button>
                        </div>
                    </div>
                    <div className={editingSection === "gender" ? "" : "hidden"}>
                        <div className="flex items-center my-3">
                            <div onClick={()=>handleInputChangeGender('Male')} className={`cursor-pointer px-6 py-2 text-sm text-gray-500 border border-gray-400 ${gender === "Male" ? 'bg-black text-white' : ''}`}>Male</div>
                            <div onClick={()=>handleInputChangeGender('Female')} className={`cursor-pointer px-6 py-2 text-sm text-gray-500 border border-gray-400 ${gender === "Female" ? 'bg-black text-white' : ''}`}>Female</div>
                            <div onClick={()=>handleInputChangeGender('Other')} className={`cursor-pointer px-6 py-2 text-sm text-gray-500 border border-gray-400 ${gender === "Other" ? 'bg-black text-white' : ''}`}>Other</div>
                        </div>
                        <button onClick={()=>updateData('gender',gender)} className="border border-transparent px-4 py-2 bg-black text-white hover:bg-transparent hover:text-black transition">Save Changes</button>
                    </div>
               </div>
           </div>
        </div>
    );
}
