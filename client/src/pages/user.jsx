import React from "react";
import Navbar from "../components/navbar";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";

function User(props) {
    return(
        <div className="pt-36 grid place-items-center">
            <div className="flex items-center border-b pb-2 w-full justify-center">
                <p className="mx-2"><Link to="/">HOME</Link></p>
                <span><GoChevronRight/></span>
                <p>LOGIN</p>
            </div>
            <div className="flex-col items-center text-center">
                <p className="text-2xl my-8 font-bold">LOGIN</p>
                <div className="text-start mt-4">
                    <label className="block" htmlFor="email-username">USERNAME OR EMAIL ADRESS</label>
                    <input type="text" name="email-username" className="border py-1 border-gray-400 w-80 px-2"/>
                </div>
                <div className="text-start mt-4">
                    <label className="block" htmlFor="password">PASSWORD</label>
                    <input type="password" name="password" className="border py-1 border-gray-400 w-80 px-2"/>
                </div>
                <div className="flex items-center justify-between my-2">
                    <div>
                        <input type="checkbox" name="checkbox" className="mr-2"/>
                        <label htmlFor="checkbox">REMEMBER ME</label>
                    </div>
                    <p className="underline">Lost your password</p>
                </div>
                <button className="bg-black w-80 px-2 py-2 text-white hover:bg-transparent transition hover:text-black my-3">LOG IN</button>
                <div>
                    <p>Not A Member ? <span className="underline cursor-pointer">REGISTER</span></p>
                </div>
            </div>
        </div>
    )
}

export default User;