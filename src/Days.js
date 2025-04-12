import React, { useState } from 'react';
import moment from 'moment';

// Days Component CSS
const daysCss = {
  flex: '1 0 20%',
  boxSizing: 'border-box',
  height: '10vh',
  width: '10vw',
  border: '1px solid black',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color 0.3s ease',
};

const getBackgroundColor = (date) => {
  const today = moment();
  const dayDate = moment(date, 'DD');

  if (dayDate.isSame(today, 'day')) {
    return 'green';
  } else if (dayDate.isBefore(today, 'day')) {
    return 'red';
  } else {
    return 'yellow';
  }
};

const Days = ({ index, startIndex, dayInfo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const backgroundColor = dayInfo ? getBackgroundColor(dayInfo.date) : 'white';
  const hoverColor = isHovered ? 'white' : backgroundColor;

  return (
// Line 45 is testing to see if there is valid info of the day, otherwise it shows as undefined and it doesnt use the background color scheme.

    <div
      style={{ ...daysCss, backgroundColor: hoverColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {index >= startIndex && dayInfo && `${dayInfo.date}`}
    </div>
  );
};

export default Days;
