import React, { useState } from 'react'
import {ProgressBar} from 'react-bootstrap'
import './ScoreStart.style.css'

const ScoreStart = ({setScoreStart}) => {
	
	const [now, setNow] = useState(1)
	const handleProgressChange = (newValue) => {
		setNow(newValue);
		setScoreStart(newValue);
	  };
  return (
	<>
		<div>Start Score</div>
		<ProgressBar variant="danger" now={now} label={`${now}`} min="0" max="10"/>
		<input className='input-range'
			type="range"
			min="0"
			max="10"
			value={now}
			onChange={(e) => handleProgressChange(parseInt(e.target.value))}
		/>
	</>
  )
}

export default ScoreStart;