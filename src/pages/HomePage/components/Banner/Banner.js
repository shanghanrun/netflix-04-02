import React from 'react'
import { usePopularMovies } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css'

const Banner = () => {

  const {data, isLoading, isError, error} = usePopularMovies()
  console.log('ddd', data);
  
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <Alert variant="danger">
          {error.message}
        </Alert>
  }
  // data가 받아졌다면
  let poster_path = data?.results[0].poster_path  //첫번째 영화데이터
  // let imagePath = `https://image.tmdb.org/t/p/w500/${poster_path}` //작은화면
  let imagePath2 =`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${poster_path}`
  return (
    <div style={{
      backgroundImage:`url(${imagePath2})`}}
    className="banner"
    >
      <div className="text-white banner-text-area">
        <h1>{data?.results[0].title}</h1>
        <p className='banner-overview'>{data?.results[0].overview.substring(0,180).trim()}...</p>
      </div>
    </div>
  )
}

export default Banner