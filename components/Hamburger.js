import Link from 'next/link'
import React from 'react'
// import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { useState , useEffect } from 'react'



const Hamburger = () => {

  const [Dis, setDis] = useState(true)
  const location = useRouter()

  useEffect(() => {
    if(location.pathname != "/"){
      setDis(false)
    }
  
    return () => {
      setDis(true)
    }
  }, [])
  
  return (

    
    <div className='hamNav'>
        <div name="Nav-Links" className='ham-links'>
            <Link className='hamLink' href="/">Home</Link>
            <Link className={Dis ? "hamLink": "ADN"} href="#projects">Projects</Link>
            <Link  className='hamLink'href="/About">About</Link>
            <Link className='hamLink borNone' href="/Contact">Contact Us</Link>


            </div>
    </div>
  )
}

export default Hamburger