"use client"
import { useState } from "react";
import "./Navbar.css"
const Navbar =()=>{
const [navbar, openNavbar] = useState(false);
const setNavbarOpen =()=>{
    openNavbar(true);
}
const setNavbarClose =()=>{
    openNavbar(false)
}
return(
    navbar ?
        <div className= 'bg-[#637dd4f8]'>
            <div className=' flex items-center justify-between px-[40px] pt-[20px]'>
                <div className = 'logo invert'><img src = 'logo-bookmark.svg' ></img></div>
                <div className='sideNavOpen'>
                    <img onClick = {setNavbarClose} src='icon-close.svg'></img>
                </div>
            </div>
            <div className= 'openedNavLinks flex flex-col items-center py-[140px] gap-[80px]'>
            <ul><li className='text-xl text-white' >FEATURES</li></ul>
                <ul><li className='text-xl  text-white'>PRICING</li></ul>
                <ul><li className='text-xl  text-white'>CONTACT</li></ul>
                <button  className = 'bg-blue-400 border text-white px-[38px] py-[8px] text-sm rounded-md'>Login</button>
            </div>
        </div>
        :
        <div>
        <div className='flex items-center justify-between mx-[40px] mt-[20px]'>
            <div className = 'logo'><img src = 'logo-bookmark.svg' ></img></div>
            <div className = 'nav-links flex items-center gap-[50px]'>
                <ul><li className='text-sm' >FEATURES</li></ul>
                <ul><li className='text-sm'>PRICING</li></ul>
                <ul><li className='text-sm'>CONTACT</li></ul>
                <button  className = 'bg-red-500 text-white px-[38px] py-[8px] text-sm rounded-md'>Login</button>
            </div>
            <div className='sideNavOpen'>
                <img onClick={setNavbarOpen} src='icon-hamburger.svg'></img>
            </div>
        </div>
    </div>
    )
}
export default Navbar;