import {useQuery} from '@tanstack/react-query'
import api from '../utils/api'

function fetchPopularMovies(){
	return api.get('/movie/popular')
}

export const usePopularMovies =()=>{
	return useQuery({
		queryKey: ['movie-popular'],
		queryFn: fetchPopularMovies,
		select: (result)=> result.data,
		retry: 1
	})
}