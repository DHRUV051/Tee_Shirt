"use client";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi"; 
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/Header/logo.svg";
import NavbarData from "../utils/Navbar";
import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="bg-white h-[60px] sm:h-[120px] ml-0 mt-0">
      <div className="hidden md:flex bg-[rgba(248,248,248,1)]  flex-col md:flex-row justify-between items-center h-[50px] px-4 md:px-40">
        <div className="flex gap-6 items-center text-[rgba(155,155,155,1)]">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>
        <div className="text-center font-bold ml-0 md:ml-36 text-[16px]">🔥Free shipping on all U.S. orders $50+</div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link
            href="/signup"
            className="px-4 py-2 text-[15px] font-bold border border-transparent bg-custom-green rounded-full hover:text-black transition-colors duration-300"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 text-[15px] font-normal text-lg leading-5 text-white bg-black border border-transparent rounded-xl transition-colors duration-300"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 md:px-40 mt-4">
        <ul className="hidden md:flex space-x-7">
          {NavbarData.map((item) => (
            <li key={item.key}>
              <Link href={item.href} className="font-bold text-[14px]">{item.title}</Link>
            </li>
          ))}
        </ul>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block z-50 text-white"
          />
        ) : (
          <HiMenuAlt3
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block text-black"
          />
        )}
        <Image src={logo} alt="Logo" className="w-[180px] h-[40px]"/>
        <div className="flex items-center text-gray-600 border rounded-xl w-[200px] h-[40px]">
          <IoSearchOutline className="text-lg h-[20px] w-[20px] ml-2 mr-2"/>Search...
        </div>
        <div className="flex items-center ml-6 gap-x-5">
          <FaRegStar/>
          <HiOutlineShoppingBag/>
        </div>
      </div>
      <div
        className={`duration-300 pt-16 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/90 text-white top-[0px] ${
          toggle ? "left-0" : "left-[-100%]"
        }`}
        style={{ zIndex: "1"}}
      >
      {toggle && (
        <div className="md:hidden">
          <ul>
            {NavbarData.map((item) => (
              <li key={item.key} className="text-left ml-5">
                <Link href={item.href} className="font-bold text-[14px] block py-2 mt-3">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;