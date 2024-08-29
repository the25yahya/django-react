import React,{createContext,useContext,useState} from "react";
const StateContext = createContext()


export const ContextProvider = ({children})=>{
    const [ accessToken,setAccessToken ] = useState(null);
    const [ refreshToken,setRefreshToken ] = useState(null);
    return(
        <StateContext.Provider value={{accessToken,refreshToken,setAccessToken,setRefreshToken}}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)