import { Alert } from 'bootstrap';
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import { useTopRatedMoviesQuery } from '../../../../hook/useTopRatedMovies';

const TopRatedMovie = () => {
    const {data, isLoading, isError, error} = useTopRatedMoviesQuery()
    if(isLoading){
        return <h1>Loading</h1>
    }
    if(isError){
        return <Alert varient = 'danger'>{error.message}</Alert>
    }

    return (
    <div>
      <MovieSlider title="Top Rated" movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default TopRatedMovie
