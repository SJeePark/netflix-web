import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchPopularMovies=()=>{
    return api.get(`/movie/top_rated?language=ko-KR`)
}

export const useTopRatedMoviesQuery=()=>{
    return useQuery({
        queryKey:['movie-toprated'],
        queryFn:fetchPopularMovies,
        select:(result)=> result.data
    })
}