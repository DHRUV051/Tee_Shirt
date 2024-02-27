import Image from 'next/image'
import Arrow from   "../../public/assets/Footer/Arrow.svg";
import Payment from "../../public/assets/Footer/Payment.svg";
import List from    "../../public/assets/Footer/List.svg";
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='bg-[rgb(245,245,245)] px-[150px] py-[75px] small:py-[50px] small:px-[30px] medium:px-[50px] medium:py-[80px]'>
      <section>
        <div className=' grid grid-cols-4 gap-[80px] small:grid-cols-1 small:space-y-[30px]   small:gap-[30px] medium:grid medium:grid-cols-2 medium:gap-[30px]'>
        <div className='small:flex small:flex-col small:items-center'>
         
         
          <h1 className='font-bold text-[18px] mt-[10px]'>Design your next favorite custom shirt</h1>
          <Image src={List} alt="" width={666} height={60} />
        </div>

        <div className='mt-2 small:flex small:flex-col small:items-center'>
          <h1 className='font-bold text-[20px]'>Information</h1>
          <ul className='mt-[20px] text-[16px] text-[rgb(126,126,126)] space-y-[20px] small:text-center'>
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
        <div className='mt-2 small:flex small:flex-col small:items-center'>
          <h1 className='font-bold text-[20px]'>Useful links</h1>
          <ul className='mt-[20px] text-[16px] text-[rgb(126,126,126)] space-y-[20px] small:text-center'>
            <li className='cursor-pointer'>My Account</li>
            <li className='cursor-pointer'>Print Provider</li>
            <li className='cursor-pointer'>Become a Partner</li>
            <li className='cursor-pointer'>Custom Products</li>
            <li className='cursor-pointer'>Make your own shirt</li>
          </ul>
        </div>

        <div className='mt-2 small:flex small:flex-col small:items-center'>
          <h1 className='font-bold text-[20px]'>Get in touch</h1>
          <p className='mt-[20px] text-[16px] text-[rgb(126,126,126)] small:text-center'>
          hello@teespace.io
          </p>
          <h1 className='font-bold text-[20px] pt-1'>+02 036 038 3996</h1>
          <p className='mt-[20px] text-[16px] text-[rgb(126,126,126)] small:text-center'>
          3665 Paseo Place, Suite 0960 
          San Diego
          </p>


          {/* <div className='bg-[rgb(255,255,255)] mt-[20px] py-[10px] px-[16px] flex'>
                <input type="text" placeholder='Enter your email' className='focus:outline-none w-10/12 text-[15px] font-medium'/>
                <Image src={Arrow} alt='' width="" height="" className='ml-auto'/>
          </div> */}
        </div>
        </div>
      </section>
      
      {/* <section className='flex *: mt-[100px] small:mt-[50px] medium:mt-[80px]'>
            <h1 className=' w-full mt-[50px] text-[16px] font-medium text-[rgb(126,126,126)]'>© 2022 TeeSpace. Terms & Conditions | Privacy Policy</h1>
            <Image src={Payment} className=' ml-auto' alt="" width="" height=""/>
      </section> */}

      <div className=' flex flex-col'>
      <h1 className=' mt-[50px] text-[16px] font-medium text-[rgb(126,126,126)] justify-between'>© 2022 TeeSpace. Terms & Conditions | Privacy Policy
    <Image src={Payment}  alt="" width="" height=""/>
      </h1>

      </div>
    </footer>
  )
}
export default Footer