import {useQuery} from '@tanstack/react-query'
import api from '../utils/api'

const fetchReviews =({id})=>{ //똑같은 객체형태로 받으면 잘 받아진다.
	console.log('id : ', id )
	return api.get(`movie/${id}/reviews`)
}

export const useReviews = ({id}) => { 
	return useQuery({
		queryKey:['reviews', id], 
		queryFn: ()=>fetchReviews({id}),
		select: (result)=> result.data,  
		retry:1,
	})
}