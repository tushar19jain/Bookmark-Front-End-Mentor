import './ExtensionCard.css'
const ExtensionCard =(prop)=>{
    return(
        <div className='card flex flex-col justify-center items-center rounded-xl w-[280px] h-[350px] p-[30px] gap-[30px]'>
            <div className='logo'>
                <img src={prop.src}></img>
            </div>
            <div className='details'>
                <h1 className='browserName text-center text-xl font-semibold'>Add to {prop.browserName}</h1>
                <p className='versionDetails text-gray-400 text-center'>Minimum version {prop.version}</p>
                <br></br>
                <p className='font-semibold text-gray-400'>. . . . . . . . . . . . . . . . . . . . . . . </p>
                <br></br>
                <button className='bg-[#5368DF] py-[10px] px-[8px] text-sm text-white font-semibold rounded-md'>Add and Install Extension</button>
            </div>
        </div>
    )
}
export default ExtensionCard