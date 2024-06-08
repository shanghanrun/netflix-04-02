import React from 'react'
import ScoreStart from './progressbar/ScoreStart'
import ScoreEnd from './progressbar/ScoreEnd'
// import ScoreStart from './component/progressbar/ScoreStart'
// import ScoreEnd from './component/progressbar/ScoreEnd'

const ScoreFilter = ({setScoreStart, setScoreEnd}) => {
	
	return(
		<>
			<div>
				<ScoreStart setScoreStart={setScoreStart} />
				<ScoreEnd setScoreEnd={setScoreEnd} />
			</div>
		</>
	)
}

export default ScoreFilter