import React, { useState } from 'react'
import Link from 'next/link'
import Hamburger from "@/components/Hamburger";
// import { useState } from 'react';


const MainNav = () => {
  const [Ham, setHam] = useState(false)
  return (
<>
<div className="width-100 ADF ADF-JC ADF-AC MainNav ">
        <div name="navbar" className=' width-70     ADF ADF-JSB ADF-AC'>
        <div name="Logo" className="     ">
                <div className="maLo"></div>
            </div>
            <div name="Nav-Links" className='MainNav-Links'>
            <Link className='MainnavLink' href="/">Home</Link>
            <Link  className='MainnavLink'href="/About">About</Link>
            <Link className='MainnavLink' href="/Contact">Contact Us</Link>


            </div>
            <div className='ham' onClick={() => 
              Ham? setHam(false) : setHam(true)
              }>
              <div className={Ham? "barTR1 MNbar": "MNbar"}></div>
              <div className={Ham? "AVH": "MNbar"}></div>
              <div className={Ham? "barTR2 MNbar": "MNbar"}></div>
            </div>

    </div>
    </div>

{Ham && (
  <Hamburger/>
)}
</>
  )
}

export default MainNav