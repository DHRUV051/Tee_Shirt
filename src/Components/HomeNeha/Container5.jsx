import React from 'react';
import Image from "next/image";
import banner from "../../../public/assets/Contain5/banner.svg";

const Container5 = () => {
  return (
    <main>
        <div className=" w-full max-w-[1350px] h-auto sm:h-[150px] mt-20 px-4 sm:px-2">
            <div className="flex flex-col justify-center text-center items-center pt-4 sm:pt-14">
                <h1 className="text-xl sm:text-[35px] font-bold text-center">T-shirt printing made easy.</h1>
                <p className="text-[rgba(126,126,126,1)] text-sm sm:text-[15px] mt-2">Let us show you how your product come to life.</p>
            </div>
        </div>
        <div className="bg-[rgba(245,245,245,1)] w-full max-w-[1350px] h-auto sm:h-[500px] flex justify-end items-end px-4 py-4 sm:px-0 sm:py-0">
    
    <div className="w-full h-full max-w-[350px] sm:max-w-[700px] max-h-[250px] sm:max-h-[500px]">
        <Image src={banner} alt="hoodie" layout="responsive" width={700} height={500} objectFit="contain" />
    </div>
</div>

    </main>
  );
};

export default Container5;
