import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Hamburger from "@/components/Hamburger";



const Navbar = () => {
  const [Ham, setHam] = useState(false)
  return (
    <>
    
    <div className="width-100 ADF ADF-JC ADF-AC  AZI-1 APA">
        <div name="navbar" className='Rnav width-70  AZI-1 nav  ADF ADF-JSB ADF-AC'>
        <div name="Logo" className="     ">
                <div className="maLo"></div>
            </div>
            <div name="Nav-Links" className='Nav-Links'>
            <Link className='navLink' href="/">Home</Link>
            <Link className='navLink' href="#projects">Projects</Link>
            <Link  className='navLink'href="/About">About</Link>
            <Link className='navLink' href="/Contact">Contact Us</Link>


            </div>
            <div className='ham' onClick={() => 
              Ham? setHam(false) : setHam(true)
              }>
              <div className={Ham? "barTR1 bar": "bar"}></div>
              <div className={Ham? "AVH": "bar"}></div>
              <div className={Ham? "barTR2 bar": "bar"}></div>
            </div>


    </div>
    
    </div>

    {Ham && (
      <Hamburger/>
    )}
    </>
  )
}

export default Navbar