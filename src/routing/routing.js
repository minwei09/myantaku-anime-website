import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Detail from '../pages/Detail'
import SearchAnime from '../pages/SearchAnime'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Manga from '../pages/Manga'

const routing = () => {
  return (
    <div >
      <Header />

      <Routes>       
        <Route path='/' element={<Home />}/>
        <Route path='/anime/:id' element={<Detail />}/>
        <Route path='/search/anime/:id' element={<SearchAnime />}/>
        <Route path='/manga' element={<Manga />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default routing