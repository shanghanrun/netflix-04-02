import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchMovies = ({ keyword, page }) => {
  if (keyword && page) {
    return api.get(`search/movie?query=${keyword}&page=${page}`);
  } else if (keyword) {
    return api.get(`search/movie?query=${keyword}`);
  } else if (page) {
    return api.get(`movie/upcoming?page=${page}`);
  } else {
    return api.get('movie/upcoming');
  }
  
};


export const useSearchMovies = ({ keyword, page }) => {
  return useQuery({
    queryKey: ['movie-search', keyword, page],
    queryFn: () => fetchSearchMovies({ keyword, page }),
    select:(result)=> result.data,    
	 retry: 1,
  });
}; 
