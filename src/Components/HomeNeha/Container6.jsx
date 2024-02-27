import React from 'react';
import Image from "next/image";
import banner1 from "../../../public/assets/Contain6/banner1.svg";
import banner2 from "../../../public/assets/Contain6/banner2.svg";
import banner3 from "../../../public/assets/Contain6/banner3.svg";

const Container6 = () => {
  return (
    <main className="w-full mt-14 px-2 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
            <div className="text-center py-2 sm:py-14">
                <h1 className="text-xl sm:text-3xl lg:text-[35px] font-bold">All the features you need</h1>
                <p className="text-[rgba(126,126,126,1)] text-sm sm:text-base lg:text-[15px] mt-2">You’ve got the ideas, we’ve got the tools</p>
            </div>
            <div className="flex flex-col md:flex-row sm:flex-row justify-center items-center gap-4 -mt-20 pt-4 sm:pt-14">
                <div className="relative w-[370px] h-[500px] space-x-3">
                    <Image src={banner1} alt="Feature 1" layout="responsive" width={540} height={650} objectFit="contain" />
                    <div className="absolute top-28 left-0 w-full h-full flex flex-col justify-center items-start p-2">
                        <h1 className="text-black text-lg sm:text-xl md:text-[24px] font-bold mb-2">Premium Quality Shirts</h1>
                        <p className="text-[rgba(126,126,126,1)] text-sm sm:text-lg md:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="relative w-[370px] h-[500px]">
                    <Image src={banner2} alt="Feature 1" layout="responsive" width={540} height={650} objectFit="contain" />
                    <div className="absolute top-28 left-0 w-full h-full flex flex-col justify-center items-start p-2">
                        <h1 className="text-black text-lg sm:text-xl md:text-[24px] font-bold mb-2">Premium Quality Shirts</h1>
                        <p className="text-[rgba(126,126,126,1)] text-sm sm:text-lg md:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="relative w-[370px] h-[500px]">
                    <Image src={banner3} alt="Feature 1" layout="responsive" width={540} height={650} objectFit="contain" />
                    <div className="absolute top-28 left-0 w-full h-full flex flex-col justify-center items-start p-2">
                        <h1 className="text-black text-lg sm:text-xl md:text-[24px] font-bold mb-2">Premium Quality Shirts</h1>
                        <p className="text-[rgba(126,126,126,1)] text-sm sm:text-lg md:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>


            </div>
        </div>
    </main>
  );
}

export default Container6;

