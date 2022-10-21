import React, { useEffect, useState } from 'react'
import { BsSearch, BsTriangleFill} from 'react-icons/bs'
import instance from '../api/apiConfig'
import requests from '../api/requests'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decreasePage, defaultPageNumber, increasePage } from '../redux-toolkit/features/pages/page'

const SearchAnime = () => {

  const dispatch = useDispatch()
  const pageNumber = useSelector( state => state.page.pageNumber)
  
  const [anime, setAnime ] = useState([])
  const [genres, setGenres] = useState([])
  const [input, setInput] = useState('')
  const [submenutype, setSubmenutype] = useState(false)
  const [submenugenres, setSubmenugenres] = useState(false)


  const stringLimit = (string, num) => {
    return string.length > num ? string.substring(0, num -1 ) + '...' : string 
  }

  const {data} = usegetanime
 
//   const getAnimeByTitle = async(title) => {
//     const res = await instance.get(requests.getAnimeByTitle(title))
//       localStorage.setItem('animeSearch', JSON.stringify(res.data))
//       setAnime(res.data.data) 
//   }

//   const getAnimeByType = async(type, page) => {
    
//       const res = await instance.get(requests.getAnimeType(type, page))
//       localStorage.setItem('animeSearch', JSON.stringify(res.data))
//       setAnime(res.data.data) 
//   }

//   const getAnimeByGenres = async(id) => {

//     const res = await instance.get(requests.getAnimeByGenres(id))
//     localStorage.setItem('animeSearch', JSON.stringify(res.data))
//     setAnime(res.data.data)
//   }

//   const getGenres = async() => {
//     const res = await instance.get(requests.getAnimeGenres)
//     const data = res.data.data
//     setGenres(data)
//   }
  
//   useEffect(() => {

//     getGenres()

//     const tv = 'tv'
//     if(prevData) {
//       setAnime(JSON.parse(prevData))
//     }
//     else {
//       getAnimeByType(tv, pageNumber)
//     }
    
//     window.scrollTo(0, 0);
    
    
//   },[prevData, pageNumber])

  // const defaultP = () => {
  //   dispatch(defaultPageNumber())
  //   console.log(pageNumber)
  // }

  return (
    <div className='top_section mt-32 text-white'>

      <div className='flex items-center mx-3 md:mx-10  gap-5 md:gap-10 '>

        <div className='flex items-center h-full'>
          <input value={input} onChange={e => setInput(e.target.value)} type="text" className='searchInput h-[30px] w-[180px] sm:w-[280px]'/>
          <BsSearch onClick={() => getAnimeByTitle(input)} className='bg-[#393E46] p-2 w-[2.05rem] h-[30.8px] cursor-pointer'/>
        </div>
        

        <div className='relative  '>
          <h1 className='cursor-pointer' onClick={() => setSubmenutype(!submenutype)}>Type</h1>
        {
          submenutype &&          
          <>
          <div className='  absolute top-6 text-black -left-3 cursor-pointer w-[60px]'><BsTriangleFill className='ml-5'/></div>
          <div className='grid z-10 absolute top-9 -left-32 bg-black  grid-cols-2 w-[200px] p-4 '>
            {
              typeLink.map( item => (
                <li onClick={() => getAnimeByType(item.link, pageNumber)&& setSubmenutype(!submenutype) }>{item.name}</li>
              ))
            }         
            {/* <li onClick={() => getAnimeByType('tv', pageNumber)&& setSubmenutype(!submenutype) }>TV</li>
            <li onClick={() => getAnimeByType('movie', pageNumber) && setSubmenutype(!submenutype)}>Movie</li>
            <li onClick={() => getAnimeByType('ova', pageNumber)&& setSubmenutype(!submenutype)}>OVA</li>
            <li onClick={() => getAnimeByType('ona', pageNumber)&& setSubmenutype(!submenutype)}>ONA</li>
            <li onClick={() => getAnimeByType('special', pageNumber)&& setSubmenutype(!submenutype)}>Special</li>
            <li onClick={() => getAnimeByType('music', pageNumber)&& setSubmenutype(!submenutype)}>Music</li> */}
          </div>
          </>
           }
        </div>
       

        <div className='relative '>
        <h1 className='cursor-pointer' onClick={() => setSubmenugenres(!submenugenres)}>Genres</h1>
        {
          submenugenres &&
          <>
          <div className=' absolute top-6 text-black -left-3 cursor-pointer w-[70px]'><BsTriangleFill className='ml-8'/></div>
        

        <div key={genres?.id} className=' grid z-10 absolute top-9 -left-[18rem] sm:-left-[20rem] md:-left-[15rem] bg-black  grid-cols-3 sm:grid-cols-4  w-[350px] sm:w-[500px] px-2 sm:p-2 md:px-8 md:w-[600px]'>
        {/* genres map */}
        </div></>
        }
        
        </div>

      </div>

      {/* ---------- ANIME CARD ---------------- */}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 my-10 p-4 gap-8 xl:gap-4 transition-1'>
        {
          anime?.data.map( item => {
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

      {/* - PAGINATION */}

      <div className='text-white flex items-center justify-center gap-[10rem]'>
        {pageNumber > 1 ? 
        <button className='pageButton' onClick={() => dispatch(decreasePage())}>Prev</button> : 
        <button className='pageButton pointer-events-none opacity-30'>Prev</button>}

        <h1>{pageNumber}</h1>

        <button className='pageButton' onClick={() => dispatch(increasePage())}>Next</button>
      </div>

    </div>
  )
}

export default SearchAnime




