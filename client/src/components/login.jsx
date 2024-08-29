import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";
import React,{useState} from "react";

function Login(props) {
    //get access token from context
    const {setAccessToken,access_token} = useStateContext();

    //auth fields state 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }


    //login api call
    const loginCall = async () => {
        try{
            const response = await fetch('http://localhost:8000/api/login',{
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            if (!response.ok) {
                throw new Error('Network response error')
            }

            const data = await response.json();
            document.cookie = `access_token=${data.access_token}; path=/; http-only;`;
            document.cookie = `refresh_token=${data.refresh_token}; path=/; http-only;`;
            location.reload()
            
            
        }catch(error){
            console.error('Error: ',error);
        }
    }
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
                    <label className="block" htmlFor="email">EMAIL ADRESS</label>
                    <input
                        type="text"
                        name="email"
                        className="border py-1 border-gray-400 w-80 px-2"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div className="text-start mt-4">
                    <label className="block" htmlFor="password">PASSWORD</label>
                    <input
                        type="password"
                        name="password"
                        className="border py-1 border-gray-400 w-80 px-2"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <div className="flex items-center justify-between my-2">
                    <div>
                        <input type="checkbox" name="checkbox" className="mr-2"/>
                        <label htmlFor="checkbox">REMEMBER ME</label>
                    </div>
                    <p className="underline">Lost your password</p>
                </div>
                <button onClick={loginCall} className="bg-black w-80 px-2 py-2 text-white hover:bg-transparent transition hover:text-black my-3">LOG IN</button>
                <div>
                    <p>Not A Member ? <span className="underline cursor-pointer" onClick={props.setSignup}>REGISTER</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login