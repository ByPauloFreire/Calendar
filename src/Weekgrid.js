
const weekStyle = {
  border: '1px solid black',
  display: 'flex',
  justifyContent: 'space-evenly',
}

const dayBox = {
  border: '1px solid black',
  width: '14.2%'
}

const Weekgrid = () => {

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weekDays = daysOfWeek.map((day, index) => (
      <div style={dayBox} key={index}>{day}</div>
    ));
  
    return (
      <div style={weekStyle}>
        {weekDays}
      </div>
    );
  };

export default Weekgrid