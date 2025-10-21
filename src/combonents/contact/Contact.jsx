import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='bg-white'>
      <div className='container mx-auto'>
      <h2 className='text-center text-blue-950 font-bold font-sens text-3xl py-3 '>conatct section</h2>
        <div className='flex justify-center items-center py- gap-3'>
            <div className='w-22 h-1.5 bg-blue-950'></div>
            <i class="fa-solid fa-star font-bold mx-5 text-blue-950"></i>
            <div className='w-22 h-1.5 bg-blue-950'></div>
          </div>

          <div className='grid grid-cols-1 text-center grid-rows-5 py-15 '>
           <div className='py-5 ' >
           <input type="text" placeholder="userName"
             className=" lg:w-200 md:w-100 border-b border-gray-300 focus:outline-none  "/>
             
           </div>
           <div className='py-5' >
           <input type="number" placeholder="userAge"
             className=" lg:w-200 md:w-100  border-b border-gray-300 focus:outline-none  "/>
             
           </div>

           <div className='py-5' >
           <input type="email" placeholder="userEmail"
             className=" lg:w-200 md:w-100  border-b border-gray-300 focus:outline-none  "/>
             
           </div>

           <div className='py-5' >
           <input type="password" placeholder="userPassword"
             className=" lg:w-200 md:w-100  border-b border-gray-300 focus:outline-none  "/>
             
           </div>
            
          <div className='flex justify-center'>
          <button className='bg-teal-500 hover:bg-teal-600  text-white font-medium  px-4 rounded transition'>
              send message
            </button>
          </div>
           <div>
           
           </div>
          

          </div>
         
      </div>
    </div>
    
    </>
  )
}
