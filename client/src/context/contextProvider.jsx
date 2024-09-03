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

    //update data user sections function
    const updateData = (field,value) => {
        const data = JSON.stringify({[field]:value})
        if (data) {
            fetch('http://localhost:8000/api/userData',{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                credentials: 'include',
                body:data
            }).then((response)=>{
                if (!response.ok) {
                    throw new Error('Failed to update data')
                }
                return response.json()
                
            }).then((data)=>{
                setUserData(data.data);
                
            }).catch((error)=>{
                console.error(error)
            })
        }
    }
    return(
        <StateContext.Provider value={{updateData,filterSidebar,setFilterSidebar,toggleFilter,searchSidebar,toggleSearch,userData, setUserData,accessToken,refreshToken,setAccessToken,setRefreshToken,getCookie,checkLoginState}}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)