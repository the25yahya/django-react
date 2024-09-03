import Navigation from "./navigation"
import { useStateContext } from "../../context/contextProvider"
import { useState } from "react";


export default function LoginInfo(params) {
    const { updateData,userData, setUserData } = useStateContext()

    const [ password,setPassword ] = useState("")
    const handleInputChangePassword = (event) => {
        setPassword(event.target.value); // Update state with the input value
    };

    // State for toggling sections
    const [editingSection, setEditingSection] = useState(null);
    // Function to toggle visibility
    const handleEditClick = (section) => {
        setEditingSection((prevSection) => (prevSection === section ? null : section));
    };
    return(
        <div className="pt-44 flex items-start justify-start px-10">
            <Navigation />
            <div className="mt-8 border-b pb-4 border-black w-1/2">
                   <h1 className="text-3xl mb-4 font-semibold">Login Information</h1>
                   <div className="flex items-center justify-between">
                        <p>Password</p>
                        <div className="flex items-center">
                            <p>{userData?.password}</p>
                            <button 
                            onClick={() => handleEditClick("password")}
                            className="mx-2 border py-1 px-4 text-gray-500 text-sm">Edit</button>
                        </div>
                    </div>
                   <div className={editingSection === "password" ? "" : "hidden"}>
                        <div className="border w-full leading-none pr-6 pl-1 py-1 my-2">
                            <label htmlFor="password" className="block text-sm text-gray-600 leading-none">Enter new Password</label>
                            <input onChange={handleInputChangePassword} className="font-semibold leading-none border border-transparent" type="password" name="email"/>
                        </div>
                        <button onClick={()=>updateData('password',password)} className="border border-transparent px-4 py-2 bg-black text-white hover:bg-transparent hover:text-black transition">Save Changes</button>
                   </div>
               </div>
        </div>
    )
}