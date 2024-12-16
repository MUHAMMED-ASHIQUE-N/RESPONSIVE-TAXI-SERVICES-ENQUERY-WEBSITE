import React from 'react'
import banasuraImg from '../assets/w1.png'
import pookodeImg from '../assets/w2.png'
import edakkalImg from '../assets/w3.png'

function Tourist(props) {
  return (
    <div>
        <div className='w-full '>
        <div className='py-14'>
          <h1 className='text-center text-4xl font-bold '>{props.head}</h1>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap mx-auto w-[90%] items-center justify-center'>
          <div className='flex flex-col gap-2 md:w-1/3 text-center'>
            <img src={banasuraImg} alt="" className='mx-auto w-[120px]' />
            <h1 className='text-xl font-bold'>{props.subHeadOne}</h1>
            <p>{props.paragraphOne}</p>
            <p className='py-2 text-red-900'>{props.showLink && (<a href="#" className='py-4'>Read More </a>)}</p>

          </div>
          <div className='flex flex-col gap-2 md:w-1/3 text-center'>
            <img src={pookodeImg} alt="" className='mx-auto w-[120px]' />
            <h1 className='text-xl font-bold'>{props.subHeadTwo}</h1>
            <p>{props.paragraphTwo}</p>
            <p className='py-2 text-red-900'>{props.showLink && (<a href="#" className='py-4'>Read More </a>)}</p>

          </div>
          <div className='flex flex-col gap-2 md:w-1/3 text-center'>
            <img src={edakkalImg} alt="" className='mx-auto w-[120px]' />
            <h1 className='text-xl font-bold'>{props.subHeadThree}</h1>
            <p>{props.paragraphThree}</p>
            <p className='py-2 text-red-900'>{props.showLink && (<a href="#" className='py-4'>Read More </a>)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tourist