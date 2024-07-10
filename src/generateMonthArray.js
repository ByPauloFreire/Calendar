const moment = require('moment');

function generateMonthArray(momentObject) {
  const daysInMonth = momentObject.daysInMonth();
  const monthArray = [];

  for (let i = 0; i < daysInMonth; i++) {
    const dayObject = {
      date: momentObject.clone().startOf('month').add(i, 'days').locale('pt-BR').format("DD"),
      dayName: momentObject.clone().startOf('month').add(i, 'days').locale('en').format("dddd"),
    };
    monthArray.push(dayObject);
  }

  return monthArray;
}

// Example usage
const today = moment();
const monthData = generateMonthArray(today);

console.log(monthData);
