import Image from 'next/image'
import Link from 'next/link'
import Arrow from '../../../public/assets/Home(DHRUV)/leftarrow.svg'
import TV from '../../../public/assets/Services/tv.svg'
import Tshirt from '../../../public/assets/Services/tshirt.svg'
import Copy from '../../../public/assets/Services/copy.svg'
import Brand from '../../../public/assets/Services/brand.svg'
import Online from '../../../public/assets/Services/Online.svg'
import Sign from '../../../public/assets/Services/sign.svg'

const Container6 = () => {
  return (
    <main>
      <section className='bg-[rgb(245,245,245)] px-[150px] py-[70px] small:px-[30px] small:py-[30px] medium:px-[30px] medium:py-[30px] medium:space-y-[50px] small:space-y-[50px] flex small:flex-col medium:flex-col'>
        <div className='w-[40%] small:w-full medium:w-full small:text-center medium:text-center small:flex medium:flex flex-col small:items-center medium:items-center'>
          <h1 className='font-bold text-[48px] w-[80%] small:w-full medium:w-full small:text-[28px] medium:text-[32px]'>
            Print shirts for yourself or your online business
          </h1>
          <p className='text-[18px] font-medium text-[rgb(126,126,126)] w-[56%] small:w-full medium:w-full small:text-[14px] medium:text-[16px]'>
            Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet duis necgi det, con
          </p>
          <Link href='/shop' className='cursor-pointer'>
            <button className='mt-[20px] bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] flex text-white'>
              Shop Now
              <Image src={Arrow} alt='' width='auto' height='auto' className='ml-2 mt-[7px]' />
            </button>
          </Link>
        </div>

        <div className='w-[60%] small:w-full medium:w-full'>
          <div className='grid grid-cols-3 medium:grid-cols-2 small:grid-cols-1 gap-[20px]'>
            <div className='bg-[rgb(255,255,255)] rounded-[12px] shadow-md px-[30px] py-[20px]  small:w-full medium:w-full min-h-[290px] space-y-[10px]'>
              <Image src={Tshirt} alt='' width='' height='' />
              <h1 className='text-[20px] font-bold'>Printing Services</h1>
              <p className='text-[15px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con
              </p>
            </div>

            <div className='bg-[rgb(255,255,255)] rounded-[12px] shadow-md px-[30px] py-[20px]  small:w-full medium:w-full min-h-[290px] space-y-[10px]'>
              <Image src={Copy} alt='' width='' height='' />
              <h1 className='text-[20px] font-bold'>Copying Services</h1>
              <p className='text-[15px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con
              </p>
            </div>

            <div className='bg-[rgb(255,255,255)] rounded-[12px] shadow-md px-[30px] py-[20px]  small:w-full medium:w-full min-h-[290px] space-y-[10px]'>
              <Image src={Sign} alt='' width='' height='' />
              <h1 className='text-[20px] font-bold'>Digital Scanning</h1>
              <p className='text-[15px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con
              </p>
            </div>

            <div className='bg-[rgb(255,255,255)] rounded-[12px] shadow-md px-[30px] py-[20px]  small:w-full medium:w-full min-h-[290px] space-y-[10px]'>
              <Image src={Brand} alt='' width='' height='' />
              <h1 className='text-[20px] font-bold '>Branding & white label printing</h1>
              <p className='text-[15px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con
              </p>
            </div>

            <div className='bg-[rgb(255,255,255)] rounded-[12px] shadow-md px-[30px] py-[20px]  small:w-full medium:w-full min-h-[290px] space-y-[10px]'>
              <Image src={TV} alt='' width='' height='' />
              <h1 className='text-[20px] font-bold'>Design Services</h1>
              <p className='text-[15px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con
              </p>
            </div>

            <div className='bg-[rgb(255,255,255)] rounded-[12px] shadow-md px-[30px] py-[20px]  small:w-full medium:w-full min-h-[290px] space-y-[10px]'>
              <Image src={Online} alt='' width='' height='' />
              <h1 className='text-[20px] font-bold'>POD for online stores</h1>
              <p className='text-[15px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con
              </p>
            </div>
          </div>

          <div className='w-full mt-[20px] bg-[url("/assets/Home(DHRUV)/custom.svg")] bg-cover medium:bg-right small:bg-right  px-[20px] py-[40px] bg-no-repeat rounded-[12px] h-fit'>
            <h1 className='w-[50%] text-[24px] font-bold'>Create your own custom products online!</h1>
            <p className='mt-[20px] small:text-black medium:text-black text-[rgb(126,126,126)] font-medium text-[18px]'>
              Free and easy way to bring your ideas to life
            </p>
            <button className='mt-[30px] bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] flex text-white'>
              Order Custom Shirts
              <Image src={Arrow} alt='' width='auto' height='auto' className='ml-2 mt-[7px]' />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Container6
