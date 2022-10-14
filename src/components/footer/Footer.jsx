import React from 'react'
import logo from '../../assets/logo_transparent.png'

import { SiTailwindcss, SiReact, SiJavascript, SiHtml5, SiFacebook, SiTwitter, SiGmail   } from 'react-icons/si'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='text-white mt-16 bg-gradient-to-r from-[#0f0f0f] via-[#21212d] to-[#24243e]'>
        <hr/>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 my-6 lg:my-12'>

            <div className='footer-div'>
                <h1 className='footer-heading'>Website Info</h1>
                <img className='w-36 h-36 object-contain' src={logo} alt="" />
                <p className='text-sm italic'>- Website For Weeboo.</p>
            </div>

            <div className='footer-div'>
                <h1 className='footer-heading'>Build With</h1>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <SiTailwindcss/>
                    <span className='text-sm py-1 '>Tailwindcss</span>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <SiReact />
                    <span className='text-sm py-1 '>React</span>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <SiJavascript />
                    <span className='text-sm py-1 '>Javascript</span>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <SiHtml5 />
                    <span className='text-sm py-1 '>HTML5</span>
                </div>
            </div>

            <div className='footer-div text-sm '>
                <h1 className='footer-heading'>Useful Links</h1>
                <div className='p-1 cursor-pointer hover:text-slate-400'><a href="https://9anime.to/" target="_blank">9anime.to</a></div>
                <div className='p-1 cursor-pointer hover:text-slate-400'><a href="https://www.youtube.com/c/MuseAsia" target="_blank">Muse Asia</a></div>
                <div className='p-1 cursor-pointer hover:text-slate-400'><a href="https://www.crunchyroll.com/" target="_blank">Crunchyroll</a></div>
                <h1 className='line-through p-1'>nhentai.net</h1>
                <h1 className='line-through p-1'>hanime.tv</h1>
            </div>

            <div className='footer-div text-sm'>
                <h1 className='footer-heading '>Contact</h1>
                <div className='flex items-center gap-3'>
                    <SiFacebook />
                    <h1 className='py-1'>Min Wei</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <SiTwitter />
                    <h1 className='py-1'>minwei@twitter</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <SiGmail />
                    <h1 className='py-1'>minwei@gmail.com</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <BsFillTelephoneFill />
                    <p className='py-1'>09 - 999999999</p>
                </div>
            </div>

        </div>

        <hr />
        <div className='text-center p-4 italic text-sm'>©2022 CopyRight: Min Wei</div>
    </div>
  )
}

export default Footer