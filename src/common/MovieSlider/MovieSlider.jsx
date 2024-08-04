import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './MovieSlider.style.css';


const MovieSlider = ({title, movies, responsive}) => {
  return (
    <div>
      <h1 style={{margin:'60px 0px 0px 30px'}}>{title}</h1>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass='movie-slider p-1'
        containerClass='carousel-container'
        responsive={responsive}
        >
        {movies.map((movie,index)=>
        <MovieCard movie={movie} key={index}/>)}
    </Carousel>
    </div>
  )
}

export default MovieSlider
