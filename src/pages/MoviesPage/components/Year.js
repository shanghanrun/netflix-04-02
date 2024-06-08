import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useState} from 'react'

const marks = [

  {
    value: 1980,
    label: '1980',
  },
  {
    value: 1985,
    label: '1985',
  },
  {
    value: 1990,
    label: '1990',
  },
  {
    value: 1995,
    label: '1995',
  },
  {
    value: 2000,
    label: '2000',
  },
  {
    value: 2005,
    label: '2005',
  },
  {
    value: 2010,
    label: '2010',
  },
  {
    value: 2015,
    label: '2015',
  },
  {
    value: 2020,
    label: '2020',
  },
  {
    value: 2025,
    label: '2025',
  }
];

function valueText(value) {
  return `${value}`;
}

export default function YearSlider({setYearStart, setYearEnd}) {
	const [value, setValue] = useState([1980, 2025]);

  const handleChange = (event, newValue) => {
	console.log('newValue[0] :', newValue[0])
	console.log('newValue[1] :', newValue[1])
    setValue(newValue);
	setYearStart(newValue[0]);
    setYearEnd(newValue[1]);
  };

  return (
	<div>
		<div>Year Range</div>
		<Box sx={{ width: 300 }}>
		<Slider
			aria-label="Custom marks2"
			// defaultValue={[1980,2025]}
			getAriaValueText={valueText}
			step={5}
			marks={marks}
			value={[value[0], value[1]]} 
			onChange={handleChange}
			valueLabelDisplay="on"
			min={1980} // 슬라이더의 최소 값
			max={2025} // 슬라이더의 최대 값
			color="error"
		/>
		</Box>
	</div>
  );
}