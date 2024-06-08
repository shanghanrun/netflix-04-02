import React, {useState} from 'react'
import {Alert, Container, Button} from 'react-bootstrap'
import { useReviews } from '../../../hooks/useReviews';


const Reviews = ({id}) => {
	const {data,isLoading, isError,error} = useReviews({id});
  	console.log('Reviews :', data);
	const [expandedId, setExpandedId] = useState(null);

    const toggleExpanded = (reviewId) => {
        if (expandedId === reviewId) {
            setExpandedId(null);
        } else {
            setExpandedId(reviewId);
        }
    };


  	if(isLoading){
	return <h1>Loading...</h1>
	}
	if(isError){
		return <Alert vairant="danger">{error.message}</Alert>
	}

  return (
        <Container className="review">
            {data.results.length > 0 
				?(data.results.map((item, index) => (
					<div key={index} style={{ border: '2px solid gray', padding: '20px', marginBottom: '5px', marginRight:'25px' }}>
						<h5 style={{ color: '#59abfd' }}>Author: {item.author}</h5>
						<div style={{textAlign:'start'}}>
							{expandedId === item.id ? item.content : `${item.content.slice(0, 300)}${item.content.length > 300 ? '...' : ''}`}
						</div>
						{item.content.length > 300 && (
							<Button variant="link" onClick={() => toggleExpanded(item.id)}>
								{expandedId === item.id ? '접기' : '더보기'}
							</Button>
						)}
						<div style={{ color: 'gray' }}>{item.created_at}</div>
					</div>)))
				: (
					<div>No Reviews</div>
			)}
        </Container>
    );
}

export default Reviews;