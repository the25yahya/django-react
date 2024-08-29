import React,{useState} from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import { useStateContext } from "../context/contextProvider";



function User(props) {
    const { accessToken,refreshToken } = useStateContext()
    
    const [authState,setAuthstate] = useState('login')
 
    const setSignup = () => {
        setAuthstate('signup')
    }

    const setLogin = () =>{
        setAuthstate('login')
    }
    if (accessToken == null) {
        if (authState ==='login') {
            return(
                <Login setSignup={setSignup} />
            )
        }else{
            return(
            <Signup setLogin={setLogin} />
        )
        }
    }else{
        return(
            <h1>user ui</h1>
        )
    }
}

export default User;