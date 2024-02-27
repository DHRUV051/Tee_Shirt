import React from 'react';
import Image from "next/image";
import hoodie from "../../../public/assets/Contain3/hoodie.svg";
import tanktop from "../../../public/assets/Contain3/tanktop.svg";
import tshirtc3 from "../../../public/assets/Contain3/tshirtc3.svg";
import sweater from "../../../public/assets/Contain3/sweater.svg";
import designer from "../../../public/assets/Contain3/designer.svg";

const Container3 = () => {

  return (
    <div className="flex flex-col md:flex-row justify-center items-center max-w-[1440px] pt-2 px-4 md:px-28 gap-1 ">
      <div className="relative flex flex-col justify-center items-center gap-3">
        <Image src={hoodie} alt="hoodie" width={330} height={330} />
        <button
          className="absolute bg-white text-black rounded-lg justify-center items-center -ml-2 -mt-20 pr-2"
          style={{
            width: '162.44px',
            height: '47px',
            borderRadius: '12px'
          }}>
          Shop hoodie
        </button>
        <div className="relative">
          <Image src={tanktop} alt="tanktop" width={330} height={330} />
          <button
            className="absolute bg-white text-black rounded-lg justify-center items-center ml-12 pl-2 -mt-16 pr-2"
            style={{
            width: '162.44px',
            height: '47px',
            borderRadius: '12px'
          }}>
            Shop tanktop
          </button>
        </div>
      </div>

      <div className="relative flex flex-row justify-center items-center pt-2 px-4 md:px-5 py-2 md:py-2 gap-1">
        <Image src={tshirtc3} alt="tshirt" width={650} height={650} />
        <button
          className="absolute bg-white text-black border rounded-lg justify-center items-center ml-4 pl-2 mt-72 pr-2"
          style={{
            width: '162.44px',
            height: '47px',
            borderRadius: '12px'
          }}>
          Shop tshirt
        </button>
      </div>

      <div className="relative flex flex-col justify-center items-center gap-3">
        <div className="relative">
          <Image src={sweater} alt="sweater" width={330} height={330} />
          <button
            className="absolute bg-white text-black rounded-lg justify-center items-center ml-10 pl-2 -mt-16 pr-2"
            style={{
            width: '162.44px',
            height: '47px',
            borderRadius: '12px'
          }}>
            Shop Sweater
          </button>
        </div>
        <div className="relative">
          <Image src={designer} alt="designer" width={330} height={330} />
          <button
            className="absolute bg-white text-black rounded-lg justify-center items-center ml-10 pl-2 -mt-16 pr-2"
            style={{
            width: '162.44px',
            height: '47px',
            borderRadius: '12px'
          }}>
            Shop Designer
          </button>
        </div>
      </div>
    </div>
  );
};
export default Container3;
