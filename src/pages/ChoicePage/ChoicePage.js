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

function ChoicePage() {
    const isFirstClick = useRef(true);
    const prevAngle = useRef(0);
    const reserveButton = useRef(null);
    const cardIndex = useRef(-1);
    const [init, setInit] = useState(false);
    const {setIndex, setTitle, setImage} = movieStore()

	const navigate = useNavigate()

    useEffect(() => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const radius = 320; // 2배 확대된 원의 반지름

        const table = document.createElement('div');
        table.classList.add('table');
        table.style.width = radius * 2 + 'px';
        table.style.height = radius * 2 + 'px';
        table.style.borderRadius = '50%';
        table.style.backgroundColor = '#FFD700'; // 원의 배경색
        table.style.position = 'absolute';
        table.style.top = centerY - radius + 'px';
        table.style.left = centerX - radius + 'px';
        document.body.appendChild(table);

        const reservationText = document.createElement('div');
        reservationText.innerHTML = '첫클릭-> 가운데 <br> 재클릭-> 원위치';
        reservationText.classList.add('reserve-text');
        reservationText.style.fontSize = '50px';
        reservationText.style.position = 'absolute';
        reservationText.style.top = centerY - 58 + 'px'; // 수직 중앙 정렬
        reservationText.style.left = centerX - 160 + 'px'; // 수평 중앙 정렬
        document.body.appendChild(reservationText);

        const numberOfCards = images.length;
        const cardWidth = 70;
        const cardHeight = 100;
        const angleBetweenCards = 360 / numberOfCards;

        images.forEach((imageUrl, index) => {
            const angle = angleBetweenCards * index;

            let x = centerX + radius * Math.cos(angle * Math.PI / 180);
            let y = centerY + radius * Math.sin(angle * Math.PI / 180);

            const card = document.createElement('div');
            card.classList.add('card');
            card.style.width = cardWidth + 'px';
            card.style.height = cardHeight + 'px';
            card.style.backgroundColor = '#FFA500'; // 카드의 배경색
            card.style.position = 'absolute';
            card.style.top = y - cardHeight / 2 + 'px';
            card.style.left = x - cardWidth / 2 + 'px';
            card.style.transform = `rotate(${angle + 90}deg)`;

            const img = document.createElement('img');
            img.src = imageUrl;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';

            card.appendChild(img);
            document.body.appendChild(card);

            card.addEventListener('click', () => handleCardClick(card, index));
        });

        return () => {
            document.body.removeChild(table);
            document.body.removeChild(reservationText);
            document.querySelectorAll('.card').forEach(card => {
                card.removeEventListener('click', handleCardClick);
                document.body.removeChild(card);
            });
        };
    }, [init]); // useEffect가 최초 렌더링 시에만 실행되도록 []를 전달합니다.

    const handleCardClick = (card, index) => {
        if (isFirstClick.current) {
            // 이전의 회전 각도를 직접 DOM 요소에 저장합니다.
            const cardRect = card.getBoundingClientRect();
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const deltaX = cardRect.left + cardRect.width / 2 - centerX;
            const deltaY = cardRect.top + cardRect.height / 2 - centerY;
            prevAngle.current = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            card.querySelector('img').classList.add('isSecond');
            card.querySelector('img').style.transform = 'scale(3)';
            
            moveToCenter(card)

            const button = document.createElement('button');
			button.textContent = '좌석예약';
			button.classList.add('reserve-button');
			button.addEventListener('click', handleReserveClick);
			reserveButton.current =button; // reserveButton을 button으로 설정
			card.appendChild(button);

			document.querySelectorAll('.card').forEach((card, i) => {
				if (i !== index) {
					card.classList.add('transparent');
				}
			});
            // 클릭 이벤트 발생 후 isFirstClick를 false로 설정
            isFirstClick.current = false;
            cardIndex.current = index;
        } else {
            
            card.querySelector('img').classList.remove('isSecond');

            if (reserveButton.current) {
                reserveButton.current.remove();
                reserveButton.current = null;
            }

            document.querySelectorAll('.card').forEach((card, i) => {
                if (i !== index) {
                    card.classList.remove('transparent');
                }
            });
            // 클릭 이벤트 발생 후 isFirstClick를 true로 설정
            isFirstClick.current = true;
            cardIndex.current = -1;
            setInit(!init)
        }
    };

    const moveToCenter = (card) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const cardRect = card.getBoundingClientRect();
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = `translate(${centerX - cardRect.width / 2 - cardRect.left}px, ${centerY - cardRect.height / 2 - cardRect.top}px)`;
    };

    // const rotateToPreviousAngle = (card, angle) => {
    //     if (angle < 0) {
    //         angle += 360;
    //     }
    //     card.style.transition = 'transform 0.5s ease';
    //     card.style.transform = `rotate(${angle}deg)`;
    // };

    const handleReserveClick = () => {
        const index = cardIndex.current;
        const title = titles[index];
        const image = images[index];
        console.log('좌석예약 버튼 클릭');
        console.log('index :', index)
        console.log('title :',title)
        setIndex(index)
        setTitle(title)
        setImage(image)
        localStorage.setItem('image', image)
        navigate('/reserve');
    };

    return null; // 이 컴포넌트는 아무것도 반환하지 않습니다.
}

export default ChoicePage;