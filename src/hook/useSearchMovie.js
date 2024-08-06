import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchSearchMovie=({keyword})=>{
    return keyword
    ?api.get(`/search/movie?query=${keyword}`)   //keyword가 있으면 keyword값 보여주기
    :api.get(`/movie/popular`);                  //없으면 popular 값 보여주기
}

export const useSearchMovieQuery=({keyword})=>{
    return useQuery({
        queryKey: ['movie-search', keyword],
        queryFn: ()=>fetchSearchMovie({keyword}),
        select: (result)=>result.data
    })
}