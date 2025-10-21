import React from 'react'
import { Link } from "react-router-dom";
import Home from '../Home/Home';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

export default function Navbar() {
  return (
    <>
  <div className='bg-cyan-900'>
    <div className='container mx-auto py-10 '>
      <div className='flex justify-around gap-5 '>
      <div className=''>
        <Link className='text-white text-3xl font-bold font-sans'>Start Framework</Link>
        </div>
        <div className=' '>
        <ul className='flex justify-center gap-10 py-1.5'>
          <li>
            <Link to={"About"} className='text-white font-sans text-xl font-bold'>About</Link>
          </li>
          <li>
            <Link to={"Portfolio"} className='text-white font-sans text-xl font-bold'>portfolio</Link>
          </li>
          <li>
            <Link to={"Contact"} className='text-white font-sans text-xl font-bold'>contact</Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
