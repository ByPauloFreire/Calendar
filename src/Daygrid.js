import React from 'react';
import Days from './Days.js';

const daygridCss = {
  display: 'grid',
  width: '100%',
  height: '70%',
  border: '1px solid black',
  backgroundColor: 'black',
  gap: '5px',
  boxSizing: 'border-box',
  gridTemplateColumns: 'repeat(7, auto)',
};

const Daygrid = ({ numberOfDays }) => {
  
  const daysArray = Array.from({ length: numberOfDays }, (_, index) => <Days key={index} dayKey={index +1} />);

  return (
    <div style={daygridCss}>
      {daysArray}
    </div>
  );
};

export default Daygrid;
