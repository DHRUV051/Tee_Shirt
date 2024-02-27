import React from 'react';
import box from "../../../public/assets/Contain2/box.svg";
import tshirt from "../../../public/assets/Contain2/tshirt.svg";
import shipping from "../../../public/assets/Contain2/shipping.svg";
import Image from "next/image";

const Container2 = () => {
  return (
    <main>
    <div className="relative mx-auto w-full pt-20 pb-[77px] px-28  top-[10px] max-w-[1440px]">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-3 md:pl-3 max-w-[1440px] ">

    <div className="flex flex-col md:flex-row items-start w-full pt-3 max-w-[1440px]">
    <div className="flex-shrink-0">
        <Image src={box} alt="box" width={60} height={106}/> 
    </div>
    <div className="flex-grow ml-0 md:ml-4">
        <span className="text-2xl font-semibold">Top quality</span>
        <p className="text-base text-gray-500 mt-2 md:mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec fringilla magna.</p>
    </div>
</div>
<div className="flex flex-col md:flex-row items-start w-full pt-3 max-w-[1440px]">
    <div className="flex-shrink-0">
        <Image src={tshirt} alt="tshirt" width={60} height={106}/> 
    </div>
    <div className="flex-grow ml-0 md:ml-4">
        <span className="text-2xl font-semibold">Mix and match</span>
        <p className="text-base text-gray-500 mt-2 md:mt-0">Lorem ipsum det, adipiscing elit
duis nec fringi consec tetur.</p>
    </div>
</div>

<div className="flex flex-col md:flex-row items-start w-full pt-3 max-w-[1440px]">
    <div className="flex-shrink-0">
        <Image src={shipping} alt="shipping" width={60} height={106}/> 
    </div>
    <div className="flex-grow ml-0 md:ml-4">
        <span className="text-2xl font-semibold">Shipping worldwide</span>
        <p className="text-base text-gray-500 mt-2 md:mt-0">Lorem ipsum det, duis nec fringi
consec tetur adipiscing elit.</p>
    </div>
</div>
</div>
</div>
    </main>
  );
}
export default Container2;
