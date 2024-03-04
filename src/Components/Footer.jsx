import Image from 'next/image'
import Arrow from   "../../public/assets/Footer/Arrow.svg";
import Payment from "../../public/assets/Footer/Payment.svg";
import List from    "../../public/assets/Footer/List.svg";
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='bg-[rgb(245,245,245)] px-[150px] py-[75px] sm:py-[50px] sm:px-[30px] md:px-[50px] md:py-[80px]'>
      <section>
        <div className=' grid grid-cols-4 gap-[80px] sm:grid-cols-1 sm:space-y-[30px]  sm:gap-[30px] md:grid md:grid-cols-2 md:gap-[30px]'>
        <div className='sm:flex sm:flex-col sm:items-center'>
         
         
          <h1 className='font-bold text-[18px] mt-[10px]'>Design your next favorite custom shirt</h1>
          <Image src={List} alt="" width={666} height={60} />
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
            <li className='cursor-pointer'>Print Provider</li>
            <li className='cursor-pointer'>Become a Partner</li>
            <li className='cursor-pointer'>Custom Products</li>
            <li className='cursor-pointer'>Make your own shirt</li>
          </ul>
        </div>

        <div className='mt-2 sm:flex sm:flex-col sm:items-center'>
          <h1 className='font-bold text-[20px]'>Get in touch</h1>
          <p className='mt-[20px] text-[16px] text-[rgb(126,126,126)] sm:text-center'>
          hello@teespace.io
          </p>
          <h1 className='font-bold text-[20px] pt-1'>+02 036 038 3996</h1>
          <p className='mt-[20px] text-[16px] text-[rgb(126,126,126)] sm:text-center'>
          3665 Paseo Place, Suite 0960 
          San Diego
          </p>
        </div>
        </div>
      </section>
      

      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:text-center justify-between mt-[50px] text-[16px] font-md text-[rgb(126,126,126)] '>© 2022 TeeSpace. Terms & Conditions | Privacy Policy
    <Image src={Payment}  alt="" width="1000" height="100"/>

      </div>
    </footer>
  )
}
export default Footer