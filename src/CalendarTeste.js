const calendarStyles = {
  grid: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '1fr',
    gap: '10px', // Adjust the gap between header and daysGrid if needed
    maxWidth: '400px', // Adjust the width of the calendar
    margin: '20px auto', // Center the calendar
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '10px',
    backgroundColor: '#f0f0f0', // Background color for the header
    borderBottom: '1px solid #ccc', // Border below the header
  },
  daysGrid: {
    display: 'grid',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '1px', // Space between days
  },
  days: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#fff', // Background color for the days
    border: '1px solid #ddd', // Border around each day
  },
  highlight: {
    backgroundColor: '#e0e0e0', // Background color for highlighted days
    border: '1px solid #bbb', // Border for highlighted days
  },
};

// Example usage in a React component
const Calendar = () => (
  <div style={calendarStyles.grid}>
    <div style={calendarStyles.header}>March 2024</div>
    <div style={calendarStyles.daysGrid}>
      <div style={calendarStyles.days}>Sun</div>
      <div style={calendarStyles.days}>Mon</div>
      <div style={calendarStyles.days}>Tue</div>
      <div style={calendarStyles.days}>Wed</div>
      <div style={calendarStyles.days}>Thu</div>
      <div style={calendarStyles.days}>Fri</div>
      <div style={calendarStyles.days}>Sat</div>
      {/* Repeat these day divs for the dates of the month */}
      <div style={calendarStyles.days}></div> {/* Empty cells for alignment */}
      <div style={calendarStyles.days}></div> {/* Empty cells for alignment */}
      <div style={calendarStyles.days}>1</div>
      <div style={calendarStyles.days}>2</div>
      <div style={calendarStyles.days}>3</div>
      <div style={calendarStyles.days}>4</div>
      <div style={calendarStyles.days}>5</div>
      {/* Continue with the rest of the dates */}
    </div>
  </div>
);

export default Calendar;
