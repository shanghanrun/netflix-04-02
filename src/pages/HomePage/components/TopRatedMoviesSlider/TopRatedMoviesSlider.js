import React from 'react'
import { useTopRatedMovies } from '../../../../hooks/useTopRatedMovies'
import { Alert } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../common/constants/responsive';


const TopRatedMoviesSlider = () => {
	const {data,isLoading, isError, error} =useTopRatedMovies()
	if(isLoading){
		return <h1>Loading...</h1>
	}
	if(isError){
		return <Alert vairant="danger">{error.message}</Alert>
	}
  return (
	<div>
		<MovieSlider movies={data.results} title="Top Rated Movies" responsive={responsive}/>
	</div>
  )
}

export default TopRatedMoviesSlider