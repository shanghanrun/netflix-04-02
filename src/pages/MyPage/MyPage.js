import React, {useState, useEffect} from 'react';
import './MyPage.style.css'; // CSS 파일을 가져옵니다.
import {Modal, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import movieStore from '../../store/movieStore';
import {ObjectId} from 'bson';

const MyPage = () => {
	const {user, createUserMovie} = movieStore()
	const title = localStorage.getItem('title')
	const seat = localStorage.getItem('seat')
	const image = localStorage.getItem('image')

	console.log('user : ', user)
	const userId = user ? user._id : new ObjectId('66517e58e7d30c42f6c97f06').toString();

	useEffect(()=>{
		createUserMovie(userId, title,seat,image)
	},[])
 
	function moveToHM(){	
		const url = '/gotoshopping'

		// const url =process.env.REACT_APP_FRONT}  // netlify로 서비스중인 hm-shopping3full은 https라서 리다이렉트도 필요없다. 바로 이곳으로 가면 된다. 
		// 데이터는 api를 통해 받아오면 된다.
		window.location.href = url;
	}

  return (
	<div>
		<div className="mypage-body" style={{}}>
			<h1 style={{marginBottom:'20px'}}>MyPage</h1>
			<h3 style={{fontWeight:'bold', marginBottom:'20px'}}>유저 : {user?.name}</h3>
			<h3 style={{fontWeight:'bold', marginBottom:'20px'}}>이메일 : {user?.email}</h3>
			<div style={{display:'flex', gap:'20px'}}>
				<img src={image} width="400px" alt=''/>
				<div>
					<h3 style={{fontWeight:'bold', marginBottom:'20px'}}>제목 : {title}</h3>
					<h3>예약 좌석</h3>
					<div style={{borderBottom: '2px solid gray', width: '400px', marginBottom: '10px' }}></div>
					<div>{seat}</div>
					<Button style={{margin:'20px'}} onClick={moveToHM}>hm-shopping으로 이동</Button>
				</div>
			</div>
			
			
		</div>
		<div style={{height:'20px'}}></div>
		
	</div>
  )
}

export default MyPage