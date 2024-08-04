import React from 'react'
import Banner from './component/Banner/Banner'
import PopularMovieSlide from './component/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovie from './component/TopRated/TopRatedMovie'
import UpcomingMovie from './component/UpcomingMovie/UpcomingMovie'


//1.배너 => popular 영화를 들고와서 첫번째 아이템 보여주기
//2. popular movie
//3. top rated movie
//4. upcoming movie

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide/>
      <TopRatedMovie />
      <UpcomingMovie />
    </div>
  )
}
 
export default Homepage
