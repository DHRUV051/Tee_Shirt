import Image from 'next/image'
import Tshirt1 from '../../../public/assets/Home/tshirt1.svg'
import Tshirt2 from '../../../public/assets/Home/tshirt2.svg'
import Tshirt3 from '../../../public/assets/Home/tshirt3.svg'
import Tshirt4 from '../../../public/assets/Home/tshirt4.svg'

const Container5 = () => {
  return (
    <main className='px-[150px] py-[70px] small:px-[30px] small:py-[30px] medium:px-[30px] medium:py-[30px] '>
      <section className=' text-center flex flex-col items-center'>
        <h1 className='text-[40px] small:text-[28px] medium:text-[28px] font-bold'>Our picks for you</h1>
        <p className='font-medium text-[18px] w-6/12 text-[rgb(126,126,126)] small:w-full medium:w-full'>
          Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix adipiscing eliet, cowec
          tetopak
        </p>
      </section>

      <section className='flex flex-col items-center justify-center  mt-[100px] '>
        <div className='grid grid-cols-4 gap-[50px]'>

        {/* Product1 */}
          <div className='relative'>
            <Image src={Tshirt1} alt='' width='' height='' className='rounded-[12px] drop-shadow-lg' />

            <div aria-label='Product Info' className='mt-[20px]'>
              <h1 className='text-[18] font-bold text-center'>Premium Crewneck Sweatshirt</h1>
              <div className='flex justify-center items-center space-x-2'>
                <span className='font-bold text-[16px] text-[rgb(46,187,119)]'>$29.00</span>
                <span className='line-through font-medium text-[13.6px] text-[rgb(155,155,155)]'>$39.00</span>
              </div>
            </div>

            <div ariar-label='sold'>
              <div className='bg-black absolute p-[60px] opacity-[0.5] rounded-full top-[120px] left-[80px] '></div>
              <div className='font-bold text-white text-[18px] absolute top-[165px] left-[105px]'>
                <span>Sold Out</span>
              </div>
            </div>

            <div aria-label='discount'>
                <div className='bg-[rgb(46,187,119)] px-1 rounded-[3px] w-10 absolute top-2 left-2'>
                    <span className=' text-white text-[14px] font-semibold'>-26%</span>
                </div>
            </div>

          </div>

          {/* Product2 */}
          <div className='relative'>
            <Image src={Tshirt2} alt='' width='' height='' className='rounded-[12px] drop-shadow-lg' />

            <div aria-label='Product Info' className='mt-[20px]'>
              <h1 className='text-[18] font-bold text-center'>Midweight Cotton Tee</h1>
              <div className='flex justify-center items-center space-x-2'>
                <span className='font-bold text-[16px] '>$26.00 - $29.00</span>
              </div>
            </div>

            <div className='mt-[10px] flex justify-center items-center'>
              <div aria-label='Product Color'>
                <div className='border border-[rgb(238,238,238)] rounded-full p-1'>
                  <div className='bg-black rounded-full p-[8px] w-fit'></div>
                </div>
              </div>

              <div aria-label='Product Color'>
                <div className='border border-[rgb(238,238,238)] rounded-full p-1'>
                  <div className='bg-[rgb(215,169,131)] rounded-full p-[8px] w-fit'></div>
                </div>
              </div>
                
                <span className='font-medium text-[16px]'>
                        +3
                </span>
            </div>

            <div aria-label='Sale'>
                <div className='bg-[rgb(46,187,119)] px-1 rounded-[3px] w-10 absolute top-2 left-2'>
                    <span className=' text-white text-[14px] font-semibold'>Sale!</span>
                </div>
            </div>

            <div aria-label='new'>
                <div className='bg-[rgb(180,121,217)] px-1 rounded-[3px] w-10 absolute top-9 left-2'>
                    <span className=' text-white text-[14px] font-semibold'>New</span>
                </div>
            </div>

          </div>

          {/* Product3 */}
          <div className='relative'>
            <Image src={Tshirt3} alt='' width='' height='' className='rounded-[12px] drop-shadow-lg' />

            <div aria-label='Product Info' className='mt-[20px]'>
              <h1 className='text-[18] font-bold text-center'>Youth Short Sleeve Tee</h1>
              <div className='flex justify-center items-center space-x-2'>
                <span className='font-bold text-[16px] '>$26.00 - $29.00</span>
              </div>
            </div>

            <div className='mt-[10px] flex justify-center items-center'>
              <div aria-label='Product Color'>
                <div className='border border-[rgb(238,238,238)] rounded-full p-1'>
                  <div className='bg-black rounded-full p-[8px] w-fit'></div>
                </div>
              </div>

              <div aria-label='Product Color'>
                <div className='border border-[rgb(238,238,238)] rounded-full p-1'>
                  <div className='bg-[rgb(215,169,131)] rounded-full p-[8px] w-fit'></div>
                </div>
              </div>
                
                <span className='font-medium text-[16px]'>
                        +3
                </span>
            </div>

            <div aria-label='Sale'>
                <div className='bg-[rgb(46,187,119)] px-1 rounded-[3px] w-10 absolute top-2 left-2'>
                    <span className=' text-white text-[14px] font-semibold'>Sale!</span>
                </div>
            </div>

            <div aria-label='new'>
                <div className='bg-[rgb(180,121,217)] w-10 px-1 rounded-[3px]  absolute top-9 left-2'>
                    <span className=' text-white text-[14px] font-semibold'>New</span>
                </div>
            </div>

          </div>

            {/* Product4  */}
          <div>
            <Image src={Tshirt4} alt='' width='' height='' className='rounded-[12px] drop-shadow-lg' />

            <div aria-label='Product Info' className='mt-[20px]'>
              <h1 className='text-[18] font-bold text-center'>Fine Jersey Tee</h1>
              <div className='flex justify-center items-center space-x-2'>
                <span className='font-bold text-[16px] '>$31.00</span>
              </div>
            </div>

          </div>



        </div>
      </section>
    </main>
  )
}

export default Container5
