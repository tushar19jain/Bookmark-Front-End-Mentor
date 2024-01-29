"use client"
import './ContactForm.css'
import { useState } from "react"
const ContactForm=()=>{
const [checkEmail, verifyEmail] = useState(true)
const validate=()=>{
}
    return(
        <div className="inputFields flex justify-center gap-[40px]">
            <input className="email px-[10px] py-[10px] w-[280px]" placeholder="demo@gmail.com"></input>
            <button onClick={validate} className="bg-red-500 rounded-md text-sm py-[10px] px-[20px] font-semibold text-white">Contact Us</button>
        </div>
    )
}
export default ContactForm