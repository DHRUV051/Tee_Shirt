'use client'
import { MdOutlineKeyboardCapslock } from "react-icons/md";
import React, { useState } from 'react'

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div className='py-2'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={` flex justify-between font-bold text-[20px] w-full bg-[rgb(255,255,255)] px-[20px] py-[20px] rounded-[12px] ${accordionOpen ? ' text-white bg-[rgb(46,187,119)] ' : ''} `}
      >
        <span>{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <MdOutlineKeyboardCapslock className={` mt-[4px] ${accordionOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className= 'z-10 overflow-hidden mt-[20px] font-medium text-[16px] text-[rgb(126,126,126)]'>{answer}</div>
      </div>
    </div>
  )
}

export default Accordion
