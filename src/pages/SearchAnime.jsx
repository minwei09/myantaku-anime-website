import React, { useEffect, useState } from 'react'
import { BsSearch, BsTriangleFill} from 'react-icons/bs'
import instance from '../api/apiConfig'
import requests from '../api/requests'
import { Link } from 'react-router-dom'

const SearchAnime = () => {

  const [anime, setAnime ] = useState([])
  const [genres, setGenres] = useState([])
  const [input, setInput] = useState('')

  const stringLimit = (string, num) => {
    return string.length > num ? string.substring(0, num -1 ) + '...' : string
    
  }
 
  const getAnimeByTitle = async(title) => {
    const res = await instance.get(requests.getAnimeByTitle(title))
      localStorage.setItem('animeSearch', JSON.stringify(res.data.data))
      setAnime(res.data.data) 
  }

  const getAnimeByType = async(type) => {
    
      const res = await instance.get(requests.getAnimeType(type))
      localStorage.setItem('animeSearch', JSON.stringify(res.data.data))
      setAnime(res.data.data) 
  }

  const getAnimeByGenres = async(id) => {

    const res = await instance.get(requests.getAnimeByGenres(id))
    localStorage.setItem('animeSearch', JSON.stringify(res.data.data))
    setAnime(res.data.data)
  }

  const getGenres = async() => {
    const res = await instance.get(requests.getAnimeGenres)

    const data = res.data.data
    setGenres(data)
  }

  useEffect( () => {

    getGenres()

    const prevData = localStorage.getItem('animeSearch')
    if(prevData) {
      setAnime(JSON.parse(prevData))
    }
    else {
      getAnimeByType()
    }
  },[])

  return (
    <div className='top_section mt-32 text-white'>

      <div className='flex items-center mx-3 md:mx-10  gap-5 md:gap-10 '>

        <div className='flex items-center h-full'>
          <input value={input} onChange={e => setInput(e.target.value)} type="text" className='searchInput h-[30px] w-[180px] sm:w-[280px]'/>
          <BsSearch onClick={() => getAnimeByTitle(input)} className='bg-[#393E46] p-2 w-[2.05rem] h-[30.8px] cursor-pointer'/>
        </div>
        

        <div className='relative group '>
          <h1 className='cursor-pointer'>Type</h1>
          <div className='hidden group-hover:block absolute top-6 text-black -left-3 cursor-pointer w-[60px]'><BsTriangleFill className='ml-5'/></div>
          <div className='hidden group-hover:grid z-10 absolute top-9 -left-32 bg-black  grid-cols-2 w-[300px] p-4 '>         
            <li onClick={() => getAnimeByType('tv')}>TV</li>
            <li onClick={() => getAnimeByType('movie')}>Movie</li>
            <li onClick={() => getAnimeByType('ova')}>OVA</li>
            <li onClick={() => getAnimeByType('ona')}>ONA</li>
            <li onClick={() => getAnimeByType('special')}>Special</li>
            <li onClick={() => getAnimeByType('music')}>Music</li>
          </div>
        </div>

        <div className='relative group'>
        <h1>Genres</h1>
        <div className='hidden group-hover:block absolute top-6 text-black -left-3 cursor-pointer w-[90px]'><BsTriangleFill className='ml-8'/></div>
        

        <div key={genres?.id} className='hidden group-hover:grid z-10 absolute top-9 -left-[18rem] sm:-left-[20rem] md:-left-[15rem] bg-black  grid-cols-3 sm:grid-cols-4  w-[350px] sm:w-[500px] px-2 sm:p-2 md:px-8 md:w-[600px]'>
        <li onClick={() => getAnimeByGenres(genres[0]?.mal_id)}>{genres[0]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[1]?.mal_id)}>{genres[1]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[3]?.mal_id)}>{genres[3]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[4]?.mal_id)}>{genres[4]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[5]?.mal_id)}>{genres[5]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[6]?.mal_id)}>{genres[6]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[7]?.mal_id)}>{genres[7]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[8]?.mal_id)}>{genres[8]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[10]?.mal_id)}>{genres[10]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[11]?.mal_id)}>{genres[11]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[12]?.mal_id)}>{genres[12]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[13]?.mal_id)}>{genres[13]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[14]?.mal_id)}>{genres[14]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[15]?.mal_id)}>{genres[15]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[18]?.mal_id)}>{genres[18]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[20]?.mal_id)}>{genres[20]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[30]?.mal_id)}>{genres[30]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[32]?.mal_id)}>{genres[32]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[37]?.mal_id)}>{genres[37]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[42]?.mal_id)}>{genres[42]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[46]?.mal_id)}>{genres[46]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[50]?.mal_id)}>{genres[50]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[53]?.mal_id)}>{genres[53]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[54]?.mal_id)}>{genres[54]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[59]?.mal_id)}>{genres[59]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[64]?.mal_id)}>{genres[64]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[66]?.mal_id)}>{genres[66]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[73]?.mal_id)}>{genres[73]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[74]?.mal_id)}>{genres[74]?.name}</li>
          <li onClick={() => getAnimeByGenres(genres[75]?.mal_id)}>{genres[75]?.name}</li>
        </div>
        </div>

      </div>

      {/* ---------- ---------------- */}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 my-10 p-4 gap-8 xl:gap-4 transition-1'>
        {
          anime.map( item => {
            return(
              
                <Link to={`/anime/${item?.mal_id}`} key={item?.mal_id}>
                    <div className='mt-5 transition-1' >
                      <img className='h-[300px] object-contain w-full items-start' src={item?.images?.jpg?.large_image_url} alt="" loading='lazy'/>
                      <h1 className='text-sm font-semibold py-3 text-center'>{stringLimit(item?.title, 30)}</h1>
                    </div>
                </Link>
              
            )
          })
        }
      </div>

    </div>
  )
}

export default SearchAnime




