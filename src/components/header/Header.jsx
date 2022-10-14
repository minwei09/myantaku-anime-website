import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo_transparent.png'
import { Link } from 'react-router-dom'

const Header = () => {

    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
      const navBgSetter = ( ) => {
        if(window.scrollY > 100 ) {
          setNavBg(true)
        }
        else if(window.screenY < 100) {
          setNavBg(false)
        }
      }

      window.addEventListener('scroll', navBgSetter)
      return () => {
        window.removeEventListener('scroll', navBgSetter)
      }
    },[])   

    const navLink = [
      {path: '/', display: 'HOME'},
      {path: '/search/anime/:id', display: 'ANIME' },
      {path: '/manga', display: 'MANGA'}
    ]

  return (
    <div className={`z-10 transition-1 fixed top-0 left-0 h-[10vh] flex justify-between items-center gap w-full px-5 xl:px-32 ${navBg ? 'bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]' : "bg-transprent"}`}>
      

      {/* - LOGO  */}
      <Link to='/'>
      <img className='h-full w-16 object-contain cursor-pointer' src={Logo} alt="myantaku" />
      </Link>

      {/* - NAV-LINK CONTAINER */}
      <div className='flex items-center gap-5 sm:gap-8 lg:gap-11'>
        {
          navLink.map( (item,index) => (
            <div key={index} >
            <Link className='transition-1 text-xs sm:text-sm text-white hover:scale-110 hover:text-slate-400' to={item.path}>{item.display}</Link>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Header