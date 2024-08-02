import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import MoviePage from './pages/Movies/MoviePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

//<홈페이지 구성>
// 홈페이지  /
// 영화 전체 보여주는 페이지 (서치) /movies
// 영화 디테일 페이지  /movies/:id
// 추천 영화 /movies/:id/recommandation
// 리뷰/movies/:id/reviews

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage/>}></Route>
        <Route path='movies'>
          <Route index element={<MoviePage/>}/>
          <Route path=':id' element={<MovieDetailPage />}/>
        </Route>

        {/* 20~23행: /movies 를 사용하는 라우터를 하나로 묶는 방법
        <Route path='/movies' element={<MoviePage/>}></Route>
        <Route path="/movies/:id" element={<MovieDetailPage/>}></Route> 
        
        index element 는 상위 라우터를 바로 가져올 때 사용할 수 있음
        */}
        
        <Route path='*' element={<NotFoundPage/>}/>
        
      </Route> 
    </Routes>
  );
}


export default App;
