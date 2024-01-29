import './MainSection.css'
const MainSection=()=>{
    return(
        <div className = 'main flex mt-[100px] justify-center items-center '>
            <div className='leftSideHeading flex flex-col gap-[30px]'>
                <h1 className = 'text-5xl font-semibold w-[590px] leading-[50px]'>A Simple Bookmark Manager</h1>
                <p className = 'text-md text-gray-400 w-[430px] leading-[25px] '>A clean and simple interface to organize your favourite websites.Open a new browser and see site load instantly. Try it for free.</p>
                <div className='button-group flex gap-[50px]'>
                    <button className = 'bg-[#5368DF] py-[12px] px-[12px] text-white font-semibold rounded-md' >Get it on Chrome</button>
                    <button className = 'firefoxBtn bg-white py-[12px] px-[12px] text-black font-semibold rounded-md'>Get it on Firefox</button>
                </div>
            </div>
            <div className='rightSideHero'>
                <img  src ='illustration-hero.svg'></img>
                <div className='blub-blob w-[600px] left-[937px] h-[340px] bg-blue-500 absolute top-[300px] rounded-l-full  z-[-1] '>
                </div>
            </div>
        </div>
    )
}
export default MainSection