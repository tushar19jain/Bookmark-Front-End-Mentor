"use client"
import './FAQdropdown.css'
import { useState } from "react"

const FAQdropsdown =(props)=>{
const [dropDown, openDropDown] = useState(false)
const expandDrop=()=>{
    openDropDown(!dropDown)
}
    return(
        dropDown ?
        <div className="head w-[500px] ml-[520px] flex flex-col justify-center">
            <hr></hr>
            <div className="flex items-center justify-between  py-[25px]">
                <h1 onClick={expandDrop} className="text-md cursor-pointer ">{props.heading}</h1>
                <img onClick={expandDrop} className="cursor-pointer rotate-180" src="icon-arrow.svg"></img>
            </div>
            <p  className="detail text-gray-400 py-[15px] w-[500px]">{props.desc}</p>
            <hr></hr>
        </div>
        :
        <div className="head w-[500px] ml-[520px] flex flex-col justify-center">
        <hr></hr>
        <div className="flex items-center justify-between  py-[20px]">
            <h1 onClick={expandDrop} className="text-md cursor-pointer ">{props.heading}</h1>
            <img onClick={expandDrop} className="cursor-pointer" src="icon-arrow.svg"></img>
        </div>
        <hr></hr>
    </div>
    )
}
export default FAQdropsdown