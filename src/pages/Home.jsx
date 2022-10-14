import React from 'react'
import Header from '../components/header/Header'
import HeroSlider from '../components/HeroSlider'
import OngoingAnime from '../components/OngoingAnime'
import TopAnime from '../components/TopAnime'
import UpcomingAnime from '../components/UpcomingAnime'

const Home = () => {
  return (
    <div >
      <HeroSlider />
      <OngoingAnime />
      <UpcomingAnime />
      <TopAnime />
    </div>
  )
}

export default Home