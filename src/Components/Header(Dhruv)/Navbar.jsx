import Image from 'next/image'

import Link from 'next/link'
import NavbarData from '@/utils/NavbarData'
import LOGO from '../../../public/logo.svg'
import { BsHandbag } from 'react-icons/bs'
import SearchField from '@/Components/Header(Dhruv)/SearchField'
import { CiMenuFries } from 'react-icons/ci'
import { useState } from 'react'
import { clsx } from 'clsx'
import { HiOutlineXMark } from 'react-icons/hi2'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <nav className='px-[40px] py-[10px]  flex justify-between small:hidden medium:hidden'>
        <div>
          <Image src={LOGO} alt='' width='auto' height='auto' />
        </div>

        <div className=' pt-[15px] block '>
          <ul className='flex space-x-[40px]'>
            {NavbarData.map(item => (
              <li key={item.key}>
                <Link href={item.href} className='font-bold text-[15px]'>
                  {item.title}
                </Link>
              </li>
            ))}
            <li className='-space-x-[10px] -mt-[6px]'>
              <SearchField />
            </li>
          </ul>
        </div>

        <div className='pt-[5px] flex space-x-[30px] medium:space-x-[20px]'>
          <div className='relative drop-shadow-lg'>
            <button className='bg-[rgb(245,245,245)] px-[15px] py-[12px] rounded-full'>
              <BsHandbag />
            </button>

            <button className='bg-[rgb(46,187,119)] rounded-full px-2 absolute left-7 bottom-8'>0</button>
          </div>

          <div>
            <h1
              className='font-bold text-[14px] 
                        text-[rgb(155,155,155,100%)]'
            >
              Hotline:
            </h1>
            <h1 className='font-bold text-[18px]'>00 1900 8188</h1>
          </div>

          <div className=''>
            <button className='bg-black  text-white px-[30px] py-[10px] rounded-[12px] medium:px-[10px]'>
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <nav aria-label='Mobile Navbar' className=' px-[40px] py-[10px] hidden small:flex medium:flex justify-between'>
        <div className='-ml-[10px]'>
          <Link href='/'>
            <Image src={LOGO} alt='' width='auto' height='auto' />
          </Link>
        </div>

        <button
          onClick={() => setMenu(!menu)}
          className={menu ? 'hidden small:block medium:block' : ' hidden small:block medium:block'}
        >
          <CiMenuFries className='scale-150' />
        </button>
      </nav>

      <div
        className={clsx(
          menu
            ? 'fixed top-0 left-0 h-screen z-50 w-screen hidden small:flex medium:flex bg-black/50 backdrop-blur-sm'
            : ' hidden  small:block medium:block'
        )}
      >
        <section
          className={clsx(
            menu
              ? ' translate-x-0 transition-all  bg-white flex-col  fixed right-0 top-0 h-screen medium:w-1/2 w-full p-8 gap-8 z-50 flex'
              : ' p-8 gap-8 flex flex-col  translate-x-full -z-50 transition-all  top-0 right-0  w-full h-full  fixed ',
            'ease-in-out  duration-[500ms] '
          )}
        >
          <button className='mt-0 mb-5 text-3xl cursor-pointer ml-auto'>
            <HiOutlineXMark
              onClick={() => setMenu(!menu)}
              className={clsx(menu ? '' : 'relative top-0 right-16 left-0')}
            />
          </button>

          <div className='absolute top-11 left-16'>
            <SearchField />
          </div>

          <ul className={clsx('flex  flex-col justify-center space-y-5 tracking-normal text-lg ')}>
            {NavbarData.map(item => (
              <li key={item.key} className='ml-10'>
                <Link href={item.href} className='font-bold text-[18px]'>
                  {item.title}
                </Link>
              </li>
            ))}

            <li className='flex ml-10 font-bold text-[18px] space-x-3'>
              <h1>Cart</h1>
              <h1>0</h1>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Navbar
