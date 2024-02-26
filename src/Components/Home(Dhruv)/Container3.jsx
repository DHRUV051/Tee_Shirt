import Image from 'next/image'
import Design from '../../../public/assets/Home/Designtshirt.svg'
import Art from '../../../public/assets/Home/ArtTshirt.svg'
import Product from '../../../public/assets/Home/Product.svg'

const Container3 = () => {
  return (
    <main className=' px-[150px] small:px-[30px] medium:px-[50px]'>
      <section className='mt-[30px] text-center flex flex-col items-center'>
        <h1 className='text-[40px] small:text-[28px] medium:text-[28px] font-bold'>How to create custom shirts</h1>
        <p className='font-medium text-[18px] w-6/12 text-[rgb(126,126,126)] small:w-full medium:w-full'>
          Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet, cowec tetopak ec tetur duis
          necgi
        </p>
      </section>

      <section className='mt-[50px] small:px-0 medium:px-0 px-[80px] space-y-[80px] small:space-y-[30px] medium:space-y-[40px]'>

        <div className='flex items-center align-middle small:flex-col medium:flex-col'>
          <Image
            src={Design}
            alt=''
            width=''
            height=''
            className='w-5/12 small:order-last medium:order-last small:w-full medium:w-full'
          />

          <div className='small:order-first medium:order-first ml-16 flex small:flex-col medium:flex-col small:mb-[30px] medium:mb-[30px] small:ml-0 medium:ml-0'>
            <div className=' mr-16 small:mb-[10px] medium:mb-[10px]'>
              <div className='px-[15px] py-[10px] bg-[rgb(255,255,255)] rounded-full drop-shadow-lg w-fit'>1</div>
            </div>
            <div>
              <h1 className='text-[32px] small:text-[16px] medium:text-[18px] font-bold'>Add your shirt design</h1>
              <p className='text-[18px] small:text-[14px] medium:text-[14px]  font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis nec fringi det, consec t eturlagix adipiscing eliet, cowec tetopak nec
                fringi det adipiscing
              </p>
            </div>
          </div>
        </div>

        <div className='flex items-center align-middle small:flex-col medium:flex-col'>

          <div className='small:order-first medium:order-first small:mb-[30px] medium:mb-[30px] mr-16 small:mr-0 medium:mr-0 flex small:flex-col medium:flex-col'>

          <div className='small:order-first medium:order-first order-last small:mr-16 medium:mr-16 small:ml-0 medium:ml-0 ml-16 w-fit '>

              <div className='px-[15px] py-[10px] bg-[rgb(255,255,255)] rounded-full drop-shadow-lg small:mb-[10px] medium:mb-[10px]'>2</div>
            </div>

            <div>
              <h1 className='text-[32px] small:text-[16px] medium:text-[18px] font-bold'>Custom artwork &review</h1>
              <p className='text-[18px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis nec fringi det, consec t eturlagix adipiscing eliet, cowec tetopak nec
                fringi det adipiscing
              </p>
            </div>

            
          </div>

          <Image
            src={Art}
            alt=''
            width=''
            height=''
            className='w-5/12 small:order-last medium:order-last small:w-full medium:w-full'
          />
        </div>

        <div className='flex items-center align-middle small:flex-col medium:flex-col'>
          <Image
            src={Product}
            alt=''
            width=''
            height=''
            className='w-5/12 small:order-last medium:order-last small:w-full medium:w-full'
          />

          <div className='small:order-first medium:order-first ml-16 flex small:flex-col medium:flex-col small:mb-[30px] medium:mb-[30px] small:ml-0 medium:ml-0'>
          
           <div className=' mr-16 small:mb-[10px] medium:mb-[10px] w-fit'>
              <div className='px-[15px] py-[10px] bg-[rgb(255,255,255)] rounded-full drop-shadow-lg'>3</div>
            </div>
            <div>
              <h1 className='text-[32px] small:text-[16px] medium:text-[18px] font-bold'>Enjoy your product</h1>
              <p className='text-[18px] small:text-[14px] medium:text-[14px] font-medium text-[rgb(126,126,126)]'>
                Lorem ipsum det, cowec tetur duis nec fringi det, consec t eturlagix adipiscing eliet, cowec tetopak nec
                fringi det adipiscing
              </p>
            </div>
          </div>
        </div>

        
      </section>
    </main>
  )
}

export default Container3
