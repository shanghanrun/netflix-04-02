import {useQuery} from '@tanstack/react-query'
import api from '../utils/api'

const fetchDetailMovie =({id})=>{ //똑같은 객체형태로 받으면 잘 받아진다.
	console.log('id : ', id )
	return api.get(`movie/${id}`)
}

export const useDetailMovie = ({id}) => { 
	return useQuery({
		queryKey:['movie-search', id], 
		queryFn: ()=>fetchDetailMovie({id}),
		select: (result)=> result.data,  
		retry:1,
	})
}