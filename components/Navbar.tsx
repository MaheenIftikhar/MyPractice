import Link from 'next/link';
import React from 'react';

import {Divider} from "@nextui-org/react";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <div>
      <div className='w-full bg-[rgba(0,0,0,.85)] h-20 flex gap-[8rem] items-center'>
        <div className='flex flex-row bg-[#4380db] w-[16rem] h-[4rem] justify-center items-center text-white gap-4 ml-8'>  <RxHamburgerMenu className='w-6 h-6' /> <h2 className='text-lg '>All Products</h2></div>
     <div className='flex flex-row gap-8 text-white'>
      <Link href='/'>Home</Link>
      <Link href='/'>About Us</Link>
      <Link href='/'>News</Link>
      <Link href='/'>Send Inquiry </Link>
      <Link href='/'>Contact</Link>
     </div>
      </div>
      <div className='Image'><img src='//bsg-i.nbxc.com/upload/1341/828/6ba22195caf664902f7d1b2e2e9f7935.jpg@95Q.webp' alt='HomePage'></img></div>
      <div className='flex flex-row justify-between items-center  h-[5rem] '>
        <div className=''>
          <div className='flex flex-col'>
            <h1>Rigorous Testing </h1>
            <p>High Qulaity Products </p>
          </div>
        </div>
     
        <Divider orientation="vertical" className='w-[1px] h-[4rem] bg-gray-200'/>
        <div className=''>
          <div className='flex flex-col'> 
            <h1>Online Support 24/7</h1>
            <p>Support online 24 hours </p>
          </div>
        </div>
        <Divider orientation="vertical" className='w-[1px] h-[4rem] bg-gray-200'/>
        <div className=''>
          <div className='flex flex-col'>
            <h1>Just In Time Delivery</h1>
            <p>Punctual delivery </p>
          </div>
        </div>
        <Divider orientation="vertical" className='w-[1px] h-[4rem] bg-gray-200'/>
        <div className=''>
          <div className='flex flex-col'>
            <h1>Quality Qualified </h1>
            <p>Good quality is safer</p>
          </div>
        </div>
      </div>
      <section className=' bg-[#eff5f5] bg-[-300px_center] bg-no-repeat'>
        <div className='overflow-hidden h-[500px] w-full box-border p-[0_1%] m-[0_auto]'>
          <div className='left w-[380px] relative bg-auto bg-hero-pattern' ></div>
        </div>
      </section>
      <section className='Product-Showcase w-full'></section>
    </div>
  )
}

export default Navbar
