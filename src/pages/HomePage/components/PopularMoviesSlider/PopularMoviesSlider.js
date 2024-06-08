import React from 'react'
import { usePopularMovies } from '../../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../common/constants/responsive';


const PopularMoviesSlider = () => {
	const {data,isLoading, isError, error} =usePopularMovies()
	if(isLoading){
		return <h1>Loading...</h1>
	}
	if(isError){
		return <Alert vairant="danger">{error.message}</Alert>
	}
  return (
	<div>
		<MovieSlider movies={data.results} title="Popular Movies" responsive={responsive}/>
	</div>
  )
}

export default PopularMoviesSlider