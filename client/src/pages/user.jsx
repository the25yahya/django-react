import React,{useState,useEffect} from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import { useStateContext } from "../context/contextProvider";
import UserProfile from "../components/userNavigation/userProfile";
import LoginInfo from "../components/userNavigation/loginInfo";
import Settings from "../components/userNavigation/siteSettings";
import Notifications from "../components/userNavigation/notififications"
import Payement from "../components/userNavigation/payementMethods"
import { useLocation } from "react-router-dom";
import Navigation from "../components/userNavigation/navigation";

function User(props) {
    const { accessToken,checkLoginState,getCookie,setAccessToken } = useStateContext()

    // Function to get query parameters from the URL
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    const query = useQuery();
    const section = query.get('section');
    const renderComponent = () => {
        switch (section) {
            case 'login-information':
                return <LoginInfo />;
            case 'personal-information':
                return <UserProfile />;
            case 'payement-details':
                return <Payement />;
            case 'notifications':
                return <Notifications />;
            case 'site-settings':
                return <Settings />;
            default:
                return <UserProfile />;
        }
    };
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
            <div>
                {renderComponent()}
            </div>
        )
    }
}

export default User;