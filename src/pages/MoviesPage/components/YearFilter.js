import React, { useState, useEffect } from 'react'
import YearStart from './progressbar/YearStart'
import YearEnd from './progressbar/YearEnd'


const YearFilter = ({setYearStart, setYearEnd}) => {
	
	return(
		<>
			<div>
				<YearStart setYearStart={setYearStart}/>
				<YearEnd setYearEnd={setYearEnd}/>
			</div>
		</>
	)
}

export default YearFilter