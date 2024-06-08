import {useQuery} from '@tanstack/react-query'
import api from '../utils/api'

const fetchSimilarMovies =({id})=>{ //똑같은 객체형태로 받으면 잘 받아진다.
	console.log('id : ', id )
	return api.get(`movie/${id}/similar`)
}

export const useSimilarMovies = ({id}) => { 
	return useQuery({
		queryKey:['similar-movies', id], 
		queryFn: ()=>fetchSimilarMovies({id}),
		select: (result)=> result.data,  
		retry:1,
	})
}