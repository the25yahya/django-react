import React,{createContext,useContext,useState} from "react";
const StateContext = createContext()


export const ContextProvider = ({children})=>{

    // tokens state
    const [ accessToken,setAccessToken ] = useState(null);
    const [ refreshToken,setRefreshToken ] = useState(null);

    //function to extract cookies from document.cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    //check login state
    function checkLoginState(){
        let token = getCookie('access_token')
        return !!token
    }

    //user data state
    const [ userData, setUserData ] = useState(null);

    //search sidebar state 
    const [searchSidebar,setSearchSidebar] = useState(false);
    const toggleSearch = ()=>{
        setSearchSidebar(!searchSidebar)
    }
    //Filter search sidebar state
    const [filterSidebar,setFilterSidebar] = useState(false);
    const toggleFilter = ()=>{
        setFilterSidebar(!filterSidebar)
    }
    return(
        <StateContext.Provider value={{filterSidebar,setFilterSidebar,toggleFilter,searchSidebar,toggleSearch,userData, setUserData,accessToken,refreshToken,setAccessToken,setRefreshToken,getCookie,checkLoginState}}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)