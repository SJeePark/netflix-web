import { Alert } from 'bootstrap';
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import { useUpcomingMovieQuery } from '../../../../hook/userUpcomingMovie';


const UpcomingMovie = () => {
    const {data, isLoading, isError, error} = useUpcomingMovieQuery()
    if(isLoading){
        return <h1>Loading</h1>
    }
    if(isError){
        return <Alert varient = 'danger'>{error.message}</Alert>
    }

    return (
    <div>
      <MovieSlider title="Upcoming Movies" movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default UpcomingMovie
