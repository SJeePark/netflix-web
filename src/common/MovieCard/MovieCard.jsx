import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'

const MovieCard = ({movie}) => {
  return (
    <div
    style = {{backgroundImage: "url("+`https://media.themoviedb.org/t/p/w220_and_h330_bestv2${movie.poster_path}`+")"}}
    className='movie-card'>
    <div className='overlay'>
        <h2 className='card-title' style={{paddingTop:'10px'}}>{movie.title}</h2>
        {movie.genre_ids.map((id)=><Badge bg='danger'>{id}</Badge>)}
        <div style={{display: 'inline', marginLeft: '10px'}}>
          {movie.adult?
          <img className='age-mark'src = 'https://i.namu.wiki/i/CLhQiPZyOB0c50kkVKBKrlpEL3SwrhgQGNe7NNVtiatq49QxoHx68cASxEfQAgtSuMo_-7pcNtetfr0RV68xgQ.svg'/>
          :<img className='age-mark' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6JZ_SkR3nyjr2Z9b5Jw8DH-1ch73tVazXA&s/'/>}
          </div>

        <div>
        <div>{movie.vote_average}</div>
        <div>{movie.popularity}</div>
        
    </div>

    </div>
    
    
    </div>
  )
}

export default MovieCard
