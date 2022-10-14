import React, { useEffect, useState } from 'react'
import instance from '../api/apiConfig'
import requests from '../api/requests'
import { Link  } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const HeroSlider = () => {

    const [heroAnime, setHeroAnime ] = useState([])

    const stringLimit = (string, num) => {
        return string.length > num ? string.substring(0, num -1 ) + '...' : string
        
    }

    const getHeroAnime = async() => {

        const res = await instance.get(requests.getTopAiringAnime)
        const data = res.data.data
        setHeroAnime(data)
    }

    useEffect( () => {
        getHeroAnime()
    }, [])

    const sliceAnime = heroAnime.slice(0, 7)

  return (
    <div className=''>

        <Swiper
        autoplay={{delay: 3000}}
        pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
        {
            sliceAnime.map( item => {
                return(
                    <SwiperSlide  key={item?.mal_id}>
                    <div className="relative max-w-[90%] md:max-w-full">
                        <img src={item?.trailer?.images?.maximum_image_url} alt="" />
                    
                    <div className='bg-black opacity-20 md:opacity-40 absolute top-0 left-0 w-full min-h-full pointer-events-none'></div>

                    {/* - CONTAINER */}
                    <div className="z-10 md:absolute top-0 left-0 w-full min-h-full md:flex items-center text-left">

                    {/* - TEXT CONTENT */}
                    <div className='md:w-[50%] p-12 flex flex-col gap-y-6'>
                        <h1 className='text-3xl font-bold text-white lg:text-5xl'>{item?.title}</h1>
                        <p className='text-xs leading-5 tracking-wide text-white lg:text-base'>{stringLimit(item?.synopsis, 200)}</p>

                        <Link to={`/anime/${item?.mal_id}`}>
                        <button className='btn'>WATCH NOW</button>
                        </Link>
                    </div>

                    {/* - IMAGE */}
                    <div className=' md:w-[50%] '>
                        <img className='max-w-[60%] lg:max-w-[50%] mx-auto rounded-lg shadow-2xl' src={item?.images?.jpg?.large_image_url} alt="" />
                    </div>

                    </div>
                    </div>

                    
                    </SwiperSlide>

                )
            })
        }
        </Swiper>

        
    </div>
  )
}

export default HeroSlider