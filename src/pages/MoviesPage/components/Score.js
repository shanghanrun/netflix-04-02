import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useState} from 'react'

const marks = [
  {
    value:0,
    label:'0'
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
];

function valueText(value) {
  return `${value}`;
}

export default function ScoreSlider({setScoreStart, setScoreEnd}) {
	const [value, setValue] = useState([0, 10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
	setScoreStart(newValue[0]);
    setScoreEnd(newValue[1]);
  };

  return (
	<div>
		<div>Score Range</div>
		<Box sx={{ width: 300 }}>
		<Slider
			aria-label="Custom marks"
			defaultValue={[0,10]}
			getAriaValueText={valueText}
			step={1}
			marks={marks}
			value={[value[0], value[1]]} 
			onChange={handleChange}
			valueLabelDisplay="on"
			min={0} // 슬라이더의 최소 값
			max={10} // 슬라이더의 최대 값
			color="success"
		/>
		</Box>
	</div>
  );
}