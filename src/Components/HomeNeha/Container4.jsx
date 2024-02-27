import React from 'react'
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import product from "../../../public/assets/Contain4/product.svg";
import rating from "../../../public/assets/Contain4/rating.svg";

const Container4 = () => {
  return (
    <main>
    <div className="flex flex-col text-center items-center mt-14">
  <h1 className="text-[40px] font-bold">T-shirt Printing for Everyone</h1>
  <p className="text-[rgba(126,126,126,1)] text-[20px]">What’s more, we do it right!</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-8 px-4 md:px-28 gap-4 gap-x-10">
  <div className="w-full max-w-[281px] h-auto mx-auto"> 
    <Image src={product} alt="hoodie" width={231} height={181} className="rounded-xl object-cover"/>
    <p className="text-[rgba(173,173,173,1)] text-[12px] mt-1">Snack</p>
    <span className="text-[rgba(0,0,0,1)] text-[18px] font-bold block" style={{ width: '130.44px', height: '39px' }}> Zone Sweatshirt</span>
    <div className="flex flex-row items-center">
      <Image src={rating} width={54} height={12} alt="rating" className="mt-2"/>
      <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">(4.0)</p>
    </div>
    <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">By <span className="text-[rgba(59,183,126,1)] mt-2">NestFood</span></p>
    <div className="flex flex-row items-center">
      <p className="text-[rgba(59,183,126,1)] font-bold text-[18px] mt-3">$28.85 <span className="text-[rgba(173,173,173,1)] text-[14px] ml-2 line-through" >$32.8</span></p>
      <button className="text-[rgba(59,183,126,1)] bg-[rgba(222,249,236,1)] w-[68px] h-[26px] ml-3 mt-2 text-[14px] font-bold">ADD</button>
    </div>
  </div>

  <div className="w-full max-w-[281px] h-auto mx-auto"> 
    <Image src={product} alt="hoodie" width={231} height={181} className="rounded-xl object-cover"/>
    <p className="text-[rgba(173,173,173,1)] text-[12px] mt-1">Snack</p>
    <span className="text-[rgba(0,0,0,1)] text-[18px] font-bold block" style={{ width: '130.44px', height: '39px' }}> Zone Sweatshirt</span>
    <div className="flex flex-row items-center">
      <Image src={rating} width={54} height={12} alt="rating" className="mt-2"/>
      <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">(4.0)</p>
    </div>
    <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">By <span className="text-[rgba(59,183,126,1)] mt-2">NestFood</span></p>
    <div className="flex flex-row items-center">
      <p className="text-[rgba(59,183,126,1)] font-bold text-[18px] mt-3">$28.85 <span className="text-[rgba(173,173,173,1)] text-[14px] ml-2 line-through" >$32.8</span></p>
      <button className="text-[rgba(59,183,126,1)] bg-[rgba(222,249,236,1)] w-[68px] h-[26px] ml-3 mt-2 text-[14px] font-bold">ADD</button>
    </div>
  </div>

  <div className="w-full max-w-[281px] h-auto mx-auto"> 
    <Image src={product} alt="hoodie" width={231} height={181} className="rounded-xl object-cover"/>
    <p className="text-[rgba(173,173,173,1)] text-[12px] mt-1">Snack</p>
    <span className="text-[rgba(0,0,0,1)] text-[18px] font-bold block" style={{ width: '130.44px', height: '39px' }}> Zone Sweatshirt</span>
    <div className="flex flex-row items-center">
      <Image src={rating} width={54} height={12} alt="rating" className="mt-2"/>
      <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">(4.0)</p>
    </div>
    <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">By <span className="text-[rgba(59,183,126,1)] mt-2">NestFood</span></p>
    <div className="flex flex-row items-center">
      <p className="text-[rgba(59,183,126,1)] font-bold text-[18px] mt-3">$28.85 <span className="text-[rgba(173,173,173,1)] text-[14px] ml-2 line-through" >$32.8</span></p>
      <button className="text-[rgba(59,183,126,1)] bg-[rgba(222,249,236,1)] w-[68px] h-[26px] ml-3 mt-2 text-[14px] font-bold">ADD</button>
    </div>
  </div>

  <div className="w-full max-w-[281px] h-auto mx-auto"> 
    <Image src={product} alt="hoodie" width={231} height={181} className="rounded-xl object-cover"/>
    <p className="text-[rgba(173,173,173,1)] text-[12px] mt-1">Snack</p>
    <span className="text-[rgba(0,0,0,1)] text-[18px] font-bold block" style={{ width: '130.44px', height: '39px' }}> Zone Sweatshirt</span>
    <div className="flex flex-row items-center">
      <Image src={rating} width={54} height={12} alt="rating" className="mt-2"/>
      <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">(4.0)</p>
    </div>
    <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">By <span className="text-[rgba(59,183,126,1)] mt-2">NestFood</span></p>
    <div className="flex flex-row items-center">
      <p className="text-[rgba(59,183,126,1)] font-bold text-[18px] mt-3">$28.85 <span className="text-[rgba(173,173,173,1)] text-[14px] ml-2 line-through" >$32.8</span></p>
      <button className="text-[rgba(59,183,126,1)] bg-[rgba(222,249,236,1)] w-[68px] h-[26px] ml-3 mt-2 text-[14px] font-bold">ADD</button>
    </div>
  </div>

  <div className="w-full max-w-[281px] h-auto mx-auto"> 
    <Image src={product} alt="hoodie" width={231} height={181} className="rounded-xl object-cover"/>
    <p className="text-[rgba(173,173,173,1)] text-[12px] mt-1">Snack</p>
    <span className="text-[rgba(0,0,0,1)] text-[18px] font-bold block" style={{ width: '130.44px', height: '39px' }}> Zone Sweatshirt</span>
    <div className="flex flex-row items-center">
      <Image src={rating} width={54} height={12} alt="rating" className="mt-2"/>
      <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">(4.0)</p>
    </div>
    <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">By <span className="text-[rgba(59,183,126,1)] mt-2">NestFood</span></p>
    <div className="flex flex-row items-center">
      <p className="text-[rgba(59,183,126,1)] font-bold text-[18px] mt-3">$28.85 <span className="text-[rgba(173,173,173,1)] text-[14px] ml-2 line-through" >$32.8</span></p>
      <button className="text-[rgba(59,183,126,1)] bg-[rgba(222,249,236,1)] w-[68px] h-[26px] ml-3 mt-2 text-[14px] font-bold">ADD</button>
    </div>
  </div>

  <div className="w-full max-w-[281px] h-auto mx-auto"> 
    <Image src={product} alt="hoodie" width={231} height={181} className="rounded-xl object-cover"/>
    <p className="text-[rgba(173,173,173,1)] text-[12px] mt-1">Snack</p>
    <span className="text-[rgba(0,0,0,1)] text-[18px] font-bold block" style={{ width: '130.44px', height: '39px' }}> Zone Sweatshirt</span>
    <div className="flex flex-row items-center">
      <Image src={rating} width={54} height={12} alt="rating" className="mt-2"/>
      <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">(4.0)</p>
    </div>
    <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">By <span className="text-[rgba(59,183,126,1)] mt-2">NestFood</span></p>
    <div className="flex flex-row items-center">
      <p className="text-[rgba(59,183,126,1)] font-bold text-[18px] mt-3">$28.85 <span className="text-[rgba(173,173,173,1)] text-[14px] ml-2 line-through" >$32.8</span></p>
      <button className="text-[rgba(59,183,126,1)] bg-[rgba(222,249,236,1)] w-[68px] h-[26px] ml-3 mt-2 text-[14px] font-bold">ADD</button>
    </div>
  </div>

  <div className="w-full max-w-[281px] h-auto mx-auto"> 
    <Image src={product} alt="hoodie" width={231} height={181} className="rounded-xl object-cover"/>
    <p className="text-[rgba(173,173,173,1)] text-[12px] mt-1">Snack</p>
    <span className="text-[rgba(0,0,0,1)] text-[18px] font-bold block" style={{ width: '130.44px', height: '39px' }}> Zone Sweatshirt</span>
    <div className="flex flex-row items-center">
      <Image src={rating} width={54} height={12} alt="rating" className="mt-2"/>
      <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">(4.0)</p>
    </div>
    <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">By <span className="text-[rgba(59,183,126,1)] mt-2">NestFood</span></p>
    <div className="flex flex-row items-center">
      <p className="text-[rgba(59,183,126,1)] font-bold text-[18px] mt-3">$28.85 <span className="text-[rgba(173,173,173,1)] text-[14px] ml-2 line-through" >$32.8</span></p>
      <button className="text-[rgba(59,183,126,1)] bg-[rgba(222,249,236,1)] w-[68px] h-[26px] ml-3 mt-2 text-[14px] font-bold">ADD</button>
    </div>
  </div>

  <div className="w-full max-w-[281px] h-auto mx-auto"> 
    <Image src={product} alt="hoodie" width={231} height={181} className="rounded-xl object-cover"/>
    <p className="text-[rgba(173,173,173,1)] text-[12px] mt-1">Snack</p>
    <span className="text-[rgba(0,0,0,1)] text-[18px] font-bold block" style={{ width: '130.44px', height: '39px' }}> Zone Sweatshirt</span>
    <div className="flex flex-row items-center">
      <Image src={rating} width={54} height={12} alt="rating" className="mt-2"/>
      <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">(4.0)</p>
    </div>
    <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">By <span className="text-[rgba(59,183,126,1)] mt-2">NestFood</span></p>
    <div className="flex flex-row items-center">
      <p className="text-[rgba(59,183,126,1)] font-bold text-[18px] mt-3">$28.85 <span className="text-[rgba(173,173,173,1)] text-[14px] ml-2 line-through" >$32.8</span></p>
      <button className="text-[rgba(59,183,126,1)] bg-[rgba(222,249,236,1)] w-[68px] h-[26px] ml-3 mt-2 text-[14px] font-bold">ADD</button>
    </div>
  </div>

  <div className="w-full max-w-[281px] h-auto mx-auto"> 
    <Image src={product} alt="hoodie" width={231} height={181} className="rounded-xl object-cover"/>
    <p className="text-[rgba(173,173,173,1)] text-[12px] mt-1">Snack</p>
    <span className="text-[rgba(0,0,0,1)] text-[18px] font-bold block" style={{ width: '130.44px', height: '39px' }}> Zone Sweatshirt</span>
    <div className="flex flex-row items-center">
      <Image src={rating} width={54} height={12} alt="rating" className="mt-2"/>
      <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">(4.0)</p>
    </div>
    <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">By <span className="text-[rgba(59,183,126,1)] mt-2">NestFood</span></p>
    <div className="flex flex-row items-center">
      <p className="text-[rgba(59,183,126,1)] font-bold text-[18px] mt-3">$28.85 <span className="text-[rgba(173,173,173,1)] text-[14px] ml-2 line-through" >$32.8</span></p>
      <button className="text-[rgba(59,183,126,1)] bg-[rgba(222,249,236,1)] w-[68px] h-[26px] ml-3 mt-2 text-[14px] font-bold">ADD</button>
    </div>
  </div>

  <div className="w-full max-w-[281px] h-auto mx-auto"> 
    <Image src={product} alt="hoodie" width={231} height={181} className="rounded-xl object-cover"/>
    <p className="text-[rgba(173,173,173,1)] text-[12px] mt-1">Snack</p>
    <span className="text-[rgba(0,0,0,1)] text-[18px] font-bold block" style={{ width: '130.44px', height: '39px' }}> Zone Sweatshirt</span>
    <div className="flex flex-row items-center">
      <Image src={rating} width={54} height={12} alt="rating" className="mt-2"/>
      <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">(4.0)</p>
    </div>
    <p className="text-[rgba(173,173,173,1)] text-[14px] mt-2">By <span className="text-[rgba(59,183,126,1)] mt-2">NestFood</span></p>
    <div className="flex flex-row items-center">
      <p className="text-[rgba(59,183,126,1)] font-bold text-[18px] mt-3">$28.85 <span className="text-[rgba(173,173,173,1)] text-[14px] ml-2 line-through" >$32.8</span></p>
      <button className="text-[rgba(59,183,126,1)] bg-[rgba(222,249,236,1)] w-[68px] h-[26px] ml-3 mt-2 text-[14px] font-bold">ADD</button>
    </div>
  </div>

    

     
     
      </div>
    </main>
  )
}

export default Container4
