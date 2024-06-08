import React, { useState } from 'react'
import {ProgressBar} from 'react-bootstrap'
import './YearEnd.style.css'

const YearEnd = ({setYearEnd}) => {
	
	const [now, setNow] = useState(2024)
	const handleProgressChange = (newValue) => {
		setNow(newValue);
		setYearEnd(newValue);
	  };
  return (
	<>
		<div> End Year</div>
		<ProgressBar now={now} label={`${now}`} min="2001"
			max="2024"/>
		<input
			type="range"
			min="2001"
			max="2024"
			value={now}
			onChange={(e) => handleProgressChange(parseInt(e.target.value))}
		/>
	</>
  )
}

export default YearEnd;