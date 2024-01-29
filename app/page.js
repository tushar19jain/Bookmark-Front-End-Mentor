import MainSection from "@/Components/MainSection";
import Navbar from "@/Components/Navbar";
import './globals.css'
import FeaturesTab from "@/Components/FeaturesTab";
import ExtensionCard from "@/Components/ExtensionCard";
import FAQdropsdown from "@/Components/FAQdropdown";
import ContactForm from "@/Components/ContactForm";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainSection />
      <div className='features mt-[55px] text-center'>
          <h1 className='font-semibold text-3xl py-[30px]'>Features</h1>
          <p className='text-gray-400 w-[480px] ml-[510px]'>Our aim is to make it quick and and easy for you to access you favourite website.Your bookmark sync between your devices so you can access them on the go. </p>
      </div>
      <FeaturesTab />
      <div className='Extension mt-[150px]'>
          <h1 className='font-semibold text-3xl py-[30px] text-center'>Download the extension</h1>
          <p className='text-gray-400 w-[480px] ml-[510px] text-center'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize. </p>        
      </div>
      <div className=" cards flex justify-center gap-[50px]">
        <div className='chromeCard mt-[60px]'>
          <ExtensionCard  browserName = "Chrome" src = "logo-chrome.svg" version = "62"/>
        </div>
        <div className='fireFoxCard mt-[100px]'>
          <ExtensionCard browserName = "Firefox" src = "logo-firefox.svg" version ="55" />
        </div>
        <div className='operaCard mt-[140px]'>
          <ExtensionCard browserName = "Opera" src = "logo-opera.svg" version = "46" />
        </div>
      </div>
      <div className="FAQ mt-[90px]">
            <h1 className='font-semibold text-3xl py-[30px] text-center'>Frequently Asked Question</h1>
            <p className='faqPara text-gray-400 w-[480px] ml-[510px] text-center'>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us. </p>
            <div className="flex flex-col justify-center mt-[60px]">
            <FAQdropsdown  heading = " What is Bookmark?" desc ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."/>
            <FAQdropsdown  heading = "How can I request a new browser?" desc ="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."/>
            <FAQdropsdown  heading = "Is there a mobile app?" desc ="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."/>
            <FAQdropsdown  heading = "What about other Chromium Browsers" desc = "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit"/>
            </div>
            <div className=" infoBtn ml-[720px] mt-[50px]">
            <button className='  bg-[#5368DF] py-[12px] px-[12px] text-white font-semibold rounded-md'>More Info</button>
            </div> 
        </div>
      <div className="contactForm  text-center py-[50px] mt-[100px] bg-[#5368DF]">
        <p className='font-mono font-semibold text-md text-white'>35,000+ ALREADY JOINED</p>
        <h1 className="text-3xl py-[25px]  text-white">Stay up-to-date with what we’re doing </h1>
        <ContactForm />
      </div>
      <footer className="bg-blue-900 py-[30px] flex items-center  justify-between px-[80px]">
        <div className=" footer_main flex justify-around gap-[60px]">
          <img className="invert" src="logo-bookmark.svg"></img>
          <ul className="links flex text-sm items-center gap-[40px] text-white">
            <li>FEATURES</li>
            <li>CONTACT</li>
            <li>PRICING</li>
          </ul>
        </div>
        <div className="flex justify-between gap-[50px]">
          <img src="icon-facebook.svg"></img>
          <img src="icon-twitter.svg"></img>
        </div>
        </footer>        
      </div>
  )
}