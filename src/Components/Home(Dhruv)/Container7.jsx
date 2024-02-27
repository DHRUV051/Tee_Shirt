import Image from 'next/image'
import Arrow from '../../../public/assets/Home/leftarrow.svg'
import Dollor from '../../../public/assets/Home/dollor.svg'
import Fast from '../../../public/assets/Home/fast.svg'
import Order from '../../../public/assets/Home/order.svg'
import Payment from '../../../public/assets/Home/payment.svg'
import Print from '../../../public/assets/Home/print.svg'
import Settings from '../../../public/assets/Home/settings.svg'


const Container7 = () => {
  return (
    <main className='relative'>
      <section className=' z-10  parent'>
        <div className=' child text-[rgb(245,245,245)]'>1</div>
        <div className='child child--absolute'></div>
      </section>

      <section className='bg-[rgb(245,245,245)] px-[150px]  small:px-[30px] small:py-[30px] medium:px-[30px] medium:py-[30px] medium:space-y-[50px] small:space-y-[50px] flex small:flex-col medium:flex-col'>
        <div className='w-[40%] small:w-full medium:w-full small:text-center medium:text-center small:flex medium:flex flex-col small:items-center medium:items-center'>
          <h1 className='font-bold text-[48px] w-[80%] small:w-full medium:w-full small:text-[28px] medium:text-[32px]'>
            Why customize products with TeeSpace?
          </h1>
          <p className='text-[18px] font-medium text-[rgb(126,126,126)] w-[56%] small:w-full medium:w-full small:text-[14px] medium:text-[16px]'>
            Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet duis necgi det, con
          </p>
          <button className='mt-[20px] bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] flex text-white'>
            View All Features
            <Image src={Arrow} alt='' width='auto' height='auto' className='ml-2 mt-[7px]' />
          </button>
        </div>

        <div className='w-[60%] small:w-full medium:w-full'>
          <div className='grid grid-cols-3 medium:grid-cols-2 small:grid-cols-1 gap-[20px]'>
            <div className='bg-[rgb(255,255,255)] rounded-[12px] shadow-md px-[30px] py-[20px]  small:w-full medium:w-full min-h-[290px] space-y-[10px]'>
              <Image src={Dollor} alt='' width='' height='' />
              <h1 className='text-[20px] font-bold'>NO Die & plate charges</h1>
              <p className='text-[15px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con
              </p>
            </div>

            <div className='bg-[rgb(255,255,255)] rounded-[12px] shadow-md px-[30px] py-[20px]  small:w-full medium:w-full min-h-[290px] space-y-[10px]'>
              <Image src={Print} alt='' width='' height='' />
              <h1 className='text-[20px] font-bold'>High quality offset printing</h1>
              <p className='text-[15px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con
              </p>
            </div>

            <div className='bg-[rgb(255,255,255)] rounded-[12px] shadow-md px-[30px] py-[20px]  small:w-full medium:w-full min-h-[290px] space-y-[10px]'>
              <Image src={Payment} alt='' width='' height='' />
              <h1 className='text-[20px] font-bold'>Secure payment</h1>
              <p className='text-[15px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con
              </p>
            </div>

            <div className='bg-[rgb(255,255,255)] rounded-[12px] shadow-md px-[30px] py-[20px]  small:w-full medium:w-full min-h-[290px] space-y-[10px]'>
              <Image src={Settings} alt='' width='' height='' />
              <h1 className='text-[20px] font-bold'>Custom size & style</h1>
              <p className='text-[15px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con
              </p>
            </div>

            <div className='bg-[rgb(255,255,255)] rounded-[12px] shadow-md px-[30px] py-[20px]  small:w-full medium:w-full min-h-[290px] space-y-[10px]'>
              <Image src={Fast} alt='' width='' height='' />
              <h1 className='text-[20px] font-bold'>Fast & free delivery</h1>
              <p className='text-[15px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con
              </p>
            </div>

            <div className='bg-[rgb(255,255,255)] rounded-[12px] shadow-md px-[30px] py-[20px]  small:w-full medium:w-full min-h-[290px] space-y-[10px]'>
              <Image src={Order} alt='' width='' height='' />
              <h1 className='text-[20px] font-bold'>Low minimum order quantity</h1>
              <p className='text-[15px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con
              </p>
            </div>
          </div>

          <div className='w-full mt-[20px] bg-[url("/assets/Home/custom.svg")] bg-cover medium:bg-right small:bg-right  px-[20px] py-[40px] bg-no-repeat rounded-[12px] h-fit'>
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

export default Container7
