import React, { useEffect, useState } from 'react'
import { BsSearch, BsTriangleFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { useGetAnimeByGenresQuery, useGetAnimeByTitleQuery, useGetAnimeGenresQuery, useGetAnimeTypeQuery } from '../redux-toolkit/api/getAnimeApi'
import { changeSelectType, decreasePage, defaultGenres, defaultPageNumber, increasePage, searchInputValue, selectGenres, unselectGenres } from '../redux-toolkit/features/pages/page'

const SearchAnime = () => {

    const dispatch = useDispatch()

    /**************************** 
    - FROM REDUX PAGE
    *****************************/


    const pageNumber = useSelector( state => state.page.pageNumber)
    // console.log("page: ", pageNumber,  typeof pageNumber )

    const types = useSelector( state => state.page.type)

    const selectedType = useSelector( state => state.page.selectedType)
    // console.log("selected type:", selectedType, typeof selectedType)

    const searchAnimeName = useSelector( state => state.page.searchInput)
    // console.log("search :", searchAnimeName)

    const slecGenres = useSelector( state => state.page.selectgenres)
    // console.log("genres: ", slecGenres)


    /**************************** 
    - PARAMETER FOR URL
    *****************************/



    const paramType = {selectedType, pageNumber}
    // console.log(paramType)

    const paramSearch = { searchAnimeName, pageNumber}

    const paramGenres = { slecGenres, pageNumber}




    /**************************** 
    - STATES
    *****************************/



    const [submenutype, setSubmenutype] = useState(false)
    const [submenugenres, setSubmenugenres] = useState(false)
    const [input, setInput] = useState('')
    const [buttonClick, setButtonClick] = useState(false)

    const [showGenresAnime, setShowGenresAnime] = useState(false)
    const [showSearchAnime, setShowSearchAnime] = useState(false)
    const [showTypeAnime, setShowTypeAnime] = useState(true)



    /**************************** 
    - API CALL
    *****************************/



    const { data: allgenres, isLoading: allgenresLoading, isSuccess: allgenresSuccess, error: allgenresError } = useGetAnimeGenresQuery()

    const { data: type, isLoading: typeLoading, isSuccess: typeSuccess, error: typeError } = useGetAnimeTypeQuery(paramType)

    const { data: title, isLoading: titleLoading, isSuccess: titleSuccess, error: titleError } = useGetAnimeByTitleQuery(paramSearch)

    const { data: selectedGenre, isLoading: selectedGenreLoading, isSuccess: selectedGenreSuccess, error: selectedGenreError } = useGetAnimeByGenresQuery(paramGenres)




    /**************************** 
    - USEEFFECT AND FUNCTIONS
    *****************************/



    useEffect(() => {
      window.scrollTo(0, 0);
    },[buttonClick]) 

    const handleInput = (value) => {
      dispatch(searchInputValue(value))
      setInput('')

      dispatch(defaultPageNumber())
      dispatch(defaultGenres())

      setShowGenresAnime(false) 
      setShowSearchAnime(true) 
      setShowTypeAnime(false)
    }

    const handleType = (id) => {
      dispatch(changeSelectType(id)) 
      setSubmenutype(!submenutype) 

      dispatch(defaultPageNumber()) 
      dispatch(defaultGenres())

      setShowGenresAnime(false)  
      setShowSearchAnime(false) 
      setShowTypeAnime(true)
    }

    const handleSelectedGenres = (id) => {
      dispatch(selectGenres(id))
      dispatch(defaultPageNumber())

      setShowGenresAnime(true)  
      setShowSearchAnime(false) 
      setShowTypeAnime(false)
    }

    const handleDeselectedGenres = (id) => {
      dispatch(unselectGenres(id))
      dispatch(defaultPageNumber())

      setShowGenresAnime(true)  
      setShowSearchAnime(false) 
      setShowTypeAnime(false)
    }

    const handleGenresSearchConfirm = () => {
      setSubmenugenres(!submenugenres)
    }

    const stringLimit = (string, num) => {
      return string.length > num ? string.substring(0, num -1 ) + '...' : string 
    }

    // console.log("showSearchAnime:", showSearchAnime)
    // console.log("showGenresAnime:", showGenresAnime)
    // console.log("showTypeAnime:", showTypeAnime)

    // console.log(title)

    /**************************** 
    


    *****************************/

  return (
    <div className='top_section mt-32 text-white'>

    <div className='flex items-center mx-3 md:mx-10  gap-5 md:gap-10 '>

      <div className='flex items-center h-full'>
        <input value={input} onChange={e => setInput(e.target.value)} type="text" className='searchInput h-[30px] w-[180px] sm:w-[280px]'/>
        <BsSearch onClick={() => handleInput(input)} 
          className='bg-[#393E46] p-2 w-[2.05rem] h-[30.8px] cursor-pointer'/>
      </div>
      

      <div className='relative  '>
        <h1 className='cursor-pointer' onClick={() => setSubmenutype(!submenutype)}>Type</h1>
      {
        submenutype &&          
        <>
        <div className=' absolute top-6 text-black -left-3 cursor-pointer w-[60px]'><BsTriangleFill className='ml-5'/></div>
        <div className='grid z-10 absolute top-9 -left-32 bg-black  grid-cols-2 w-[200px] p-4 '>
          {
            types.map( item => (
              <li onClick={() => handleType(item.id)}>{item.name}</li>
            ))
          }         
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
      

      <div className='  grid z-10 absolute top-9 -left-[18rem] sm:-left-[20rem] md:-left-[15rem] bg-black grid-cols-3 sm:grid-cols-4 md:grid-cols-5 w-[350px] sm:w-[500px] md:w-[700px] px-2 sm:p-2 md:px-3 transition-1 '>

      <p 
      onClick={() => handleGenresSearchConfirm()}
      className='text-xs border text-green-700 hover:text-green-900 font-bold rounded-full cursor-pointer p-1 px-2 border-green-700  mt-2 w-fit'>Confirm</p>
      {
        allgenresSuccess && 
        
        allgenres.data?.map( item => (
          <div key={item.mal_id} className=" flex items-center justify-between">

            <li className={`${slecGenres.find( i => i === item.mal_id) && 'text-blue-700 font-semibold hover:text-blue-900 '} text-xs`}

            onClick={() => handleSelectedGenres(item.mal_id)}>{item.name}</li>

            
            {
              slecGenres.find( i => i === item.mal_id) &&          
              <span 
              onClick={() => handleDeselectedGenres(item.mal_id)}
              className='mr-4 mt-2 cursor-pointer text-red-700 hover:text-red-900 font-bold'>x</span>
            }
            
          </div>
        ))
      }
      </div>
      </>
      }
      
      </div>

    </div>

    {/* ---------- ANIME CARD ---------------- */}

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 my-10 p-4 gap-8 xl:gap-4 transition-1'>


      {
        showTypeAnime &&
        <>
        {typeLoading && <h1 className='text-4xl mt-28 text-center text-white'>Loading...</h1>}
        {typeError && <h1 className='text-4xl mt-28 text-center text-white'>error :'(</h1>}
        {
        typeSuccess && (
          <>
          {
            type?.data?.map( item => {
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
          </>
        )
        
      }
        </>
      }

      {
        showSearchAnime &&
        <>
        {titleLoading && <h1 className='text-4xl mt-28 text-center text-white'>Loading...</h1>}
        {titleError && <h1 className='text-4xl mt-28 text-center text-white'>error :'(</h1>}
        {
        titleSuccess && (
          <>
          {
            title?.data?.map( item => {
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
          </>
        )
        
      }
        </>
      }

      {
        showGenresAnime &&
        <>
        {selectedGenreLoading && <h1 className='text-4xl mt-28 text-center text-white'>Loading...</h1>}
        {selectedGenreError && <h1 className='text-4xl mt-28 text-center text-white'>error :'(</h1>}
        {
        selectedGenreSuccess && (
          <>
          {
            selectedGenre?.data?.map( item => {
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
          </>
        )
        
      }
        </>
      }

    </div>

    {/* - PAGINATION */}

    <div className='text-white flex items-center justify-center gap-[5rem] md:gap-[10rem]'>

      {pageNumber > 1 ? 
      <button className='pageButton' onClick={() => dispatch(decreasePage()) && setButtonClick(!buttonClick)}>Prev</button> : 
      <button className='pageButton pointer-events-none opacity-30'>Prev</button>
      }

      <h1>{pageNumber}</h1>

      {
       (title?.pagination.has_next_page &&
       selectedGenre?.pagination.has_next_page &&
       type?.pagination.has_next_page) ?
       <button className='pageButton' onClick={() => dispatch(increasePage()) && setButtonClick(!buttonClick)}>Next</button> :
       <button className='pageButton pointer-events-none opacity-30'>Next</button>
       }
      
    </div>

  </div>
  )
}

export default SearchAnime