import React from 'react'
import img1 from "../../../public/img1.svg"

export default function Home() {
  return (
    <>
    <div className='bg-emerald-400'>
      <div className='container mx-auto text-center py-15'>
        <div className='flex justify-center items-center py-5'>
          <img src={img1} alt="icons" className='w-60' />
        </div>
        <div className=' text-white py-5'>
          <h2 className='font-bold font-sans text-4xl'>start Framework</h2>
          <div className='flex justify-center items-center py-3 gap-3'>
            <div className='w-22 h-1.5 bg-white'></div>
            <i class="fa-solid fa-star font-bold mx-5 text-white"></i>
            <div className='w-22 h-1.5 bg-white'></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
    </>
  )
}
