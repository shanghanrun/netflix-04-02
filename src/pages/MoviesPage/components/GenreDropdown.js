import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import movieStore from './../../../store/movieStore';
import { genres } from './../../../common/constants/genres';


function GenreDropdown({setMovies }) {
  const {movieList} = movieStore() 

  function filterByGenre(id){
    console.log('genre id: ', id)
    const results = movieList.filter(movie => movie.genre_ids.includes(id))
    setMovies(results)
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Genres
      </Dropdown.Toggle>

      <Dropdown.Menu style={{background: '#211e1e'}}>
              {/* {genres.map((genre, index) => (
                <Button key={index} variant="primary" size="sm">{genre.name}</Button>
              ))} */}
              {genres.map((genre, index) => (
                <Button style={{marginRight:"3px", marginBottom:"3px" }} 
					onClick={()=>filterByGenre(genre.id)} key={index} >{genre.name}</Button>
              ))}
        </Dropdown.Menu>
    </Dropdown>
  );
}

export default GenreDropdown;
