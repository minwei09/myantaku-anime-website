import React, { useEffect, useState } from 'react'
import instance from '../api/apiConfig'
import requests from '../api/requests'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const OngoingAnime = () => {

    const [anime, setAnime] = useState([])

    const stringLimit = (string, num) => {
        return string.length > num ? string.substring(0, num -1 ) + '...' : string
        
    }

    const getAnime = async() => {
        const check = localStorage.getItem('ongoingAnime')

        if(check) {
            setAnime(JSON.parse(check))
        }
        else {
            const res = await instance.get(requests.getOngoingAnime)
            const data = res.data.data
            localStorage.setItem('ongoingAnime', JSON.stringify(data))
            setAnime(data)
        }
    }

    useEffect( () => {
        getAnime()
    },[])


  return (
    <div className='top_section mx-2'>
        <h1 className='home-title mb-5'>Ongoing Anime</h1>
        <Swiper
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
            300: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            498: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            1280: {
              slidesPerView: 8,
              spaceBetween: 30,
            }}}
        >
        {
            anime.map( item => {
                return(
                    <SwiperSlide key={item?.mal_id}>
                    <Link to={`/anime/${item?.mal_id}`}>
                    <div className=' w-full h-[315px] transition-1 hover:scale-[.98] cursor-pointer transition-all ' >

                        {/* - IMG CONTAINER */}
                        <div className='h-[250px]'>
                        <img className='home_img' src={item?.images?.jpg?.large_image_url} alt={item?.title} loading='lazy'/>
                        </div>

                        {/* - RATING */}
                        <p className='py-1 home-score'>⭐ - {item?.score}</p>

                        {/* - TITLE */}
                        <p className='home-title-2'>{stringLimit(item?.title, 30)}</p>
                    </div>
                    </Link>
                    </SwiperSlide>
                )
            })
        }
        </Swiper>
    </div>
  )
}

export default OngoingAnime