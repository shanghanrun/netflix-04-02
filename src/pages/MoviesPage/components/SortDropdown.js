
import Dropdown from 'react-bootstrap/Dropdown';
import './SortDropdown.style.css'
import movieStore from './../../../store/movieStore';

function SortDropdown({setMovies }) {
  const {movieList} = movieStore()
  const handleSort = (sortBy) => {
    let sortedMovies = [...movieList];

    // 영화를 선택된 정렬 기준에 따라 정렬
    if (sortBy === 'Popularity(Desc)') {
      sortedMovies.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === 'Popularity(Asc)') {
      sortedMovies.sort((a, b) => a.popularity - b.popularity);
    } else if (sortBy === 'Release Day(Desc)') {
      sortedMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    } else if (sortBy === 'Release Day(Asc)') {
      sortedMovies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    } else if (sortBy === 'Vote(Desc)') {
      sortedMovies.sort((a, b) => b.vote_count - a.vote_count);
    } else if (sortBy === 'Vote(Asc)') {
      sortedMovies.sort((a, b) => a.vote_count - b.vote_count);
    }

    // 정렬된 영화 데이터를 MoviesPage를 보여주는 movies 상태에 저장 ->화면바뀜
    setMovies(sortedMovies);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSort('Popularity(Desc)')}>Popularity(Desc)</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort('Popularity(Asc)')}>Popularity(Asc)</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort('Release Day(Desc)')}>Release Day(Desc)</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort('Release Day(Asc)')}>Release Day(Asc)</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort('Vote(Desc)')}>Vote(Desc)</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort('Vote(Asc)')}>Vote(Asc)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortDropdown;