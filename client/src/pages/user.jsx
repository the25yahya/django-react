import React,{useState} from "react";
import Login from "../components/login";
import Signup from "../components/signup";




function User(props) {

    const [authState,setAuthstate] = useState('login')
 
    const setSignup = () => {
        setAuthstate('signup')
    }

    const setLogin = () =>{
        setAuthstate('login')
    }

    if (authState ==='login') {
        return(
            <Login setSignup={setSignup} />
        )
    }else{
        return(
        <Signup setLogin={setLogin} />
    )
    }
}

export default User;