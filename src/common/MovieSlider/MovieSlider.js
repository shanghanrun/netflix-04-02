import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './MovieSlider.style.css'

const MovieSlider = ({title, movies, responsive}) => {
	
  return (
	<div>
		<h3>{title}</h3>
		<Carousel 
			infinite={true}
			// centerMode={true}
			itemClass="movie-slider p-1"
			containerClass="carousel-container"
			partialVisible={true}
			// autoPlay={this.props.deviceType !== "mobile" ? true : false}
			// autoPlaySpeed={1000}
			responsive={responsive} >
				
			{movies.map((movie, index)=>
				<MovieCard movie={movie} key={index}/>
			)}
		</Carousel>
	</div>
  )
}

export default MovieSlider