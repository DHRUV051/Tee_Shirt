import React from 'react';
import Image from "next/image";
import macbook from "../../../public/assets/Contain7/macbook.svg";

const Container7 = () => {
  return (
    <main className="relative bg-[rgba(245,245,245,1)] h-auto lg:h-[450px] max-w-[1345px] mx-auto pt-1 mt-5 px-1 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:justify-start gap-8 lg:mt-14">
        <div className="lg:w-1/2 lg:mt-0 mx-auto">
          <Image src={macbook} alt="macbook" width={705} height={397} layout="responsive" objectFit="contain" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center lg:relative lg:flex-row lg:justify-start lg:items-start lg:text-left lg:w-1/2 lg:px-0">
          <div className="bg-white bg-opacity-30 p-4 rounded-lg lg:bg-opacity-0 lg:p-0">
            <h1 className="font-bold text-[24px] lg:text-[32px] leading-tight">10,000+ of free images, icons, and graphics</h1>
            <p className="text-[rgba(126,126,126,1)] mt-4">You’ve got the ideas, we’ve got the tools</p>
            <button className="mt-4 bg-[rgba(46,187,119,1)] text-white rounded-lg p-2 lg:p-4 w-[181px] h-[56px] lg:w-auto"
              style={{
                maxWidth: '181.39px',
                maxHeight: '56px',
                borderRadius: '12px',
              }}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Container7;
