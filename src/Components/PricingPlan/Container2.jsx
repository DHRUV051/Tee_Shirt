import Image from 'next/image'
import Flag from '../../../public/assets/PricingPlans/flagicon.svg'
import Vector from '../../../public/assets/PricingPlans/Vector.svg'
import BigCircle from '../../../public/assets/PricingPlans/bigcircle.svg'
import List from '../../../public/assets/PricingPlans/List.svg'

const Container2 = () => {
  return (
    <main className='relative px-[150px] medium:px-[30px] small:px-[30px] py-[50px] flex small:flex-col medium:flex-col gap-[50px]'>
      <section className="small:flex small:flex-col small:items-center medium:flex medium:flex-col medium:items-center">
        <h1 className='font-bold text-[14px] uppercase flex gap-2 small:text-center medium:text-center'>
          <Image src={Flag} />
          Choose a Plan
        </h1>
        <h1 className='mt-[10px] font-bold text-[40px] small:text-[20px] medium:text-[30px] leading-[52px] small:leading-[30px] medium:leading-[41px] small:text-center medium:text-center'>Simple pricing for everyone</h1>
        <p className='mt-[10px] font-medium text-[18px] text-[rgb(126,126,126)] small:text-center medium:text-center'>
          T-shirt Printing for Everyone. Get a head start with free design templates you can customize in a few clicks.
        </p>
        <p className='mt-[10px] text-[rgb(46,187,119)] font-bold text-[18px] flex '>
          Learn More{' '}
          <span className='ml-2 mt-2'>
            <Image src={Vector} />
          </span>
        </p>
      </section>
      <section className='relative  h-[50px] w-[100%] mb-[400px] small:flex small:flex-col small:items-center medium:flex medium:flex-col medium:items-center small:mb-[800px] medium:mb-[700px]'>
        <Image
          src={BigCircle}
          alt=''
          width=''
          height=''
          className='absolute -top-[50px] -right-[150px] h-[250px] -z-10 small:hidden medium:hidden'
        />

        <Image
          src={BigCircle}
          alt=''
          width=''
          height=''
          className='absolute top-[330px]  -left-[220px] h-[100px] -z-10  small:hidden medium:hidden'
        />

        <div className='bg-[rgb(255,255,255)] rounded-[20px] p-[20px] flex z-50 w-[800px] shadow-md divide-x-2 divide-dashed small:flex-col medium:flex-col medium:divide-none small:divide-none small:items-center medium:items-center small:w-fit medium:w-[600px] small:z-0 medium:z-0 '>
          <div className='pr-[50px] medium:pr-0 small:pr-0 w-[50%] small:text-center small:w-full medium:w-full'>
            <h1 className='font-bold text-[24px] leading-[33.6px]'>What’s inside</h1>
            <ul className='mt-[20px] space-y-[10px]'>
              <li className='flex gap-2'>
                <Image src={List} alt='' width='' height='' />
                <h1 className='font-medium text-[15px] leading-[27px]'>Full access to all features</h1>
              </li>
              <li className='flex gap-2'>
                <Image src={List} alt='' width='' height='' />
                <h1 className='font-medium text-[15px] leading-[27px]'>Mix and match colors, sizes, and designs</h1>
              </li>
              <li className='flex gap-2'>
                <Image src={List} alt='' width='' height='' />
                <h1 className='font-medium text-[15px] leading-[27px]'>Fast and free standard shipping</h1>
              </li>
              <li className='flex gap-2'>
                <Image src={List} alt='' width='' height='' />
                <h1 className='font-medium text-[15px] leading-[27px]'>Customer happiness guarantee</h1>
              </li>
              <li className='flex gap-2'>
                <Image src={List} alt='' width='' height='' />
                <h1 className='font-medium text-[15px] leading-[27px]'>Use on unlimited projects</h1>
              </li>
              <li className='flex gap-2'>
                <Image src={List} alt='' width='' height='' />
                <h1 className='font-medium text-[15px] leading-[27px]'>No credit card required</h1>
              </li>
              <li className='flex gap-2'>
                <Image src={List} alt='' width='' height='' />
                <h1 className='font-medium text-[15px] leading-[27px]'>Friendly supports</h1>
              </li>
            </ul>
            <button className='bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] text-white mt-[20px]  w-full text-center'>
              Get Started
            </button>
          </div>

          <div className='small:order-first medium:order-first pl-[50px] small:pl-0 medium:pl-0 w-[50%] space-y-[30px] small:w-full medium:w-full '>
            <div>
              <h1 className='font-bold text-[18px]'>Access to update</h1>
              <span className='font-medium text-[15px] text-[rgb(126,126,126)]'>Updates come to the email.</span>

              <div className='mt-[20px] bg-[rgb(245,245,245)] px-[5px] py-[5px] w-fit rounded-[12px] flex'>
                <div>
                  <h1 className=' text-[15px] font-bold text-[rgb(126,126,126)] px-[20px] py-[5px]'>3 Months</h1>
                </div>
                <div>
                  <h1 className='bg-[rgb(255,255,255)] text-[15px] font-bold  px-[30px] py-[5px] rounded-[8px]'>
                    Forever
                  </h1>
                </div>
              </div>
            </div>

            <div>
              <h1 className='font-bold text-[18px]'>Lifetime license</h1>
              <p className='text-[rgb(126,126,126)] font-medium text-[15px]'>Lorem ipsum det, radipiscing elit</p>
              <div className='mt-[20px] bg-[rgb(245,245,245)] px-[5px] py-[5px] w-fit rounded-[12px] flex'>
                <div>
                  <h1 className=' text-[15px] font-bold text-[rgb(126,126,126)] px-[20px] py-[5px]'>Personal</h1>
                </div>
                <div>
                  <h1 className='bg-[rgb(255,255,255)] text-[15px] font-bold  px-[30px] py-[5px] rounded-[8px]'>
                    Corporate
                  </h1>
                </div>
              </div>
            </div>

            <div>
              <h1 className='font-bold text-[48px] leading-[48px]'>
                $68<span className='font-medium text-[20px] ml-4 line-through text-[rgb(126,126,126)]'>$86</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Container2
