
import React, { useState } from "react";

export default function Portfolio() {
  const [list, setfirst] = useState([
    {id:1 , images:"/house.png"},
    {id:2 , images:"/cake.png"},
    {id:3 , images:"/sirk.png"},
    {id:4 , images:"/house.png"},
    {id:5 , images:"/cake.png"},
    {id:6 , images:"/sirk.png"},
  ])
  return (
    <>
   <div className='bg-white'>
      <div className='container mx-auto'>
        <h2 className='text-center text-blue-950 font-bold font-sens text-3xl py-3 '>Portfolio Component</h2>
        <div className='flex justify-center items-center py- gap-3'>
            <div className='w-22 h-1.5 bg-blue-950'></div>
            <i class="fa-solid fa-star font-bold mx-5 text-blue-950"></i>
            <div className='w-22 h-1.5 bg-blue-950'></div>
          </div>

          <div className="">
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-2 md:grid-rows-3  text-center">
              {list.map((cards)=>(
                <div key={cards.id} className=" group  flex items-center justify-center py-10 ">
                 <div className=" w-60 flex justify-center items-center relative ">
                 <img src={cards.images} alt="portgolio" width={200} className="group-hover:" />
                 <div className="absolute  rounded-xl top-0 end-0 start-0 bottom-0 bg-emerald-400 duration-200 group-hover:opacity-70  opacity-0 " >
                  <div className="flex w-full h-full  justify-center items-center ">
                    <h2 className="font-bold  font-sans text-6xl text-center opacity-100  text-white">+</h2>
                  </div>
                 </div>
                 </div>
                </div>
              )

              )}
            </div>
            
           
          </div>
      </div>
   </div>
    
    </>
  )
}
