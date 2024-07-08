// CSS START
const weekStyle = {
  border: '1px solid black',
  display: 'flex',
  justifyContent: 'space-evenly',
}

const dayBox = {
  border: '1px solid black',
  width: '14.2%',
  textAlign: 'center',
}
// CSS END


const Weekgrid = () => {

    // Simple Array with the name of the week
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Logic to create a div for each day of the previous array
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