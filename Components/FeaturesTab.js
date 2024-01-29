"use client"
import './FeaturesTab.css'
import { useState } from "react";
const FeaturesTab =()=>{


const [tab, setNextTab] = useState(1);
const switchToNextTab1 =()=>{
    setNextTab(1);
}
const switchToNextTab2 =()=>{
    setNextTab(2);
}
const switchToNextTab3 =()=>{
    setNextTab(3);
}


    if(tab == 1){
        return(
            <div className='parent '>
                <div className='featureSelection'>
                    <ul className='flex justify-center gap-[140px] mt-[100px] cursor-pointer '>
                        <li onClick={switchToNextTab1}>Simple Bookmarking</li>
                        <li onClick={switchToNextTab2}>Speedy Searching</li>
                        <li onClick={switchToNextTab3}>Easy Sharing</li>
                    </ul>
                </div>
                <hr className='slidableBar bg-orange-600 h-[5px] w-[200px] ml-[400px] '></hr>
                <hr className='max-[449]: hidden'></hr>
                <div className='featuresInformation flex flex-row-reverse mt-[100px] justify-center gap-[250px] items-center'>
                    <div className='featuresText flex flex-col items-start gap-[20px]'>
                        <h1 className='text-3xl font-semibold'>Bookmark in one click</h1>
                        <p className='text-gray-400 w-[380px]'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites. </p>
                        <button className='bg-[#5368DF] py-[12px] px-[12px] text-white font-semibold rounded-md'>More Info</button>
                    </div>
                    <div className='featuresHeroImages'>
                        <img className='heroImg' src="illustration-features-tab-1.svg"></img>    
                        <div className='blueBlob w-[600px] h-[340px] bg-blue-500 absolute top-[1200px] rounded-r-full left-0  z-[-2] '></div>
                    </div>            
                </div>
            </div>
        )
    } else if(tab == 2){
        return(
            <div className='parent'>
                <div className='featureSelection'>
                    <ul className='flex justify-center gap-[140px] mt-[100px] cursor-pointer'>
                        <li onClick={switchToNextTab1}>Simple Bookmarking</li>
                        <li onClick={switchToNextTab2}>Speedy Searching</li>
                        <li onClick={switchToNextTab3}>Easy Sharing</li>
                    </ul>
                </div>
                <hr className='slidableBar bg-orange-600 h-[5px] w-[200px] ml-[680px]'></hr>
                <hr></hr>
                <div className='featuresInformation flex flex-row-reverse mt-[100px] justify-center gap-[250px] items-center '>
                    <div className='featuresText flex flex-col items-start gap-[20px]'>
                        <h1 className='text-3xl font-semibold'>Intelligent Search</h1>
                        <p className='text-gray-400 w-[380px]'>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks</p>
                        <button className='bg-[#5368DF] py-[12px] px-[12px] text-white font-semibold rounded-md'>More Info</button>
                    </div>
                    <div className='featuresHeroImages'>
                        <img className='heroImg' src="illustration-features-tab-2.svg"></img>    
                        <div className='blueBlob w-[600px] h-[340px] bg-blue-500 absolute top-[1200px] rounded-r-full left-0  z-[-2] '></div>
                    </div>            
                </div>
            </div>
        )
    }else if (tab == 3){
        return(
            <div className='parent'>
                <div className='featureSelection'>
                    <ul className='flex justify-center gap-[140px] mt-[100px] cursor-pointer'>
                        <li onClick={switchToNextTab1}>Simple Bookmarking</li>
                        <li onClick={switchToNextTab2}>Speedy Searching</li>
                        <li onClick={switchToNextTab3}>Easy Sharing</li>
                    </ul>
                </div>
                <hr className='slidableBar bg-orange-600 h-[5px] w-[200px] ml-[940px] max-[448px]:ml-[75px]'></hr>
                <hr></hr>
                <div className='featuresInformation flex flex-row-reverse mt-[100px] justify-center gap-[250px] items-center'>
                    <div className='featuresText flex flex-col items-start gap-[20px]'>
                        <h1 className='text-3xl font-semibold'>Share your bookmarks</h1>
                        <p className='text-gray-400 w-[380px]'>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                        <button className='bg-[#5368DF] py-[12px] px-[12px] text-white font-semibold rounded-md'>More Info</button>
                    </div>
                    <div className='featuresHeroImages'>
                        <img  className='heroImg' src="illustration-features-tab-3.svg"></img>    
                        <div className='blueBlob w-[600px] h-[340px] bg-blue-500 absolute top-[1200px] rounded-r-full left-0  z-[-2] '></div>
                    </div>            
                </div>
            </div>
        )
    }
    
}
export default FeaturesTab;