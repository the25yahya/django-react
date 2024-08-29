import React,{useState,useEffect} from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import { useStateContext } from "../context/contextProvider";
import UserProfile from "../components/userProfile";


function User(props) {
    const { accessToken,checkLoginState,getCookie,setAccessToken } = useStateContext()


    useEffect(() => {
        if (checkLoginState()) {
            setAccessToken(getCookie('access_token'));
        }
    }, [checkLoginState, getCookie, setAccessToken]); 

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
            <UserProfile />
        )
    }
}

export default User;