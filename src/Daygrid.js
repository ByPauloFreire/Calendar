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

// Helper function to calculate the starting index
const getStartIndex = (firstDay) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return daysOfWeek.indexOf(firstDay);
};

// Helper function to calculate how many days there are in the month
const getHowManyDaysMonth = moment().daysInMonth();

// COMPONENT START
const Daygrid = () => {
  // Get the first day of the current month using moment
  const firstDayOfMonth = moment().startOf('month').format('dddd'); // 'dddd' gives the full day name
  const startIndex = getStartIndex(firstDayOfMonth);

  // Create an array representing days of the month
  const daysArray = Array.from({ length: getHowManyDaysMonth }, (v, i) => ({
    date: (i + 1).toString().padStart(2, '0'),
    dayName: moment().startOf('month').add(i, 'days').format('dddd')
  }));

  const days = [];
  for (let i = 0; i < 35; i++) {
    const day = <Days key={i} index={i} startIndex={startIndex} dayInfo={daysArray[i]} />;
    days.push(day);
  }

  return (
    <div style={daygridCss}>
      {days}
    </div>
  );
};

export default Daygrid;
