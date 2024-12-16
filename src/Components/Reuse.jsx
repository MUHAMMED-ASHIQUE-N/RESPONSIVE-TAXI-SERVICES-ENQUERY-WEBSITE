import React from 'react'
import aboutImage from '../assets/about-img.png'
import { Link } from 'react-router-dom'

function Reuse(props) {
  return (
    <div>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row gap-6 mx-auto w-[80%]'>
          <div className="md:w-1/2">
            <img src={aboutImage} alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className='text-3xl font-bold py-5'>{props.head}</h1>
            <p className='text-zinc-400'>{props.paragraph}</p>
            <div className='py-8'>
            <Link to="contact" >{props.showButton && (<button className="py-3 bg-[#625a52] text-white rounded-lg font-bold w-36 hover:bg-white hover:text-stone-900 hover:border-[#625a52] hover:border-2 ">   Register   </button>)}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reuse