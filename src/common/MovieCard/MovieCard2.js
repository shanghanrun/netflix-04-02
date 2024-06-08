import React from 'react'
import './MovieCard2.style.css'
import {Badge} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { useMovieGenres } from '../../hooks/useMovieGenres'
import { useNavigate} from 'react-router-dom'


let imagePath =`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2`

const MovieCard = ({movie}) => {
	const {data:genreData} = useMovieGenres()  //[{id: , name: }, {id:,name: }....]

	const getGenreNameList=(genreIdList)=>{
		if(!genreData){ //genreData가 도착하지 않았을 경우
			return [];
		}
		const genreNameList = genreIdList.map((id)=>{
			const genreObj = genreData.find((obj)=> obj.id === id)
			return genreObj.name;
		})
		
		return genreNameList;
	}
	const navigate = useNavigate()
	const gotoDetail=(movieId)=>{
		navigate(`/movies/${movieId}`)
	}

  return (
	
	<div className="movie-card2" style={{backgroundImage: `url(${imagePath}${movie.poster_path}`}}
		onClick={()=>gotoDetail(movie.id)}
	>		
	
		<div className="overlay">
			<h3>{movie.title}</h3>
			<div className="underline"></div>
			{getGenreNameList(movie.genre_ids).map((name, i)=>
					<Badge bg="danger" key={i} style={{marginRight:'2px'}}>{name}</Badge>)}
			<div>
				<div>
					<Badge bg="warning" style={{color:'black'}}>IMDb</Badge>
					{movie.vote_average}
				</div>
				<div>
					<FontAwesomeIcon icon={faUsers} />
					{movie.popularity}
				</div>
				<div>
					{movie.adult? <Badge className='adult' bg="danger">19</Badge>
						: <Badge className="all" bg="success">All</Badge>}
				</div>
			</div>
		</div>
	</div>
	
  )
}

export default MovieCard