import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
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
      <Link href='/Contact'>Contact</Link>
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
        <div className='index_about overflow-hidden h-[500px]  box-border p-[0_1%] m-[0_auto] w-[1360px]'>
          <div className='left w-[35%] relative bg-[auto_100%] bg-hero-pattern  left-[2rem] after:invisible after:block after:content-[" "] after:clear-both height:0' >
            <div className='about_shade relative h-[500px] w-full left-0 top-0 '>
              <div className='about_con w-[210px] h-[360px] box-border border-[3px] border-solid border-[#ffffff] border-l-0 top-[40px] right-[60px] absolute opacity-1 before:content-[" "] before:w-[3px] before:h-[5`6%] before:bg-[#ffffff] before:absolute before:bottom-0 before:left-0 after:content-[" "] after:w-[3px] after:h-[16%] after:bg-[#ffffff] after:absolute after:top-0 after:left-0 '>
                <div className='title absolute left-[-20px] top-[18%]'>
                  <p className='text-2xl text-[#ffffff]'>About Us</p>
                  <p className='text-sm text-[#ffffff]'>Quality is our middle name</p>
                </div>  
                <div className='more absolute left-[20px] bottom-[10px]'>
                  <Link className='text-[#ffffff] flex flex-row justify-center items-center' href='/nanjing-jinshan-chemical-technology-co-ltd.html'>View More<MdKeyboardArrowRight className='ml-2 w-6 h-6'/></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='right w-[65%] max-w-[900px] pl-[3%] box-border opacity-1 left-0 p-[70px_0]'>
     <p className='zt  before:left-0 before:bottom-0 text-xl text-black relative pb-[15px] before:content-[" "] before:w-[36px] before:h-[3px] before:bg-[#4380db] before:absolute'>Nanjing Jinshan Chemical Technology Co., Ltd</p>
        <div className='con text-sm text-[#666666] leading-6 mt-[40px] overflow-hidden text-justify'>Nanjing Jinshan Chemical Technology Co., Ltd is a professional supplier of paint and construction ingredients. With decades of experience being active in chemical chemical industry, we have formed our own understanding about customers` requirements and global market changes. It further leads to our persistence on high quality materials. Nitrocellulose, Cellulose Ethers, Hydrocarbon Resins are our core products. We have also brought in other related supporting products to enrich our supply range and enable our customers to enjoy package service. In 2018, we set up feed additive department. This marks the official entry of Nanjing Jinshan Chemical Technology Co., Ltd into feed industry. It also makes a good start for the company to take the road of diversified development...</div>
         <div className='visit_factory mt-[20px]'>
          <Link className='text-[ffffff] p-[8px_20px] rounded-lg bg-[#4380db] text-sm inline-block' href='https://www.jinschem.com/bookfactory.html'>Visit my Factory</Link>
         </div>
         
          </div>
        </div>
      </section>
      
      
      
      
      <section className='Index_newPro_wrap w-full mt-[70px]'>
        <div className='index_newPro clearfix w-[1360px] m-[0_auto] '>
          <div className='index_newPro_1 w-[480px] h-[660px] box-border border-[1px] border-solid border-[dbdbdb] p-[0_20px] '>
            <div className='title clearfix leading-8 text-lg text-black font-bold border-[1px] border-solid border-[#d3d3d3] border-box h-[60px]'>
              <p className='f1'> Product Showcase</p>
              <div className='about-btn-box h-[26px] text-center mt-[12px] '></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar
