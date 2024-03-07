import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import img1 from '../../../public/assets/Blog/img1.svg';
import img2 from '../../../public/assets/Blog/img2.svg';
import img3 from '../../../public/assets/Blog/img3.svg';
import img4 from '../../../public/assets/Blog/img4.svg';
import img5 from '../../../public/assets/Blog/img5.svg';
import img6 from '../../../public/assets/Blog/img6.svg';
import b1 from '../../../public/assets/Blog/b1.svg';
import b2 from '../../../public/assets/Blog/b2.svg';
import Article from '../../../public/assets/Blog/Article.svg';
import Article1 from '../../../public/assets/Blog/Article1.svg';
import Article2 from '../../../public/assets/Blog/Article2.svg';

const Component2 = () => {
  return (
    <>
      <div className='bg-[rgb(245,245,245)] px-[150px] py-[75px] sm:py-[50px] sm:px-[30px] md:px-[50px] md:py-[80px] my-8'>
        <div className='text-center font-Plus Jakarta Sans'>
          <h1 className='font-semibold text-4xl text-[rgba(0,0,0,1)] sm:text-2xl md:text-2xl'>Blog</h1>
          <h3 className='text-[rgba(126,126,126,1)] pt-2 font-[Plus Jakarta Sans]'>Home —— <span className='text-[rgba(0,0,0,1)] font-[Plus Jakarta Sans]'>Blog</span></h3>
        </div>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-1  md:grid-cols-2 py-7 gap-5'>

        {/* search bar and side bar */}
        <div className=' py-2'>
          <h1 className='font-bold font-[Plus Jakarta Sans] px-24 text-[20px] sm:pl-4 md:px-10'>Search</h1>
          <div className="flex items-center sm:justify-left md:justify-left sm:pl-4 pl-24 md:pl-8 py-4">

          
            <div className="flex border-2 rounded">
              <input
                type="text"
                className="px-4 py-2 w-60 sm:w-auto md:w-auto font-[Plus Jakarta Sans]"
                placeholder="Search..."
              />
              <button className="flex items-center justify-center px-4 border-l">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className='font-bold text-[20px] pl-24 pb-3 sm:pl-4 md:px-10 font-[Plus Jakarta Sans]'>Categories</div>

          <div className="flex flex-col justify-between px-24 sm:px-12 sm:pl-5 md:px-10">
          
            <div className=' flex justify-between font-[Plus Jakarta Sans] text-[15px] text-[rgba(126,126,126,1)]'>Design Services  <h1 className=' text-[15px] font-[Plus Jakarta Sans] text-[rgba(0,0,0,1)]'>6</h1></div>
            <div className=' flex justify-between font-[Plus Jakarta Sans] text-[15px] text-[rgba(126,126,126,1)]'>HaruTheme        <h1 className=' text-[15px] font-[Plus Jakarta Sans] text-[rgba(0,0,0,1)]'>4</h1></div>
            <div className=' flex justify-between font-[Plus Jakarta Sans] text-[15px] text-[rgba(126,126,126,1)]'>Print Company    <h1 className=' text-[15px] font-[Plus Jakarta Sans] text-[rgba(0,0,0,1)]'>3</h1></div>
            <div className=' flex justify-between font-[Plus Jakarta Sans] text-[15px] text-[rgba(126,126,126,1)]'>Print Shop       <h1 className=' text-[15px] font-[Plus Jakarta Sans] text-[rgba(0,0,0,1)]'>3</h1></div>
            <div className=' flex justify-between font-[Plus Jakarta Sans] text-[15px] text-[rgba(126,126,126,1)]'>Uncategorized    <h1 className=' text-[15px] font-[Plus Jakarta Sans] text-[rgba(0,0,0,1)]'>3</h1></div>
  
       
          </div>

          <div className='font-bold text-[20px] font-[Plus Jakarta Sans] py-5 pl-24 sm:pl-4 md:px-10 '>Latest Posts</div>

          {/* images*/}

          <div class=" pl-24 md:pl-10 pb-5 sm:pl-4 flex items-center space-x-4">
    <Image class="h-[100px] w-[100px]" src={img1} alt="person" />
            <div>
        <p class="text-[rgba(126,126,126,1)] font-[Plus Jakarta Sans] text-[14px]">Design Services</p>
        <div class=" text-[16px] font-bold text-[rgba(0,0,0,1)] font-[Plus Jakarta Sans] text-balance">What make you beautiful with us</div>
            </div>
        </div>

        <div class=" pl-24 md:pl-10 pb-5 sm:pl-4 flex items-center space-x-4">
    <Image class="h-[100px] w-[100px]" src={img2} alt="person" />
  <div>
    <p class="text-[rgba(126,126,126,1)] font-[Plus Jakarta Sans] text-[14px]">Design Services, HaruTheme</p>
    <div class=" text-[16px] font-bold font-[Plus Jakarta Sans] text-[rgba(0,0,0,1)] text-balance">Mirum est notare quam littera gothica</div>
  </div>
</div>

<div class=" pl-24 md:pl-10 pb-5 sm:pl-4 flex items-center space-x-4">
    <Image class="h-[100px] w-[100px]" src={img3} alt="person" />
  <div>
    <p class="text-[rgba(126,126,126,1)] font-[Plus Jakarta Sans] text-[14px]">Design Services, HaruTheme</p>
    <div class=" text-[16px] font-bold font-[Plus Jakarta Sans] text-[rgba(0,0,0,1)] text-balance">Ut wisi enim ad minim veniam</div>
  </div>
</div>

<div class=" pl-24 md:pl-10 pb-5 sm:pl-4 flex items-center space-x-4">
    <Image class="h-[100px] w-[100px]" src={img4} alt="person" />
  <div>
    <p class="text-[rgba(126,126,126,1)] font-[Plus Jakarta Sans] text-[14px]">HaruTheme</p>
    <div class=" text-[16px] font-bold font-[Plus Jakarta Sans] text-[rgba(0,0,0,1)] text-balance">How to make a T-shirt design online</div>
  </div>
</div>

<div class=" pl-24 md:pl-10 pb-5 sm:pl-4 flex items-center space-x-4">
 
    <Image class="h-[100px] w-[100px]" src={img5} alt="person" />
  <div>
    <p class="text-[rgba(126,126,126,1)] font-[Plus Jakarta Sans] text-[14px]">Print Company</p>
    <div class=" text-[16px] font-bold font-[Plus Jakarta Sans] text-[rgba(0,0,0,1)] text-balance">Let say it your way</div>
  </div>
</div>

{/* more image */}
<Image
          src={img6}
          alt=''
          width=''
          height=''
          className='sm:p-5 md:p-8 w-auto h-auto lg:pl-24'
        />



<div className='font-bold text-[20px] font-[Plus Jakarta Sans] py-5 pl-24 sm:pl-4 md:px-10 sm:hidden md:hidden'>Tags</div>
<div className='space-x-4 space-y-4 sm:px-5 px-24 sm:hidden md:hidden'>
  <button className='bg-[rgba(248,248,248,1)] px-4 py-2 rounded-[12px]'>
    <h1 className='font-bold text-[14px] font-[Plus Jakarta Sans] text-[rgba(126,126,126,1)] text-center flex'>company</h1>
  </button>
  <button className='bg-[rgba(248,248,248,1)] px-4 py-2 rounded-[12px]'>
    <h1 className='font-bold text-[14px] font-[Plus Jakarta Sans] text-[rgba(126,126,126,1)] text-center flex'>design services</h1>
  </button>
  <button className='bg-[rgba(248,248,248,1)] px-4 py-2 rounded-[12px]'>
    <h1 className='font-bold text-[14px] font-[Plus Jakarta Sans] text-[rgba(126,126,126,1)] text-center flex'>HaruTheme</h1>
  </button>
  <button className='bg-[rgba(248,248,248,1)] px-4 py-2 rounded-[12px]'>
    <h1 className='font-bold text-[14px] font-[Plus Jakarta Sans] text-[rgba(126,126,126,1)] text-center flex'>pricom</h1>
  </button>
  <button className='bg-[rgba(248,248,248,1)] px-4 py-2 rounded-[12px]'>
    <h1 className='font-bold text-[14px] font-[Plus Jakarta Sans] text-[rgba(126,126,126,1)] text-center flex'>print</h1>
  </button>
  <button className='bg-[rgba(248,248,248,1)] px-4 py-2 rounded-[12px]'>
    <h1 className='font-bold text-[14px] font-[Plus Jakarta Sans] text-[rgba(126,126,126,1)] text-center flex'>printing</h1>
  </button>
  <button className='bg-[rgba(248,248,248,1)] px-4 py-2 rounded-[12px]'>
    <h1 className='font-bold text-[14px] font-[Plus Jakarta Sans] text-[rgba(126,126,126,1)] text-center flex'>printshop</h1>
  </button>
</div>
        </div>



{/* another page */}
<div className=' sm:px-4 md:px-4'>
<Image
          src={b1}
          alt=''
          width=''
          height=''
          className=' w-[400px] h-[327.05px] left-[380px] rounded-xl'
        />
        
         <button className='bg-[rgba(245,245,245,1)] px-3 py-1 rounded-[12px] '>
              <h1 className='font-bold text-[14px] font-[Plus Jakarta Sans] text-[rgba(46,187,119,1)] text-center flex'>Design Services</h1>
          </button>

         <h1 className=' font-bold text[20px] font-[Plus Jakarta Sans] pt-3 text-balance'>Make yourself happy with our T-shirt customer designer</h1>
         <h1 className=' text-[rgba(126,126,126,1)] text-[15px] py-2'>August 20, 2022 —— by<span className=' text-black text-[15px]'> admin</span></h1>
         <p className=' text-[rgba(126,126,126,1)] text-[15px] text-balance pb-4 '>Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
         gravida mi purus sit amet erat. Ut dictum nisi massa.Maecenas id justo
         rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...</p>

         <button className='bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] '>
            <Link href='/shop' className='text-white text-center flex'>
              <h1 className='font-bold text-[15px]'>Read More</h1> 
            </Link>
          </button>

<Image
          src={Article}
          alt=''
          width=''
          height=''
          className=' w-[400px] h-[327.05px] left-[380px] rounded-xl'
        />
         <button className='bg-[rgba(245,245,245,1)] px-3 py-1 rounded-[12px] '>
              <h1 className='font-bold text-[14px] font-[Plus Jakarta Sans] text-[rgba(46,187,119,1)] text-center flex'>Print Company</h1>
          </button>
         <h1 className=' font-bold pt-3 text[20px] font-[Plus Jakarta Sans] text-balance '>The best custom T-shirt designer WordPress theme</h1>         
         <h1 className=' text-[rgba(126,126,126,1)] text-[15px] font-[Plus Jakarta Sans] py-2'>August 20, 2022 —— by<span className=' text-black text-[15px] font-[Plus Jakarta Sans]'> admin</span></h1>
         <p className=' text-[rgba(126,126,126,1)] text-[15px] text-balance pb-4'>Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
         gravida mi purus sit amet erat. Ut dictum nisi massa.Maecenas id justo
         rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...</p>
         <button className='bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] '>
            <Link href='/shop' className='text-white text-center flex'>
              <h1 className='font-bold font-[Plus Jakarta Sans] text-[15px]'>Read More</h1> 
            </Link>
          </button>


          
         <Image
          src={Article1}
          alt=''
          width=''
          height=''
          className=' w-[400px] h-[327.05px] left-[380px] rounded-xl'
        />
         <button className='bg-[rgba(245,245,245,1)] px-3 py-1 rounded-[12px] '>
              <h1 className='font-bold text-[14px] text-[rgba(46,187,119,1)] text-center flex'>Print Shop</h1>
          </button>
         <h1 className=' font-bold text-[15px] font-[Plus Jakarta Sans] pt-3'>Zone Sweatshirt</h1>
         <h1 className=' text-[rgba(126,126,126,1)] text-[15px] font-[Plus Jakarta Sans] py-2'>August 20, 2022 —— by<span className=' text-black text-[15px] font-[Plus Jakarta Sans]'> admin</span></h1>
         <p className=' text-[rgba(126,126,126,1)] text-[15px]  font-[Plus Jakarta Sans] text-balance pb-4'>Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
         gravida mi purus sit amet erat. Ut dictum nisi massa.Maecenas id justo
         rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...</p>
         <button className='bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] '>
            <Link href='/shop' className='text-white text-center flex'>
              <h1 className='font-bold  font-[Plus Jakarta Sans]text-[15px]'>Read More</h1> 
            </Link>
          </button>


</div>

<div className=' sm:px-4 md:pl-10 '>
<Image
          src={b2}
          alt=''
          width=''
          height=''
          className='w-[400px] h-[327.05px] left-[380px] rounded-xl'
        />
         <button className='bg-[rgba(245,245,245,1)] px-3 py-1 rounded-[12px] '>
              <h1 className='font-bold text-[14px] font-[Plus Jakarta Sans] text-[rgba(46,187,119,1)] text-center flex'>Print Company</h1>
          </button>

          <button className='bg-[rgba(245,245,245,1)] px-3 py-1 rounded-[12px]'>
              <h1 className='font-bold text-[14px] font-[Plus Jakarta Sans] text-[rgba(46,187,119,1)] text-center flex'>Print Shop</h1>
          </button>
         <h1 className=' font-bold font-[Plus Jakarta Sans] text-[15px] pt-3'>Are you ready to make it awesome with us</h1>
         <h1 className=' text-[rgba(126,126,126,1)] font-[Plus Jakarta Sans] text-[15px] py-2'>August 20, 2022 —— by<span className=' text-black font-[Plus Jakarta Sans] text-[15px]'> admin</span></h1>
         <p className=' text-[rgba(126,126,126,1)] text-[15px] font-[Plus Jakarta Sans] text-balance pb-4 '>Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
         gravida mi purus sit amet erat. Ut dictum nisi massa.Maecenas id justo
         rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...</p>
         <button className='bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] '>
            <Link href='/shop' className='text-white text-center flex'>
              <h1 className='font-bold font-[Plus Jakarta Sans] text-[15px]'>Read More</h1> 
            </Link>
          </button>


         <Image
          src={Article1}
          alt=''
          width=''
          height=''
          className=' w-[400px] h-[327.05px] left-[380px] rounded-xl'
        />
         <button className='bg-[rgba(245,245,245,1)] px-3 py-1 rounded-[12px] '>
              <h1 className='font-bold text-[15px] text-[rgba(46,187,119,1)] text-center font-[Plus Jakarta Sans] flex'>Print Shop</h1>
          </button>
         <h1 className=' font-bold font-[Plus Jakarta Sans] pt-3 text-[15px]'>Zone Sweatshirt</h1>
         <h1 className=' text-[rgba(126,126,126,1)] py-2 font-[Plus Jakarta Sans] text-[15px]'>August 20, 2022 —— by<span className=' text-black font-[Plus Jakarta Sans] px-[15px]'> admin</span></h1>
         <p className=' text-[rgba(126,126,126,1)] text-[15px] font-[Plus Jakarta Sans] text-balance pb-4'>Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
         gravida mi purus sit amet erat. Ut dictum nisi massa.Maecenas id justo
         rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...</p>
         <button className='bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] '>
            <Link href='/shop' className='text-white text-center flex'>
              <h1 className='font-bold text-[15px] font-[Plus Jakarta Sans]'>Read More</h1> 
            </Link>
          </button>

          
         <Image
          src={Article2}
          alt=''
          width=''
          height=''
          className=' w-[400px] h-[327.05px] left-[380px] rounded-xl pb-52'
        />
         <button className='bg-[rgba(245,245,245,1)] px-3 py-1 rounded-[12px] '>
              <h1 className='font-bold text-[15px] text-[rgba(46,187,119,1)] text-center font-[Plus Jakarta Sans] flex'>Print Shop</h1>
          </button>
         <h1 className=' font-bold font-[Plus Jakarta Sans] pt-3 text-[15px]'>Zone Sweatshirt</h1>
         <h1 className=' text-[rgba(126,126,126,1)] py-2 font-[Plus Jakarta Sans] text-[15px]'>August 20, 2022 —— by<span className=' text-black font-[Plus Jakarta Sans] px-[15px]'> admin</span></h1>
         <p className=' text-[rgba(126,126,126,1)] text-[15px] font-[Plus Jakarta Sans] text-balance pb-4'>Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
         gravida mi purus sit amet erat. Ut dictum nisi massa.Maecenas id justo
         rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...</p>
         <button className='bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] '>
            <Link href='/shop' className='text-white text-center flex'>
              <h1 className='font-bold text-[15px] font-[Plus Jakarta Sans]'>Read More</h1> 
            </Link>
          </button>


</div>

</div>

      
<div className=' flex flex-col items-center'>
  <ul class="inline-flex -space-x-px text-[15px] gap-2 py-6">

    <li>
      <a href="#" class="flex items-center font-[Plus Jakarta Sans] justify-center px-3 h-8 rounded-full text-[rgba(255,255,255,1)] bg-[rgba(0,0,0,1)] border-gray-300 ">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center font-[Plus Jakarta Sans] justify-center px-3 h-8 rounded-full text-[rgba(0,0,0,1)] bg-white border border-gray-300 ">2</a>
    </li>
    <li>
      <a href="#" class="flex items-center font-[Plus Jakarta Sans] justify-center px-3 h-8 rounded-full text-[rgba(0,0,0,1)] bg-white border border-gray-300 ">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center font-[Plus Jakarta Sans] justify-center px-3 h-8 text-[rgba(0,0,0,1)]  ">Next → </a>
    </li>
  </ul>
</div>
    </>
  )
}

export default Component2;
