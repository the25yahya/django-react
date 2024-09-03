import Navigation from "./navigation"

export default function Payement(props) {
    return(
        <div className="pt-44 flex items-start justify-start px-10">
            <Navigation />
            <div className="w-1/2">
                <h1 className="font-bold text-3xl mb-4">Payement Method</h1>
                <p className="font-bold">Your stored Cards</p>
                <p className="opacity-90 my-1">No cards on file</p>
                <p>You can choose to save your payment card at the checkout for faster booking in the future.</p>
            </div>
        </div>
    )
}