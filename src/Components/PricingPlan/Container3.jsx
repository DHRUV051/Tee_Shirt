import Image from 'next/image'
import Vector from '../../../public/assets/PricingPlans/List.svg'

const Container3 = () => {
  return (
    <main className=''>
      <section className='px-[150px] medium:px-[30px] small:px-[30px] py-[50px] bg-gradient-to-r from-[rgb(180,121,217,20%)]  to-[rgb(95,64,115,20%)]   flex flex-col items-center '>
        <h1 className='font-bold text-[40px] small:text-[24px] medium:text-[30px] small:text-center medium:text-center'>Simple pricing foreveryone</h1>
        <p className='font-medium text-[rgb(126,126,126)] text-[18px]'>Choose a plan and get started</p>
      </section>

      <section className='px-[150px] medium:px-[30px] small:px-[30px] py-[50px] bg-gradient-to-b from-[rgb(180,121,217,40%)]  to-[rgb(95,64,115,20%)] flex justify-between gap-[50px] medium:flex-col small:flex-col'>
        <div className='bg-[rgb(255,255,255)] p-[20px] w-1/3 small:w-full medium:w-full rounded-[12px] h-fit'>
          <h1 className='font-medium text-[20px] text-center'>Personal</h1>

          <h1 className='font-bold text-[48px] text-center'>
            $12.99<span className='font-medium text-[18px] text-[rgb(126,126,126)]'>/user</span>
          </h1>

          <ul className='mt-[50px] space-y-2'>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>Free licensed icons</h1>
            </li>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>Fast and free standard shipping</h1>
            </li>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>No credit card required</h1>
            </li>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>Friendly supports</h1>
            </li>
          </ul>

          <button className='mt-[30px] bg-gradient-to-r from-[rgb(46,187,119,20%)] to-[rgb(21,85,54,20%)] w-full text-center py-[10px] rounded-[12px]'>Get Started</button>
        </div>
        <div className='bg-[rgb(255,255,255)] p-[20px] w-1/3 small:w-full medium:w-full rounded-[12px] h-fit scale-[1.15] small:scale-100 medium:scale-100 mb-[50px] small:mb-0 medium:mb-0'>

          <h1 className='text-white bg-black px-[10px] py-[5px] w-fit ml-auto font-bold text-[15px] rounded-[5px]'> Popular</h1>

          <h1 className='font-medium text-[20px] text-center'>Professional</h1>

          <h1 className='font-bold text-[48px] text-center'>
          $59.99<span className='font-medium text-[18px] text-[rgb(126,126,126)]'>/team</span>
          </h1>

          <ul className='mt-[20px] space-y-2 medium:flex medium:flex-col'>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>
              Full access to all features
              </h1>
            </li>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>
              Fast and free standard shipping
              </h1>
            </li>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>No credit card required</h1>
            </li>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>Use on unlimited projects</h1>
            </li>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>Team collaboration feature.</h1>
            </li>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>Friendly supports</h1>
            </li>
          </ul>

          <button className='mt-[30px] bg-[rgb(46,187,119)]  w-full text-center py-[10px] rounded-[12px]'>Get Started</button>
        </div>
        <div className='bg-[rgb(255,255,255)] p-[20px] w-1/3  small:w-full medium:w-full  rounded-[12px] h-fit'>
          <h1 className='font-medium text-[20px] text-center'>Enterprise</h1>

          <h1 className='font-bold text-[48px] text-center'>
          $99.99<span className='font-medium text-[18px] text-[rgb(126,126,126)]'>/team</span>
          </h1>

          <ul className='mt-[50px] space-y-2'>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>All features in Pro Plan.</h1>
            </li>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>Use on unlimited projects</h1>
            </li>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>Team collaboration feature.</h1>
            </li>
            <li className='flex space-x-2'>
              <Image src={Vector} alt='' width='' height='' />
              <h1 className='font-medium text-[15px]'>Friendly supports</h1>
            </li>
          </ul>

          <button className='mt-[30px] bg-gradient-to-r from-[rgb(46,187,119,20%)] to-[rgb(21,85,54,20%)] w-full text-center py-[10px] rounded-[12px]'>Get Started</button>
        </div>
      </section>
    </main>
  )
}

export default Container3
