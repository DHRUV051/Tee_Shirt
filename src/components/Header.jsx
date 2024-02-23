import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image"
import logo from "../../public/assets/Header/logo.svg";
import NavbarData from "../utils/Navbar"
const Header = () => {
  return (
    <header className="bg-[rgba(255,255,255,1)] h-[120px] ml-0 mt-0 ">
      <div className="bg-[rgba(248,248,248,1)] hidden md:flex flex-col md:flex-row justify-between items-center h-[50px] px-40 md:px-40">
      <div className="flex gap-6 items-center text-[rgba(155,155,155,1)]">
        <FaTwitter />
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
        </div>
        <div className="text-center font-bold ml-36 text-[16px]">🔥Free shipping on all U.S. orders $50+</div>
        <div className="hidden md:flex gap-4">
          <Link
            href="/signup"
            className="px-4 py-2 text-[15px] font-bold border border-transparent bg-custom-green rounded-full hover:text-[rgba(0,0,0,1)] transition-colors duration-300"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 text-[15px] font-normal  text-lg leading-5 text-white bg-[rgba(0,0,0,1)] border border-transparent rounded-xl transition-colors duration-300"
          >
            Login
          </Link>
        </div>
        </div>
        <div className="flex items-center justify-between px-40 md:px-40 mt-4 ">
  <ul className="flex space-x-7 ">
    {NavbarData.map((item) => (
      <li key={item.key}>
        <Link href={item.href} className="font-bold text-[14px]">{item.title}</Link>
      </li>
    ))}
  </ul>
  <Image src={logo} alt="Logo" className=" ml-28 w-[180px] h-[40px] gap-x-9" />
  <div className="flex justify-end pr-4">
  <div className="flex items-center text-gray-600 border rounded-xl w-[200px] h-[40px] ml-40 ">
    <IoSearchOutline className="text-lg h-[20px] w-[20px] ml-2 mr-2"/>Search...
  </div>
</div>
  <div class="flex items-center gap-x-5">
  <FaRegStar/>
  <HiOutlineShoppingBag/>
</div>

</div>


    </header>
    
  );
};

export default Header;


