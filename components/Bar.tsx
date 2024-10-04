import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Bar = ({}) => {
  return (
    <>
    <div className='mt-[20px] '>
    <div className='w-[1360px] m-[0_auto] bg-[#f3f7f9] leading-4 box-border pl-[25px] text-sm h-10 '>
        <span className='breadcrumbs flex flex-row gap-2 items-center '>
            <Link href='/'>Home</Link>
            <MdOutlineKeyboardArrowRight />
            <span>{''}Contact US</span>
        </span>
    </div>
    </div>
    </>
  )
}

export default Bar
