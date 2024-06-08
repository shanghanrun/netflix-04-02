import React, {useState,useEffect} from 'react'
import { useSearchParams} from 'react-router-dom'
import movieStore from '../../store/movieStore'
import { useSearchMovies } from '../../hooks/useSearchMovies'
import { Alert } from 'react-bootstrap';
import {Container, Row, Col, Spinner} from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import SortDropdown from './components/SortDropdown';
import FilterDropdown from './components/FilterDropdown';
import GenreDropdown from './components/GenreDropdown';
import './MoviePage.style.css'

// 여기로 오는 경로 2가지
// navbar 링크를 통해 온 경우 ==> popularMovies를 보여준다.
// keyword를 통해서 온 경우 => keyword관련 영화들을 보여준다.

const MoviesPage = () => {
  const [query, setQuery] = useSearchParams()
  const keyword = query.get('q')
  console.log('keyword :', keyword)
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([])
  const {movieList, setMovieList} = movieStore();

  const [yearStart, setYearStart] = useState(2001)
	const [yearEnd, setYearEnd] = useState(2024)
  const [scoreStart, setScoreStart] = useState(0)
	const [scoreEnd, setScoreEnd] = useState(10)


  const {data, isLoading, isError, error} = useSearchMovies({keyword, page})
  console.log('searched data :', data)
  console.log('yearStart :', yearStart)
  console.log('yearEnd :', yearEnd)

  const handlePageClick=({selected})=>{
    setPage(selected +1)
  }
  function filterMovies(){
		console.log('year Start[필터]: ', yearStart)
		console.log('year End[필터]:', yearEnd)
		console.log('score Start: ', scoreStart)
		console.log('score End:', scoreEnd)
		const newList = movieList.filter(movie => {
			const movieYear = new Date(movie.release_date).getFullYear();
      console.log('movieYear : ',movieYear)
      const movieScore = parseInt(movie.vote_average);

			return movieYear >=yearStart && movieYear<= yearEnd 
             && movieScore >=scoreStart && movieScore <= scoreEnd ;
			})
		console.log('filtered Movie:', newList)
    return newList
	}

  useEffect(()=>{
    if(data){
      setMovies(data.results)
      setMovieList(data.results)
    }
  },[data])

   useEffect(()=>{
    console.log('filterUseEffect 실행')
    const newList = filterMovies()
		setMovies(newList)
	},[yearStart, yearEnd, scoreStart, scoreEnd])


  if(isLoading){
    return (
      <div className='spinner-area'>
        <Spinner animation="border" variant="danger" style={{width:'5rem', height:'5rem'}} />
      </div>
    )
  }
  if(isError){
    return <Alert variant="danger">{error.message}</Alert>
  }
  return (
    <Container style={{color:'white'}}>
      <Row>
        <Col lg={4} xs={12} style={{border: '2px solid red', borderRadius:'10px', marginBottom: '20px', textAlign:'start', padding: '20px' }}>
          <div style={{margin:"10px 0"}}>필터</div>
          <SortDropdown setMovies={setMovies} />
          <FilterDropdown
            setYearStart={setYearStart}
            setYearEnd={setYearEnd}
            setScoreStart={setScoreStart}
            setScoreEnd={setScoreEnd}
          />
          <GenreDropdown setMovies={setMovies}/>
        </Col>
        <Col lg={8} xs={12}>
          <Row >  
            {movies.map((movie, index)=>
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            )}
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data.total_pages}  //데이터의 토탈페이지
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page-1}
          />
        </Col> 
      </Row>
    </Container>
  )
}

export default MoviesPage