import Navigation from "./navigation"
import { RxSwitch } from "react-icons/rx";


export default function Notifications(props) {
    return(
        <div className="pt-44 flex items-start justify-start px-10">
            <Navigation />
            <div className="w-1/2">
                <h1 className="font-bold text-3xl mb-4">Notifications</h1>
                <p className="font-bold">Marketing emails</p>
                <p className="flex items-center mt-2">
                     <span>will send you weekly emails with recommendations and company updates</span>
                     <span className="text-2xl ml-2 cursor-pointer"><RxSwitch /></span>
                </p>
            </div>
        </div>
    )
}