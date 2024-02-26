import Link from 'next/link'
import Image from 'next/image'
import Banner from '../../../public/assets/Home/banner.svg'
import Tab from '../../../public/assets/Home/tab.svg'

const Container4 = () => {
  return (
    <main className='bg-[rgb(245,245,245)] px-[150px] py-[70px] small:px-[30px] small:py-[30px] medium:px-[30px] medium:py-[30px] '>
      <section className='flex small:flex-col medium:flex-col items-center space-x-[100px] small:space-x-0 medium:space-x-0 small:space-y-[30px] medium:space-y-[50px]'>
        <section className='w-1/2  order-first small:w-full medium:w-full  '>
          <Image
            src={Banner}
            alt=''
            width=''
            height=''
            className='small:flex small:flex-col small:items-center small:justify-center  medium:flex medium:flex-col medium:items-center medium:justify-center small:ml-5 medium:ml-5'
          />
        </section>

        <section className='w-1/2 small:w-full medium:w-full items-center align-middle'>
          <h1 className='font-bold text-[48px] small:text-center medium:text-center small:text-[28px] medium:text-[38px]'>
            Free and easy way to bring your ideas to life
          </h1>
          <p className='mt-[20px] text-[rgb(126,126,126)] text-[18px] font-medium small:text-center medium:text-center small:text-[14px] medium:text-[16px]'>
            Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet, cowec tetopak
          </p>
          <div className='small:flex small:flex-col small:items-center small:justify-center  medium:flex medium:flex-col medium:items-center medium:justify-center '>
            <button className='mt-[30px] px-[30px] py-[10px] rounded-[12px] text-white text-[16px] font-bold bg-[rgb(46,187,119)] small:px-[15px] small:py-[10px] medium:px-[15px] medium:py-[10px]'>
              <Link href='/shop'>Get Started</Link>
            </button>
          </div>
        </section>
      </section>

      <section className='mt-[100px] text-center flex flex-col items-center'>
        <h1 className='text-[40px] small:text-[28px] medium:text-[28px] font-bold'>T-shirt printing made easy.</h1>
        <p className='font-medium text-[18px] w-6/12 text-[rgb(126,126,126)] small:w-full medium:w-full'>
          Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix adipiscing eliet, cowec
          tetopak
        </p>
      </section>

      <section className='mt-[50px] flex small:flex-col medium:flex-col items-center'>

        <div className='w-1/2 small:w-full medium:w-full medium:ml-10 small:ml-5  s'>
          <ul className='space-y-[30px] '>
            <li className=''>
              <h1 className='font-bold text-[20px]'>Premium quality custom t-shirts</h1>
            </li>
            <li className='-ml-[30px]'>
              <div className='bg-[rgb(255,255,255)] w-2/3 small:w-11/12 medium:w-11/12  py-[31px] px-[30px] rounded-[12px] shadow-lg space-y-[5px] '>
                <h1 className='font-bold text-[20px]'>Easy to create & customize</h1>
                <p className='font-medium text-[16px]'>
                  Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet
                </p>
              </div>
            </li>
            <li>
              <h1 className='font-bold text-[20px]'>Thousands of free templates</h1>
            </li>
            <li>
              <h1 className='font-bold text-[20px]'>Free standard shipping</h1>
            </li>
          </ul>
        </div>

        <div className='w-1/2 small:order-first medium:order-first  order-last small:w-full medium:w-full '>
          <Image src={Tab} alt='' width='' height='' />
        </div>
      </section>
    </main>
  )
}
export default Container4
