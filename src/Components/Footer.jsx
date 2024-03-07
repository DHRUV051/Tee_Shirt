// "use client";
// import Image from 'next/image'
// import Arrow from   "../../public/assets/Footer/Arrow.svg";
// import Payment from "../../public/assets/Footer/Payment.svg";
// import List from    "../../public/assets/Footer/List.svg";
// import Link from 'next/link'


// const Footer = () => {
//   return (
//     <footer className='bg-[rgb(245,245,245)] px-[150px] py-[75px] sm:py-[50px] sm:px-[30px] md:px-[50px] md:py-[80px]'>
//       <section>
//         <div className=' grid grid-cols-4 gap-[80px] sm:grid-cols-1 sm:space-y-[30px]  sm:gap-[30px] md:grid md:grid-cols-2 md:gap-[30px]'>
      
//         <div className='sm:flex sm:flex-col sm:text-center'>       
//           <h1 className='font-bold text-[18px] mt-[10px]'>Design your next favorite custom shirt</h1>
//           <Image src={List} alt="" width={800} height={60} className=' sm:hidden' />
//         </div>

//         <div className='mt-2 sm:flex sm:flex-col sm:items-center'>
//           <h1 className='font-bold text-[20px]'>Information</h1>
//           <ul className='mt-[20px] text-[16px] text-[rgb(126,126,126)] space-y-[20px] sm:text-center'>
//             <li className='cursor-pointer'>
//               <Link href='/'>About us</Link>
//             </li>
//             <li className='cursor-pointer'>
//               <Link href='/blog'>Our Blog</Link>
//             </li>
//             <li className='cursor-pointer'>
//               <Link href='/teespace'>Start a Return</Link>
//             </li>
//             <li className='cursor-pointer'>
//               <Link href='/teespace'>Contact Us</Link>
//             </li>
//             <li className='cursor-pointer'>
//               <Link href='/shop'>Shipping FAQ</Link>
//             </li>
//           </ul>
//         </div>
//         <div className='mt-2 sm:flex sm:flex-col sm:items-center'>
//           <h1 className='font-bold text-[20px]'>Useful links</h1>
//           <ul className='mt-[20px] text-[16px] text-[rgb(126,126,126)] space-y-[20px] sm:text-center'>
//             <li className='cursor-pointer'>My Account</li>
//             <li className='cursor-pointer'>Print Provider</li>
//             <li className='cursor-pointer'>Become a Partner</li>
//             <li className='cursor-pointer'>Custom Products</li>
//             <li className='cursor-pointer'>Make your own shirt</li>
//           </ul>
//         </div>

//         <div className='mt-2 sm:flex sm:flex-col sm:items-center'>
//           <h1 className='font-bold text-[20px]'>Get in touch</h1>
//           <p className='mt-[20px] text-[16px] text-[rgb(126,126,126)] sm:text-center'>
//           hello@teespace.io
//           </p>
//           <h1 className='font-bold text-[20px] pt-1'>+02 036 038 3996</h1>
//           <p className='mt-[20px] text-[16px] text-[rgb(126,126,126)] sm:text-center'>
//           3665 Paseo Place, Suite 0960 
//           San Diego
//           </p>
//         </div>
//         </div>
//       </section>
      

//       <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:text-center sm:hidden justify-between mt-[50px] text-[16px] font-md text-[rgb(126,126,126)] '>© 2022 TeeSpace. Terms & Conditions | Privacy Policy
//     <Image src={Payment}  alt="" width="1000" height="100"/>

//       </div>
//     </footer>
//   )
// }
// export default Footer

"use client";
import Image from 'next/image'
import logo from '../../public/assets/Header/logo.svg'
import Payment from "../../public/assets/Footer/Payment.svg";
import List from    "../../public/assets/Footer/List.svg";
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='bg-[rgb(245,245,245)] px-[150px] py-[75px] sm:py-[50px] sm:px-[30px] md:px-[50px] md:py-[80px]'>
      <section>
        <div className=' grid grid-cols-4 gap-[80px] sm:grid-cols-1 sm:space-y-[30px]   sm:gap-[30px] md:grid md:grid-cols-2 md:gap-[30px]'>
        <div className='sm:flex sm:flex-col sm:items-center'>
          <Link href='/' className='cursor-pointer'>
            <Image src={logo} alt='' width='' height='' />
          </Link>
          <h1 className='text-[rgb(126,126,126)] text-[16px] font-md mt-[10px]'>hello@teespace.io</h1>
          <h1 className='font-bold text-[18px] mt-[10px]'>+02 036 038 3996</h1>
          <h1 className='text-[rgb(126,126,126)] text-[16px] font-md mt-[10px]'>3665 Paseo Place, Suite 0960 </h1>
          <h1 className='text-[rgb(126,126,126)] text-[16px] font-md mt-[3px]'>San Diego</h1>
        </div>
        <div className='mt-2 sm:flex sm:flex-col sm:items-center'>
          <h1 className='font-bold text-[20px]'>Information</h1>
          <ul className='mt-[20px] text-[16px] text-[rgb(126,126,126)] space-y-[20px] sm:text-center'>
            <li className='cursor-pointer'>
              <Link href='/'>About us</Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/blog'>Our Blog</Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/teespace'>Start a Return</Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/teespace'>Contact Us</Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/shop'>Shipping FAQ</Link>
            </li>
          </ul>
        </div>
        <div className='mt-2 sm:flex sm:flex-col sm:items-center'>
          <h1 className='font-bold text-[20px]'>Useful links</h1>
          <ul className='mt-[20px] text-[16px] text-[rgb(126,126,126)] space-y-[20px] sm:text-center'>
            <li className='cursor-pointer'>My Account</li>
            <li className='cursor-pointer'>Shipping</li>
            <li className='cursor-pointer'>Contact & Support</li>
            <li className='cursor-pointer'>All Products</li>
            <li className='cursor-pointer'>Design Product</li>
          </ul>
        </div>
        <div className='mt-2 sm:flex sm:flex-col sm:items-center'>
          <h1 className='font-bold text-[20px]'>Any questions</h1>
          <h1 className='font-bold text-[24px] sm:text-[16px] md:text-[16px] mt-3'>hello@teespace.com</h1>
          <p className='mt-[20px] text-[16px] text-[rgb(126,126,126)] sm:text-center'>
          Find answers to all of your questions
          </p>
          <div className=' mt-[20px] sm:items-center sm:pl-20 flex'>  
                <Image src={List} alt='' width="" height="" className='ml-auto'/>
          </div>
        </div>
        </div>
      </section>
      <section className='flex flex-col items-center *: mt-[70px] sm:mt-[50px] md:mt-[80px] sm:text-center'>
            <Image src={Payment} alt="" width="" height="" className=' sm:hidden'/>
            <h1 className='mt-[10px] text-[16px] font-md text-[rgb(126,126,126)]'>© 2022 TeeSpace. All rights reserved.</h1>
      </section>
    </footer>
  )
}
export default Footer