import Image from 'next/image'
import Store from '../../../public/assets/PricingPlans/store.svg'

const Container4 = () => {
  return (
    <main className='px-[150px] small:px-[30px] medium:px-[30px] flex pb-[50px] small:pb-[30px] medium:pb-[30px] small:flex-col medium:flex-col'>
      <section className='w-1/2 small:w-full medium:w-full'>
        <Image src={Store} alt='' width='' height='' className='small:mx-auto medium:mx-auto'/>
        <div className='mt-[30px]'>
          <h1 className='font-bold text-[40px] leading-[46px] small:text-center medium:text-center small:text-[24px] medium:text-[30px]'>Choose a plan & get started</h1>
          <p className='font-medium text-[18px] text-[rgb(126,126,126)] w-[85%] small:text-center medium:text-center small:text-[14px] medium:text-[16px] small:w-full medium:w-full'>
            Printing organization mottos While the Internet might assume control of numerous parts of printing, a few
            things are as yet favored on paper.
          </p>
        </div>
      </section>
      <section className='mt-[30px] space-y-[20px] w-1/2 small:w-full medium:w-full'>

        <div className='border border-1 border-[rgb(42,187,119)] bg-[rgb(255,255,255)] shadow-lg p-[20px] rounded-[12px]'>

            <label className='flex'>
                   <input type="radio" name='plan' className='w-5 h-5 mt-3 mr-3 scale-[1.2]' />
                   <h1 className='font-bold text-[32px] small:text-[20px] medium:text-[24px]'>Starter</h1>
                   <h1 className='ml-auto font-bold text-[24px]'>$37<span className='font-medium text-[18px] text-[rgb(126,126,126)]'>/month</span></h1>
            </label>
            <p className='text-[rgb(126,126,126)] font-medium text-[18px] w-[80%]'>
            Duis vestibulum, massa sit amet bibendum ultrices, mauris lacus varius nunc, dapibus condimentum
            </p>

        </div>

        
        <div className='border border-1 border-[rgb(42,187,119)] bg-[rgb(255,255,255)] shadow-lg p-[20px] rounded-[12px]'>

            <label className='flex'>
                   <input type="radio" name='plan' className='w-5 h-5 mt-3 mr-3 scale-[1.2]' />
                   <h1 className='font-bold text-[32px] small:text-[20px] medium:text-[24px]'>Standard</h1>
                   <h1 className='ml-auto font-bold text-[24px]'>$67<span className='font-medium text-[18px] text-[rgb(126,126,126)]'>/month</span></h1>
            </label>
            <p className='text-[rgb(126,126,126)] font-medium text-[18px] w-[80%]'>
            Duis vestibulum, massa sit amet bibendum ultrices, mauris lacus varius nunc, dapibus condimentum
            </p>

        </div>


        
        <div className='border border-1 border-[rgb(42,187,119)] bg-[rgb(255,255,255)] shadow-lg p-[20px] rounded-[12px]'>

            <label className='flex'>
                   <input type="radio" name='plan' className='w-5 h-5 mt-3 mr-3 scale-[1.2]' />
                   <h1 className='font-bold text-[32px] small:text-[20px] medium:text-[24px]'>Pro</h1>
                   <h1 className='ml-auto font-bold text-[24px]'>$99<span className='font-medium text-[18px] text-[rgb(126,126,126)]'>/month</span></h1>
            </label>
            <p className='text-[rgb(126,126,126)] font-medium text-[18px] w-[80%]'>
            Duis vestibulum, massa sit amet bibendum ultrices, mauris lacus varius nunc, dapibus condimentum
            </p>

        </div>



        <div className=''>
            <button className='bg-[rgb(46,187,119)] rounded-[12px] font-bold text-[16px] text-white w-full py-[10px]'>
            Purchase Now
            </button>
        </div>

      </section>
    </main>
  )
}

export default Container4
