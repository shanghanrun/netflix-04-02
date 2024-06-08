import  { useState, useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import './ChoicePage.style.css'; // 스타일 파일을 가져옵니다.
import movieStore from '../../store/movieStore';

const images = [
	'https://search3.kakaocdn.net/argon/656x0_80_wr/Fdw60fejriu',
	'https://search1.kakaocdn.net/argon/656x0_80_wr/1AmP7klqBiW',
	'https://search1.kakaocdn.net/argon/656x0_80_wr/5rZKc67EPJ4',
	'https://search2.kakaocdn.net/argon/656x0_80_wr/5boqAGhvpqs',
	'https://search2.kakaocdn.net/argon/550x0_65_wr/Gl1Yurbx5Df0',

	'https://image.tmdb.org/t/p/w500//dIcLgXA6R54EZ0XPSMKW4XDNCAA.jpg',
	'https://image.tmdb.org/t/p/w500//pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg',
	'https://image.tmdb.org/t/p/w500//rieMzC6JJoMVbsaUv6Rzj0fR7Px.jpg',
	'https://image.tmdb.org/t/p/w500//adMcxfUonnm9RvPImGHy25wYUks.jpg',
	'https://image.tmdb.org/t/p/w500//adMcxfUonnm9RvPImGHy25wYUks.jpg',

	'https://image.tmdb.org/t/p/w500//e0ezklncv9ApFVj50FSYJZo08oT.jpg',
	'https://image.tmdb.org/t/p/w500//kmoScy628A6JWv8mmd2ofrYv16T.jpg',
	'https://image.tmdb.org/t/p/w500//aviJMFZSnnCAsCVyJGaPNx4Ef3i.jpg',
	'https://image.tmdb.org/t/p/w500//dWR8OTRCcYDbBmd8GKsyJT73kU2.jpg',
	'https://image.tmdb.org/t/p/w500//7nPMR3QU5vl7cEmB1LE6O6yliCg.jpg',

	'https://image.tmdb.org/t/p/w500//36pYugctLa70NmwMEgXTR1G31Kq.jpg',
	'https://image.tmdb.org/t/p/w500//pvUoGZ72pZoR2SSEqNap9HneTpc.jpg',
	'https://image.tmdb.org/t/p/w500//3ovejwQO4fKOWx4VgGBJeT8CKCn.jpg',
	'https://image.tmdb.org/t/p/w500//vJUDoYNNKvBqbEPUskgvzPXGEFz.jpg',
	'https://image.tmdb.org/t/p/w500//51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg',

	'https://image.tmdb.org/t/p/w500//qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
	'https://image.tmdb.org/t/p/w500//AbFtI353N2Pggl5TxfsI2VtpUt8.jpg',
	'https://image.tmdb.org/t/p/w500//1eKWqTHp4OgKdx1QX1O9LxKHr1M.jpg',
	'https://image.tmdb.org/t/p/w500//dfS5qHWFuXyZQnwYREwb7N4qU5p.jpg',

];

const titles = [
	'인생은 아름다워',
	'interstella',
	'디바',
	'블레이드러너2045',
	'라푼젤',
	'미션임파서블',
	'LEO',
	'No Way Up',
	'Boudica',
	'Boudica',
	'Papao MAMA',
	'그대들은 어떻게 살것인가',
	'Strangers',
	'익스펜더블4',
	'The Farm',
	'The Bricklayer',
	'Menjelang Magrib',
	'캐리비언의 해적',
	'Demon Slayer',
	'Grand Turismo',
	'Super Mario Bros',
	'The Zone of Interest',
	'Motal Kombat',
	'57 Seconds'
];
const cardWidth =70;
const cardHeight = 100;
const numberOfCards = images.length;
const angleBetweenCards = 360 / numberOfCards;
const centerX = window.innerWidth /2;
const centerY = window.innerHeight /2;
const radius = 320;

function ChoicePage2() {
    const isFirstClick = useRef(true);
    const prevAngle = useRef(0);
    const reserveButton = useRef(null);
    const cardIndex = useRef(-1);
    const [init, setInit] = useState(false);
	const [init2, setInit2] =useState(false)
	const initialAngle = useRef(0)
    const {setIndex, setTitle} = movieStore()
	const navigate = useNavigate()

    const handleCardClick = (index) => {
		const cards = document.querySelectorAll('.card'); // 모든 카드의 DOM 요소를 가져옴
		const clickedCard = cards[index]; // 클릭된 카드의 인덱스를 사용하여 해당 카드의 DOM 요소를 찾음
		
		if (isFirstClick.current) {
			// 클릭된 카드에 대한 작업을 수행
			const cardRect = clickedCard.getBoundingClientRect();
			
			const deltaX = cardRect.left + cardRect.width / 2 - centerX;
			const deltaY = cardRect.top + cardRect.height / 2 - centerY;
			prevAngle.current = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

			clickedCard.querySelector('img').classList.add('isSecond');
			clickedCard.querySelector('img').style.transform = 'scale(4)';
			
			moveToCenter(clickedCard);

			const button = document.createElement('button');
			button.textContent = '좌석예약';
			button.classList.add('reserve-button');
			button.addEventListener('click', handleReserveClick);
			reserveButton.current = button;
			clickedCard.appendChild(button);

			document.querySelectorAll('.card').forEach((card, i) => {
				if (i !== index) {
					card.classList.add('transparent');
				}
			});
            // 클릭 이벤트 발생 후 isFirstClick를 false로 설정
            isFirstClick.current = false;
            cardIndex.current = index;
		} else {
			setInit(!init)


			// clickedCard.querySelector('img').classList.remove('isSecond');

            // if (reserveButton.current) {
            //     reserveButton.current.remove();
            //     reserveButton.current = null;
            // }

            // document.querySelectorAll('.card').forEach((card, i) => {
            //     if (i !== index) {
            //         card.classList.remove('transparent');
            //     }
            // });
			// 카드를 초기 위치로 되돌립니다.
			// clickedCard.style.transition = 'transform 0.5s ease';
			
			// clickedCard.style.transform = `rotate(${-prevAngle.current-initialAngle.current+90}deg) translate(0, 0) scale(0.25)`;
			// clickedCard.style.transform = `translate(0, 0) rotate(${initialAngle.current+90}deg) scale(0.25)`;

			
            // 클릭 이벤트 발생 후 isFirstClick를 true로 설정
            isFirstClick.current = true;
            cardIndex.current = -1;
            // 전체 카드를 새롭게 만든다.
			setInit(!init)
		}
	};

    const moveToCenter = (card) => {
        const cardRect = card.getBoundingClientRect();
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = `translate(${centerX - cardRect.width / 2 - cardRect.left}px, ${centerY - cardRect.height / 2 - cardRect.top}px)`;
    };

    const handleReserveClick = () => {
        const index = cardIndex.current;
        const title = titles[index];
        console.log('좌석예약 버튼 클릭');
        console.log('index :', index)
        console.log('title :',title)
        setIndex(index)
        setTitle(title)
        navigate('/reserve');
    };
	
	useEffect(()=>{
		console.log('재랜더링')
		// setInit2(true)
	},[init])

    return(
		<div>
			<div className="table"
				style={{width: `${radius*2}px`, height:`${radius*2}px`,
					borderRadius: '50%', backgroundColor:'#FFD700',
					position:'absolute', top: `${centerY -radius}px`,
					left: `${centerX - radius}px`
				}}
			></div>
			<div className="reservation-text"
				style={{ fontSize:'50px', position:'absolute',
					top: `${centerY -58}px`, left:`${centerX-160}px`
				}}
			>
				첫클릭-> 가운데 <br /> 재클릭-> 원위치
			</div>
			<div>
				{images.map((imageUrl, index) => {
					const angle = angleBetweenCards * index;
					initialAngle.current =angle; // +90해야 맞는다...
					let x = centerX + radius * Math.cos(angle * Math.PI / 180);
					let y = centerY + radius * Math.sin(angle * Math.PI / 180);

					return (
						<Card
							key={index}
							imageUrl={imageUrl}
							angle={angle}
							x={x} y={y}
							handleCardClick={() => handleCardClick(index)}
						/>
					);
				})}
			</div>
		</div>
	);
}
function Card({index, imageUrl, angle, x,y,handleCardClick}){
	const handleClick = () => {
        handleCardClick(index); 
    };

	return(
		<div className="card"
			style={{ width:`${cardWidth}px`, height:`${cardHeight}px`,
				backgroundColor:'#FFA500', position:'absolute',
				top:`${y-cardHeight/2}px`, left:`${x-cardWidth/2}px`,
				transform: `rotate(${angle+90}deg)`
			}}
			onClick={handleClick}
		>
			<img src={imageUrl} width='100%' height='100%' 	objectFit='cover'alt=''/>
		</div>
	)
}

export default ChoicePage2;