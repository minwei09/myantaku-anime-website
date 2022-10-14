import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../api/apiConfig'
import requests from '../api/requests'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Detail = () => {

  const param = useParams()
  const id = param.id
  const [anime, setAnime] = useState([])
  const [episode, setEpisode] = useState([])
  const [statistics, setStatistics] = useState([])
  const [character, setCharacter ] = useState([])
  
  const getAnimeById = async(id) => {
    const res = await instance.get(requests.getAnimeById(id))
    const data = await res.data.data
    setAnime(data)
  }

  const getAnimeEpisode = async( id ) => {
    const res = await instance.get(requests.getAnimeEpisode(id))
    const data = await res.data.data
    setEpisode(data)
  }

  const getAnimeStatistics = async( id ) => {
    const res = await instance.get(requests.getAnimeStatistics(id))
    const data = await res.data.data
    setStatistics(data)
  }

  const getAnimeCharacters = async(id) => {
    const res = await instance.get(requests.getAnimeCharacter(id))
    const data = await res.data.data
    setCharacter(data)
  }

  useEffect(() => {
    getAnimeById(id)
    getAnimeEpisode(id)
    getAnimeStatistics(id)
    getAnimeCharacters(id)
  },[id])

  console.log(character)
  
  return (
    <div className=' mt-24 px-3'>

      <div className='lg:flex justify-between gap-5 p-2'>
      <div className='mb-8 lg:w-[70%]'>
        <h1 className='text-white text-2xl font-semibold mb-4'>{anime?.title}</h1>
        <iframe className='w-full h-[300px] sm:h-[350px] md:h-[470px] lg:w-full lg:h-[550px] lg:mx-auto  object-contain' src={anime?.trailer?.embed_url} frameborder="0"></iframe>
      </div>
    
      <div className='lg:w-[30%]'><h1 className='text-white font-semibold m-3 lg:mt-12'>Episode List:</h1>
      <div className='p-3 max-h-[300px] lg:max-h-[500px] overflow-auto md:grid md:grid-cols-2 md:gap-3 lg:gap-2 lg:grid-cols-1 '>
        {
          episode.map( item => {
            return(
              <div className='text-white text-sm border rounded-lg flex items-center gap-9 p-3 mb-3 cursor-pointer hover:bg-slate-800 hover:scale-[1.02] transition-1'>
                <p>{item?.mal_id}</p>
                <h1>{item?.title}</h1>
              </div>
            )
          })
        }
      </div></div>

      </div>

      <div className=' text-white p-2 mt-12 lg:mt-6 '>
        
         {/* - FOR LARGE SCREEN  */}
         <div className='lg:flex lg:justify-around xl:justify-center xl:gap-16'>

           {/* - FOR MD SCREEN */}
        <div className='md:flex md:items-center lg:gap-16 '>
        <img className='w-[200px]  object-contain mb-3 rounded-lg mx-auto' src={anime?.images?.jpg?.large_image_url} alt="" loading='lazy'/>

        

<div className='text-sm w-[200px] mx-auto'>
<div className='border border-white rounded-lg p-3 mb-5'>
<div className='flex '>
<h1 className='flex-1'>score: </h1>
<span className=' text-yellow-400'>🌟 {anime?.score}</span>
</div>
<div className='flex '>
<h1 className='flex-1'>rank: </h1>
<span className=' text-yellow-400'>🏅 {anime?.rank}</span>
</div>
<div className='flex '>
<h1 className='flex-1'>members: </h1>
<span className=' text-yellow-400'>👪 {anime?.members}</span>
</div>
</div>

<div className='flex '>
<h1 className='flex-1'>watching: </h1>
<span className='text-cyan-300'>{statistics?.watching}</span>
</div>
<div className='flex '>
<h1 className='flex-1'>completed: </h1>
<span className='text-cyan-300'>{statistics?.completed}</span>
</div>
<div className='flex '>
<h1 className='flex-1'>on hold: </h1>
<span className='text-cyan-300'>{statistics?.on_hold}</span>
</div>
<div className='flex '>
<h1 className='flex-1'>dropped: </h1>
<span className='text-cyan-300'>{statistics?.dropped}</span>
</div>
<div className='flex '>
<h1 className='flex-1'>plan to watch: </h1>
<span className='text-cyan-300'>{statistics?.plan_to_watch}</span>
</div>
<div className='flex '>
<h1 className='flex-1'>total: </h1>
<span className='text-cyan-300'>{statistics?.total}</span>
</div>

</div>
        </div>
  
          


<div className='text-sm lg:p-3 mt-12'>
  <h1 className='p-1'>Title: {anime?.title}</h1>
  <h1 className='p-1'>JP_title: {anime?.title_japanese}</h1>
  <p className='p-1'>Type: {anime?.type}</p>
  <p className='p-1'>Source: {anime?.source}</p>
  <p className='p-1'>Status: {anime?.status}</p>
  <p className='p-1'>Aired: {anime?.aired?.string}</p>
  <p className='p-1'>Rating: {anime?.rating}</p>
  <p className='flex p-1'>Studio: {anime?.studios?.map( item =>( <h1 className='mx-2'>{item?.name} ,</h1>) )}</p>

  <div className='p-1 flex items-center gap-5 mt-2'>
    {
      anime?.genres?.map(item => (
        <h1 className='transition duration-150 border border-[#28226c] font-semibold text-xs  rounded-full py-2 px-4 cursor-pointer hover:text-[#292466] hover:bg-black hover:shadow-2xl hover:shadow-[white] md:py-3 md:px-5'>{item?.name}</h1>
      ))
    }
  </div>
</div>
        

         </div>

          
        
      </div>

      <p className='text-white  p-4 text-sm tracking-wider leading-6 border border-slate-700 rounded-lg m-4 mx-auto lg:max-w-[80%]'>{anime?.synopsis}</p>

      <div className='my-12'>
        <h1 className='text-white mb-5 font-semibold'>Characters & Voice Actors:</h1>
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
          }}}>
        {
          character.map( item => {
            return(
              <SwiperSlide>             
                <div>
                <div className='text-white h-[250px] w-full flex flex-col border border-white rounded-lg py-1'>
                  <h1 className='text-sm my-3'>{item?.character?.name}</h1>
                  <img className='overflow-hidden object-contain' src={item?.character?.images?.jpg?.image_url} alt="" loading='lazy'/>
                </div>

                <div className='my-12'></div>

                <div className=' text-white h-[250px] w-full flex flex-col border border-white rounded-lg py-1'>
                  <h1 className='text-sm my-3'>{item?.voice_actors[0]?.person?.name}</h1>
                  <img className='overflow-hidden object-contain' src={item?.voice_actors[0]?.person?.images?.jpg?.image_url} alt="" loading='lazy'/>
                </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      </div>



    </div>
  )
}

export default Detail