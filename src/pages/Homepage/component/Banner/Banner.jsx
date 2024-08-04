import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { usePopularMoviesQuery } from '../../../../hook/userPopularMovies';
import "./Banner.style.css";

const Banner = () => {

    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    console.log('ddd', data)
    if(isLoading){
        <h1>Loading...</h1>;
    }
    if(isError){
        <Alert variant='danger'>{error.message}</Alert>;
    }
  return (
    <div style ={{backgroundImage:"url("+`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[6].backdrop_path}`+")"}}
    className='banner'>

      <div className='text-white banner-text-area'>
        <h1 style={{fontWeight:'bold',  fontSize:"60px"}}>{data?.results[6].title}</h1>
        <h3>{data?.results[6].original_title}</h3>
        <p style={{fontStyle:'italic'}}>{data?.results[6].overview}</p>
      </div>
    </div>
  )
}

export default Banner