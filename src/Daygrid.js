import React from 'react';
import moment from 'moment';
import Days from './Days.js';

// CSS START
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
// CSS END


// COMPONENT START
const Daygrid = () => {
  const today = moment();
  const dayOfMonth = today.date();
  const lastDay = today.endOf('month').date();
  const teste = lastDay - dayOfMonth;
  const numberOfDays = 35;
  const daysArray = Array.from({ length: numberOfDays }, (_, index) => <Days key={index} displayDate={dayOfMonth + index} />);

  return (
    <div style={daygridCss}>
      {daysArray}
    </div>
  );
};
  
export default Daygrid;
