const DaysCss = {
    flex: '1 0 20%',
    boxSizing: 'border-box',
    height: '10vh',
    width: '10vw',
    border: '1px solid black',
    backgroundColor: 'white',
    
  };
  
  const Days = ({ displayDate }) => {
    return (
      <div style={DaysCss}>
        {`Day ${displayDate}`}
      </div>
    );
  };
  
  export default Days;