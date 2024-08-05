import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchUpcomingMovies=()=>{
    return api.get(`/movie/upcoming?language=ko-KR`)
}

export const useUpcomingMovieQuery=()=>{
    return useQuery({
        queryKey:['movie-upcoming'],
        queryFn:fetchUpcomingMovies,
        select:(result)=> result.data
    })
}