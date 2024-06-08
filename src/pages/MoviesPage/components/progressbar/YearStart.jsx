import React, { useState } from 'react'
import {ProgressBar} from 'react-bootstrap'

const YearStart = ({setYearStart}) => {
	const [now, setNow] = useState(2012)
	const handleProgressChange = (newValue) => {
		setNow(newValue);
		setYearStart(newValue);
	  };
  return (
	<>
		<div>Start Year</div>
		<ProgressBar now={now} label={`${now}`} min="2001" max="2024"/>
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

export default YearStart;