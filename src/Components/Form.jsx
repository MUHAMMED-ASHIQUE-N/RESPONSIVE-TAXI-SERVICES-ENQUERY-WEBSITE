import React, { useState } from 'react'
import contactImg from "../assets/contact-img.png";


function Form() {

  
  
  return (
    <div>
         <div className='w-full flex flex-col gap-4 md:flex-row'>
          <div className="mx-auto w-[90%] md:w-1/2 flex flex-col justify-center gap-2">
            <div className=' md:ml-20 lg:ml-40 mt-16'>
              <h1 className='text-3xl font-bold'>Get In Touch</h1>
              <div className='flex flex-col'>
                <input type="text" placeholder='Name' className='border border-slate-900 w-[90%]  px-4  py-3 my-4' />
                <input type="email" placeholder='Your Email' className='border border-slate-900  w-[90%] px-4 py-3 my-4' />
                <input type="text" placeholder='Your Phone' className='border border-slate-900  w-[90%] px-4 py-3 my-4' />
                <input type="text" placeholder='Message' className='border border-slate-900 w-[90%]  px-4 py-12 my-4' />
                <div>
                  <button className='border border-slate-900 bg-[#625a52] text-white font-bold px-16 py-4'>SEND</button>
                </div>
              </div>
            </div>
          </div>
          <div className=' mt-10 md:w-1/2 flex items-center justify-center' ><img src={contactImg} alt="" className='m-auto w-[80%]'/></div>
        </div>

       

    </div>
  )
}

export default Form