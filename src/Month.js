import moment from 'moment';
console.log(moment)

//CSS
const monthCss = {
  display: 'flex',
  border: '1px solid black',
  justifyContent: 'center',
  alignItems: 'center',
};

//Main Func
const Month = () => {
  const today = moment();
  const monthName = today.format('MMMM');
  return (
    <div style={monthCss}>
      {monthName}
    </div>
  );
};


export default Month;
