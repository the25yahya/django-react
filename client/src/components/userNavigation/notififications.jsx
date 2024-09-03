import Navigation from "./navigation"
import { RxSwitch } from "react-icons/rx";
import on from '../../assets/switch.png'
import off from '../../assets/toggle.png'
import { useState,useEffect } from "react";
import { useStateContext } from "../../context/contextProvider";


export default function Notifications(props) {
    ///// context and state
    const { userData, setUserData, apiUrl,updateData } = useStateContext();
    // notifications state
    const [notif, setNotif] = useState(() => {
        return userData?.notifications || false;
      });
    //////// toggle state
    const [toggle, setToggle] = useState(notif ? on : off);

    useEffect(() => {
        setToggle(notif ? on : off);
      }, [notif]);


    const toggleOn = () => {
        setToggle(on)
        updateData('notifications',false)
    }
    const toggleOff = () => {
        setToggle(off)
        updateData('notifications',true)
    }
    // fetch user data
    useEffect(() => {
        fetch(`${apiUrl}/userData`, {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            setUserData(data.data); // Set user data state
            setNotif(data.data.notifications)
            
        })
        .catch(error => {
            console.error(error);
        });
    }, [setUserData]); // Include setUserData as a dependency
    console.log(userData.notifications);
    
    return(
        <div className="pt-44 flex items-start justify-start px-10">
            <Navigation />
            <div className="w-1/2">
                <h1 className="font-bold text-3xl mb-4">Notifications</h1>
                <p className="font-bold">Marketing emails</p>
                <p className="flex items-center mt-2">
                     <span>will send you weekly emails with recommendations and company updates</span>
                     <span className="text-2xl ml-2 cursor-pointer">
                        <img
                        onClick={()=>{
                            if (toggle === off) {
                                toggleOn()   
                            }else{
                                toggleOff()
                            }
                        }}
                        className="w-10"
                        src={toggle} alt="" />
                     </span>
                </p>
            </div>
        </div>
    )
}