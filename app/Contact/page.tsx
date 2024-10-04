import React from 'react'
import Bar from '@/components/Bar';
import Link from 'next/link';
const Contact = () => {
  return (
    <div>
      <Bar/>
      <div className='w-[90%] m-[0_auto] mt-8'>
<div className='heading'>Contact Us</div>
<div className='contact-section flex flex-row gap-10'>
    <div className='contact-left w-[23%] h-[200px] box-border border-[1px] border-solid border-[#dbdbdb] pt-[30px] rounded-sm text-center after:invisible after:h-0 after:clear-both after:text-sm after:content-[" "]'>
        <div className='w-[75px] h-[75px] align-middle text-center flex'>
            <img src='https://bsg-i.nbxc.com/company/74/2743550b6be3cde68951cb665d47f7.png' alt='kevin wang'></img>
        </div>
        <div className='ml-2'>
            <p className='text-lg'>Mr. Kevin Wang</p>
        </div>
    </div>
    <br/>
    <div className='contact-now inline-block mt-0'><button></button></div>
</div>
</div>
    </div>
  )
}

export default Contact
