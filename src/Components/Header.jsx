"use client";
import Image from "next/image";
import location from  "../../public/assets/Header/location.svg";
import twitter from   "../../public/assets/Header/twitter.svg";
import facebook from  "../../public/assets/Header/facebook.svg";
import instagram from "../../public/assets/Header/instagram.svg";
import youtube from   "../../public/assets/Header/youtube.svg";
import logo from      "../../public/assets/Header/logo.svg"; 
import call from      "../../public/assets/Header/call.svg"; 
import star from      "../../public/assets/Header/star.svg"; 
import cart from      "../../public/assets/Header/cart.svg"; 
import div from      "../../public/assets/Header/div.svg"; 
import { BiUser } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useRef } from "react";
import React, { use, useState } from 'react'
import NavbarData from "../utils/Navbar";
import Link from "next/link";

    

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };
    return(
        <>
            <header>
                
            <div className="bg-[rgba(248,248,248,1)] md:flex-row items-center 
            h-[50px] px-16 w-auto">
            
            <div className=" hidden md:flex lg:flex gap-4 px-10 items-center pt-2 text-[rgba(155,155,155,1)]">
            
            <div className=" flex justify-between items-center">
            <Image src={location} height={20} width={20} alt="Picture of the location"  />
            <h1 className=" md:text-base sm:text-sm ">Find a Store</h1>
            </div>

            <div className=" ml-auto flex justify-between gap-4 items-center text-[rgba(155,155,155,1)]"> 

                    <Image src={twitter}   height={28.8} width={16} alt="Picture of the twitter"  />
                    <Image src={facebook}  height={28.8} width={10} alt="Picture of the facebook"  />
                    <Image src={instagram} height={28.8} width={14} alt="Picture of the instagram"  />                        
                    <Image src={youtube}   height={28.8} width={18} alt="Picture of the youtube"  />
            </div>
        </div>
        </div>


      <div className=' hidden lg:flex px-16 justify-between items-center pt-5'>
      
          <div className=" ml-4">
          <Image src={logo} height={40} width={288} alt="Picture of the logo"  />
          </div>

          <div className=" hidden lg:flex items-center -ml-20" >
            <div className="relative">
            
                <div className="absolute top-3 items-center" ref={clickPoint}>
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" 
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
                    clip-rule="evenodd"></path></svg>
                    
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-[400px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="What are you looking for ?"
                    onFocus={handleFocus}
                    onBlur={handleBlur}  
                />
            </div>
            <button className='bg-[#000000] h-10  text-white px-6 py-2 rounded-2xl'>
                Search</button>

                </div>

        <ul className="hidden md:hidden lg:flex mr-8">
      <Image src={div}  height={55} width={400} alt="call"  />  
      </ul> 
        </div>

        <div className="hidden md:hidden lg:flex justify-between lg:px-24 md:px-20 mt-4">
        <ul className=" gap-7 flex">
          {NavbarData.map((item) => (
            <li key={item.key}>
              <Link href={item.href} className="font-bold text-[14px]">{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="justify-between font-bold md:ml-36 text-[16px]">🔥Extra <span className=' text-green-600'>Sale 30% off</span></div>
        </div>

        
         {toggle ? (
          <IoMdClose onClick={()=>setToggle(!toggle)} size={30} className=' flex lg:hidden' />   
          ) : (
          <IoMdMenu  onClick={()=>setToggle(!toggle)} size={30} className=' block lg:hidden' />
          )}
          
          <div className={`lg:hidden duration-700 text-center pt-14 flex flex-col font-bold w-[70%]
        h-screen fixed gap-7 bg-black/90 text-white top-[0px]
         ${toggle ?  "right-0": "right-[-100%]" } `}>
          
          <input
                    type="text"
                    className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                    placeholder="Search Here..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
          <ul className=" gap-7 flex-col">
          {NavbarData.map((item) => (
            <li key={item.key}>
              <Link href={item.href} className="font-bold text-[14px]">{item.title}</Link>
            </li>
          ))}
        </ul>
          </div> 
        
            </header>
           
        </>
    )
}

export default Header;