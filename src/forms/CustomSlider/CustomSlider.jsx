import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

const CustomSlider = () => {
  const [value, setValue] = React.useState([0, 20000000]);
  const minPrice = 0;
  const maxPrice = 20000000;

  // console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        getAriaValueText={valuetext}
        min={minPrice}
        max={maxPrice}  
        step={100000}
      />
      <span style={{fontWeight: 'bold'}}>{value[0].toLocaleString('vi-VN')} VNĐ</span>
      <span style={{fontWeight: 'bold'}}> - {value[1].toLocaleString('vi-VN')} VNĐ</span>
    </Box>
  );


}

export default CustomSlider;
