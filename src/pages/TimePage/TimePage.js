import React from 'react';
import {useNavigate} from 'react-router-dom'
import './TimePage.style.css'

const TimePage = () => {
	let title = localStorage.getItem('title')
	const navigate = useNavigate()
    const chooseSeat = (room, timeInfo) => {
        localStorage.setItem('room', room);
        localStorage.setItem('time', timeInfo);
        navigate('/choice')
    };

    const goHome = () => {
        navigate('/')
    };

    const goMyPage = () => {
        navigate('/mypage')
    };

    return (
        <div>
            
            <div className="container time">
                <div className="col-times">
                    <div className="info-movie">
                        <span id="i15">15</span>
                        <span id="title"></span>
                        <span id="onair">상영중</span>
                        <span id="etc">134분/ 2024.02.22 개봉</span>
                    </div>

                    <div className="type-hall">
                        <div className="info-hall">
                            <span className="room">SCREENX 2D</span>
                            <span>| 4관[SCREENX] 8층</span>
                            <span>| 총 124석</span>
                        </div>
                        <div className="info-timetable">
                            <ul className="seats">
                                {/* Seats information for SCREENX 2D */}
                            </ul>
                        </div>
                    </div>

                    <div className="type-hall">
                        <div className="info-hall">
                            <span className="room">2D</span>
                            <span>| 2관[LCK관] 6층</span>
                            <span>| 총 174석</span>
                        </div>
                        <div className="info-timetable">
                            <ul className="seats">
                                {/* Seats information for 2D */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimePage;
