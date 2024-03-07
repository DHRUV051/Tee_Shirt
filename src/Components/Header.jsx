"use client";
import Image from "next/image";
import twitter from   "../../public/assets/Header/twitter.svg";
import facebook from  "../../public/assets/Header/facebook.svg";
import instagram from "../../public/assets/Header/instagram.svg";
import youtube from   "../../public/assets/Header/youtube.svg";
import logo from      "../../public/assets/Header/logo.svg"; 
import star from      "../../public/assets/Header/star.svg"; 
import cart from      "../../public/assets/Header/cart.svg"; 
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
                
            <div className="bg-[rgba(248,248,248,1)] md:hidden sm:hidden items-center 
            h-[50px] px-16 w-auto">
            
            <div className=" hidden md:flex lg:flex gap-4 px-10 items-center pt-2 text-[rgba(155,155,155,1)]">
            
            <div className=" flex justify-between items-center gap-4">
            <Image src={twitter}   height={28.8} width={16} alt="Picture of the twitter"  />
                    <Image src={facebook}  height={28.8} width={10} alt="Picture of the facebook"  />
                    <Image src={instagram} height={28.8} width={14} alt="Picture of the instagram"  />                        
                    <Image src={youtube}   height={28.8} width={18} alt="Picture of the youtube"  />
            </div>

            <div className=" ml-auto flex justify-between gap-4 items-center font-[Plus Jakarta Sans] text-[18px] text-[rgba(0,0,0,1)]">🔥Free shipping on all U.S. orders $50+</div>

            <div className=" ml-auto flex justify-between gap-4 items-center text-[rgba(155,155,155,1)]"> 

                    <h1 className=" text-[rgba(0,0,0,1)] text-[15px] font-[Plus Jakarta Sans] ">Login</h1>
                    <button className='bg-[rgba(0,0,0,1)] px-3 py-1 rounded-[7px] '>
            <Link href='/Home' className='text-white text-center flex'>
              <h1 className='font-[Plus Jakarta Sans] text-[15px]'>Sign Up</h1> 
            </Link>
          </button>
            </div>
        </div>
        </div>


      {/* second nav */}

      <div className=' hidden lg:flex px-24 w-auto justify-between items-center py-4'>
      

      <div className="hidden md:hidden lg:flex justify-between">
        <ul className=" gap-5 flex">
          {NavbarData.map((item) => (
            <li key={item.key}>
              <Link href={item.href} className="font-[Plus Jakarta Sans] text-[rgba(0,0,0,1)] text-[14px]">{item.title}</Link>
            </li>
          ))}
        </ul>
        
        </div>

          <div className=" items-center md:px-5 pl-16 ">
          <Image src={logo} height={48} width={180} alt="Picture of the logo"  />
          </div>

          <div className=" hidden lg:flex items-center" >
            <div className="relative">
            
                <div className="absolute top-3 items-center" ref={clickPoint}>
                    <svg className="w-5 h-5 ml-3 text-black" fill="currentColor" viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" 
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
                    clip-rule="evenodd"></path></svg>
                    
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-[260px] text-gray-900 rounded-lg border border-gray-300"
                    placeholder="Search..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}  
                />
            </div>
                </div>

            <div className="flex items-center">
          <Image src={star} height='' width='' alt="Picture of the star" />
          <Image src={cart} height='' width='' alt="Picture of the cart"  />
        </div>
      
        </div>
 
        
         {toggle ? (
          <IoMdClose onClick={()=>setToggle(!toggle)} size={30} className=' flex lg:hidden sm:pl-4 sm:mt-4 sm:w-14 sm:h-8 md:pl-4 md:w-14 md:h-8 md:mt-4' />   
          ) : (
          <IoMdMenu  onClick={()=>setToggle(!toggle)} size={30} className=' block lg:hidden sm:pl-4 sm:mt-4 sm:w-14 sm:h-8 md:pl-4 md:w-14 md:h-8 md:mt-4' />
          )}
          
          <div className={`lg:hidden duration-700 text-center pt-14 flex flex-col font-bold w-[70%]
        h-screen fixed gap-7 bg-black/90 text-white top-[0px]
         ${toggle ?  "right-0": "right-[-100%]" } `}>
          
          <div className=" items-center sm:hidden flex justify-center" >
            <div className="relative">
            
                <div className="absolute top-3 items-center" ref={clickPoint}>
                    <svg className="w-5 h-5 ml-3 text-black" fill="currentColor" viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" 
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
                    clip-rule="evenodd"></path></svg>
                    
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-[460px] text-gray-900 rounded-lg border border-gray-300"
                    placeholder="Search..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}  
                />
            </div>
                </div>
          <ul className=" flex-col space-y-2 cursor-pointer">
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