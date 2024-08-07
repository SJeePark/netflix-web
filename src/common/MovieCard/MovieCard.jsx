import React from 'react'
import { Badge } from 'react-bootstrap'
import { useMovieGenreQuery } from '../../hook/useMovieGenre'
import './MovieCard.style.css'

const MovieCard = ({movie}) => {

  const {data:genreData}= useMovieGenreQuery() //data: ~ => data의 이름을 재정의
  
  
  const showGenre=(genreIdList)=>{    //25행의 movie.genre_ids를 매개변수로 받아옴
    if(!genreData) return []          //만약 장르데이터가 없을 경우 빈 객체 return 
    const genreNameList = genreIdList.map((id)=>{   //genreIdList 장르의 이름들만 모아둔 list 생성
      const genreObj = genreData.find((genre)=>genre.id === id) //genre와 genre.id와 같은 값이있으면 genreObj에 return
      return genreObj.name;
    })
    return genreNameList
    
  }

  return (
    <div
    style = {{backgroundImage: "url("+`https://media.themoviedb.org/t/p/w220_and_h330_bestv2${movie.poster_path}`+")"}}
    className='movie-card'>
    <div className='overlay'>
        <h2 className='card-title' style={{paddingTop:'10px'}}>{movie.title}</h2>
        <div className='keyword'>{showGenre(movie.genre_ids).map((id)=><Badge bg='danger'>{id}</Badge>)}</div>
    

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
