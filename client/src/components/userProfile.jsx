import { useStateContext } from "../context/contextProvider";
import React, { useEffect,useState } from "react";
import { CiUser,CiLogin,CiCreditCard1,CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import userImg from '../assets/user.png'

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

    return (
        <div className="pt-44 flex items-start justify-start px-10">
           <div className="w-1/5 flex-col items-center justify-center border border-gray-600 py-10 px-6 text-center mx-6">
                <div className="w-full grid place-items-center"><img src={userImg} className="w-16" /></div>
                <div className="flex items-center text-xl my-6 border-b pb-2 border-gray-500"><span className="mx-1"><CiUser/></span><p className="font-semibold">Personal Information</p></div>
                <div className="flex items-center text-xl my-6 border-b pb-2 border-gray-500"><span className="mx-1"><CiLogin/></span><p className="font-semibold">Login information</p></div>
                <div className="flex items-center text-xl my-6 border-b pb-2 border-gray-500"><span className="mx-1"><CiCreditCard1/></span><p className="font-semibold">Payement Methods</p></div>
                <div className="flex items-center text-xl my-6 border-b pb-2 border-gray-500"><span className="mx-1"><IoIosNotificationsOutline/></span><p className="font-semibold">Notifications</p></div>
                <div className="flex items-center text-xl my-6 border-b pb-2 border-gray-500"><span className="mx-1"><CiSettings/></span><p className="font-semibold">Site settings</p></div>
           </div>
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
                            <input className="font-semibold leading-none border border-transparent" type="text" name="name" value={userData?.name} />
                        </div>
                        <button className="border border-transparent px-4 py-2 bg-black text-white hover:bg-transparent hover:text-black transition">Save Changes</button>
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
                            <input className="font-semibold leading-none border border-transparent" type="email" name="email" value={userData?.email} />
                        </div>
                        <button className="border border-transparent px-4 py-2 bg-black text-white hover:bg-transparent hover:text-black transition">Save Changes</button>
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
                            <div className="cursor-pointer px-6 py-2 text-sm text-gray-500 border border-gray-400">Male</div>
                            <div className="cursor-pointer px-6 py-2 text-sm text-gray-500 border border-gray-400 mx-3">Female</div>
                            <div className="cursor-pointer px-6 py-2 text-sm text-gray-500 border border-gray-400">Other</div>
                        </div>
                        <button className="border border-transparent px-4 py-2 bg-black text-white hover:bg-transparent hover:text-black transition">Save Changes</button>
                    </div>
               </div>
           </div>
        </div>
    );
}
