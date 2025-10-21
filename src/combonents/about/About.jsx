import React from 'react'

export default function About() {
  return (
   <>
   <div className='bg-emerald-400'>
    <div className='container mx-auto py-50 '>   
      <div>
         <h1  className='font-sans font-bold text-white text-4xl py-2 flex justify-center items-center '>About Component</h1>
         <div className='text-white'>
         <div className='flex justify-center items-center py-3 gap-3'>
            <div className='w-22 h-1.5 bg-white'></div>
            <i class="fa-solid fa-star font-bold mx-5 text-white"></i>
            <div className='w-22 h-1.5 bg-white'></div>
          </div>
          <div className='flex justify-center items-center gap-7 '>
            <p>Freelancer is a free bootstrap theme created by Route. 
              The download includes <br /> the complete source files including HTML,
              CSS, and JavaScript as well as <br /> optional SASS stylesheets for easy customization.</p>

              <p>Freelancer is a free bootstrap theme created by Route. 
             The download includes <br /> the complete source files including HTML,
              CSS, and JavaScript as well as <br /> optional SASS stylesheets for easy customization.</p>
          </div>
         </div>
      </div>
    </div>
   </div>
   </>
  )
}
