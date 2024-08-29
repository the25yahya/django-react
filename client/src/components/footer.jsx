import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import linked from '../assets/linkedin.png'
import paypal from '../assets/paypal.png'
import amex from '../assets/amex.png'
import mastercard from '../assets/mastercard.png'
import visa from '../assets/visa.png'

export default function Footer(props) {
    return(
        <footer className='mt-20 px-10 pb-20 pt-8 flex justify-between items-center bg-black text-white'>
            <div>
                <div className='flex-col items-start'>
                    <p className='w-72 text-lg mb-2'>Sign up to our newsletter, stay up to date on the latest product releases, special offers and news</p>
                    <input className='block text-zinc-300 bg-transparent py-2 pr-20 border my-2 border-zinc-100 pl-1' type="Email" placeholder="Your Email" />
                    <button className='bg-zinc-500 text-zinc-300 border-transparent py-1 px-4'>Sign up</button>
                </div>
                <div className='mt-10 flex items center'>
                    <img className='w-10 mr-2' src={paypal} alt="" />
                    <img className='w-10 mr-2' src={mastercard} alt="" />
                    <img className='w-10 mr-2' src={visa} alt="" />
                    <img className='w-10 mr-2' src={amex} alt="" />
                </div>
            </div>
            <div>
                <div>
                    <p className='mb-3 hover:opacity-50 transition cursor-pointer'>Shop</p>
                    <p className='mb-3 hover:opacity-50 transition cursor-pointer'>Faq</p>
                    <p className='mb-3 hover:opacity-50 transition cursor-pointer'>Shipping</p>
                    <p className='mb-3 hover:opacity-50 transition cursor-pointer'>Returns</p>
                    <p className='mb-3 hover:opacity-50 transition cursor-pointer'>Terms & Conditions</p>
                    <p className='mb-3 hover:opacity-50 transition cursor-pointer'>Privacy Policy</p>
                </div>
                <p className='mt-10 opacity-50'>&copy; 2024 All Rights Reserved.</p>
            </div>
            <div>
                <div>
                    <p className='opacity-60 w-96 mb-10'>Contact our costumer services if you feel unsure about anything in our store</p>
                    <p>Monday - Friday: 10:00-6:00 PM</p>
                    <div><span className='opacity-60'>Phone : </span><span>+1 611-346-3453</span></div>
                    <div><span className='opacity-60'>Email : </span><span>VoguehubStore@email.com</span></div>
                </div>
                <div className='flex items-center mt-8'>
                    <img className='w-6' src={fb} alt="" />
                    <img className='w-6 mx-3' src={insta} alt="" />
                    <img className='w-6' src={linked} alt="" />
                </div>
            </div>
        </footer>
    )
}