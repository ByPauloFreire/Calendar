//CSS
const monthCss = {
  display: 'flex',
  border: '1px solid black',
  justifyContent: 'center',
  alignItems: 'center',
};

//Obj
const monthName = {
  monthName: 'July 2024',
}

//Main Func
const Month = () => {
  return (
    <div style={monthCss}>
      {monthName.monthName}
    </div>
  );
};


export default Month;
