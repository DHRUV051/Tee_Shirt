import React from 'react';

const Container9 = () => {
  return (
    // Changed to use grid on small screens and flex on larger screens
    <main className="w-full max-w-[1345px] h-[230px] py-10 mx-auto px-4 sm:px-6 md:px-8 md:py-20 grid sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-around lg:items-center gap-4">
      <div className="flex flex-col w-full lg:w-[200px] h-[144px] mx-auto mb-6 lg:mx-4 lg:mb-0">
        <h1 className="text-[rgba(46,187,119,1)] text-[28px] md:text-[34px]">$37M</h1>
        <p className="text-[rgba(126,126,126,1)] text-[16px] md:text-[18px] mt-2">printing equipment</p>
      </div>

      <div className="flex flex-col w-full lg:w-[200px] h-[144px] mx-auto mb-6 lg:mx-4 lg:mb-0">
        <h1 className="text-[rgba(46,187,119,1)] text-[28px] md:text-[34px]">20M+</h1>
        <p className="text-[rgba(126,126,126,1)] text-[16px] md:text-[18px] mt-2">printing equipment</p>
      </div>

      <div className="flex flex-col w-full lg:w-[200px] h-[144px] mx-auto mb-6 lg:mx-4 lg:mb-0">
        <h1 className="text-[rgba(46,187,119,1)] text-[28px] md:text-[34px]">$49M+</h1>
        <p className="text-[rgba(126,126,126,1)] text-[16px] md:text-[18px] mt-2">sold by customers through TeeSpace</p>
      </div> 

      <div className="flex flex-col w-full lg:w-[200px] h-[144px] mx-auto mb-6 lg:mx-4 lg:mb-0">
        <h1 className="text-[rgba(46,187,119,1)] text-[28px] md:text-[34px]">1086</h1>
        <p className="text-[rgba(126,126,126,1)] text-[16px] md:text-[18px] mt-2">person team across North America and Europe</p>
      </div>
    </main>
  )
}

export default Container9;
