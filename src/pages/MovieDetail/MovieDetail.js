import React, { useState } from 'react'
import {Alert, Container, Row, Col, Badge} from 'react-bootstrap'
import {useParams } from 'react-router-dom'
import { useDetailMovie } from '../../hooks/useDetailMovie';
import Reviews from './Reviews/Reviews';
import SimilarMovies from './SimilarMovies/SimilarMovies';
import Recommendations from './Recommendations/Recommendations';
import './MovieDetail.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import Video from './Video/Video';

let imagePath =`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2`

const MovieDetail = () => {
  const {id} = useParams()
  console.log('id :', id)
  const {data,isLoading, isError,error} = useDetailMovie({id});
  console.log('detail movie :', data);

  const [isSimilar, setIsSimilar] =useState(true)
  const [similarClicked, setSimilarClicked] = useState(true);
  const [recommendationsClicked, setRecommendationsClicked] = useState(false);

  const showSimilarMovies=()=>{
    setSimilarClicked(true);
    setRecommendationsClicked(false);
    setIsSimilar(true)
  }
  const showRecommendations=()=>{
    setSimilarClicked(false); 
    setRecommendationsClicked(true);
    setIsSimilar(false)
  }
  
  if(isLoading){
		return <h1>Loading...</h1>
	}
	if(isError){
		return <Alert vairant="danger">{error.message}</Alert>
	}

  return (
    <div>
      <Container >
        <Row>
          <Col lg={6} xs={12}>
            <div style={{marginTop: '10px'}}>
              <img src={imagePath+data.poster_path} width='90%' height="450px" alt=''/>
            </div>
          </Col>
          <Col lg={6} xs={12} style={{textAlign: "start"}}>
            <h1>Title : {data.title}</h1>
            <h3 style={{color:'#87b4f8', fontWeight:'bold'}}>{data.tagline}</h3>
            <h4>Story : {data.overview}</h4>
            <div className="d-none d-lg-block"><FontAwesomeIcon style={{color:'#ff00ff'}}icon={faUsers} /> {data.popularity}</div>
            <div className="d-none d-lg-block">Genres : 
                {data.genres && data.genres.map(genre => (
                    <span key={genre.id}><Badge>{genre.name}</Badge> </span>
                ))}

              {/* <span> {data.genres[0].name}, </span>
              <span>{data.genres[1].name}</span> */}
            </div>
            <div className="d-none d-lg-block">Budget : {data.budget}</div>
            <div className="d-none d-lg-block">Revenue : {data.revenue}</div>
            <div className="d-none d-lg-block">RunTime : {data.runtime}</div>
            <div className="d-none d-lg-block">Release Date : {data.release_date}</div>
          </Col>
        </Row>
      </Container>
      <Container className="related-movie-area" style={{marginTop: '20px', marginBottom:'10px'}}>
        <div className='badge'>
          <Badge variant={similarClicked ? "danger": "light"} 
            className={similarClicked ? "bg-danger similar active" : "bg-light similar inactive"}
            style={{marginRight:'10px', padding:'10px', cursor:'pointer'}} 
            onClick={showSimilarMovies}>연관영화</Badge>

          <Badge variant={recommendationsClicked ? "primary" : "light"}
            className={recommendationsClicked ? "bg-primary recommendations active" : "bg-light recommendations inactive"}
            style={{padding:'10px',  cursor:'pointer'}} 
            onClick={showRecommendations}>추천영화</Badge>
        </div>
        <div>
          {isSimilar ?<SimilarMovies id={id}/> : <Recommendations id={id} />}
        </div>
      </Container>
      <Container className="review-area" style={{marginTop: '10px'}}>
        <div>
          <h3 style={{border: '2px solid red', borderRadius: '5px', padding:'10px', marginTop:'20px'}}
          >
            Reviews</h3>
        </div>
        <div>
          <Reviews id={id} />
        </div>
      </Container>
      <Container className="video-area">
        <div>
          <h3 style={{border: '2px solid red', borderRadius: '5px', padding:'10px', marginTop:'20px'}}
          >
            Video</h3>
        </div>
        <div>
          <Video id={id} />
        </div>
      </Container>
    </div>
  )
}

export default MovieDetail