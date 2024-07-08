import moment from 'moment';
console.log(moment)

//CSS
const monthCss = {
  display: 'flex',
  border: '1px solid black',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'bebas neue',
  fontSize: '10vh',
  fontWeight: 'bold',
};

//Main Func
const Month = () => {
  const today = moment();
  const monthName = today.format('MMMM');
  const dayName = today.format('dddd');
  const year = today.format('YYYY');
  return (
    <div style={monthCss}>
      {`${monthName} ${year}`}
    </div>
  );
};


export default Month;
