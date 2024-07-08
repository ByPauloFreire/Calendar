
const weekStyle = {
    border: '1px solid black',
}

const Weekgrid = () => {

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekDays = daysOfWeek.map((day, index) => (
      <div key={index}>{day}</div>
    ));
  
    return (
      <div style={weekStyle}>
        {weekDays}
      </div>
    );
  };

export default Weekgrid