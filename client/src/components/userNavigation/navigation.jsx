import userImg from '../../assets/user.png'
import { CiUser,CiLogin,CiCreditCard1,CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Navigation(){
    const navigate = useNavigate()
    const handleNavigation = (section)=>{
        navigate(`?section=${section}`)
    }
    return(
        <div className="w-1/5 flex-col items-center justify-center border border-gray-600 py-10 px-6 text-center mx-6">
            <div className="w-full grid place-items-center"><img src={userImg} className="w-16" /></div>
            <div onClick={()=>handleNavigation('personal-information')} className="flex cursor-pointer items-center text-xl my-6 border-b pb-2 border-gray-500"><span className="mx-1"><CiUser/></span><p className="font-semibold">Personal Information</p></div>
            <div onClick={()=>handleNavigation('login-information')} className="flex cursor-pointer items-center text-xl my-6 border-b pb-2 border-gray-500"><span className="mx-1"><CiLogin/></span><p className="font-semibold">Login information</p></div>
            <div onClick={()=>handleNavigation('payement-details')} className="flex cursor-pointer items-center text-xl my-6 border-b pb-2 border-gray-500"><span className="mx-1"><CiCreditCard1/></span><p className="font-semibold">Payement Methods</p></div>
            <div onClick={()=>handleNavigation('notifications')} className="flex cursor-pointer items-center text-xl my-6 border-b pb-2 border-gray-500"><span className="mx-1"><IoIosNotificationsOutline/></span><p className="font-semibold">Notifications</p></div>
            <div onClick={()=>handleNavigation('site-settings')} className="flex cursor-pointer items-center text-xl my-6 border-b pb-2 border-gray-500"><span className="mx-1"><CiSettings/></span><p className="font-semibold">Site settings</p></div>
        </div>
    )
}