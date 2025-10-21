import React from 'react'

export default function Footerr() {
  return (
    <>
    <div className='bg-cyan-900'>
      <div className='container mx-auto text-center  py-15'>
        <div className='flex  justify-around gap-5 text-white'>
          <div className='lg:w-1/3 md:1/2' >
           <h2 className='font-bold text-xl py-2'>LOCATION</h2>
           <h4>2215 John Daniel Drive</h4>
           <p className='py-3'>Clark, MO 65243</p>
           </div>
          <div className='lg:w-1/3 md:1/2' > 
          
          <h2 className='font-bold text-xl py-2'>AROUND THE WEB</h2>
          <div className='flex gap-3 justify-center items-center py-2 text-white text-2xl text-center'>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-solid fa-globe"></i>
          </div>
           </div>
          <div className='lg:w-1/3 md:1/2' >
           <h2 className='py-2 text-xl font-bold'>ABOUT FREELANCER </h2>
           <div className='flex justify-center items-center'>
           <p className='text-center '>Freelance is a free to use, licensed Bootstrap theme
            <span>  <br /> created   by Route</span></p>
            </div> 
            </div>
        
        </div>
      </div>

    </div>

    <div className='bg-cyan-950'>
      <div className='flex justify-center text-white items-center py-4'>
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>

    </>
  )
}
