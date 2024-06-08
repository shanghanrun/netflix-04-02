import {useQuery} from '@tanstack/react-query'
import api from '../utils/api'

const fetchVideo =({id})=>{ //똑같은 객체형태로 받으면 잘 받아진다.
	console.log('id : ', id )
	return api.get(`movie/${id}/videos`)
}

export const useVideo = ({id}) => { 
	return useQuery({
		queryKey:['video-search', id], 
		queryFn: ()=>fetchVideo({id}),
		select: (result)=> result.data,  
		retry:1,
	})
}