import Header from './Header';
import Daygrid from './Daygrid';
import Weekgrid from './Weekgrid';

const mainGrid = {
    width: '75vw',
    height:'75vh',
    border: '2px solid #000',
    margin: '10%',
};

function Maingrid () {

const numberOfDays = 35;

    return (
        <div style={mainGrid}>
            <Header/>
            <Weekgrid/>
            <Daygrid numberOfDays={numberOfDays} />
        </div>
    );
}

export default Maingrid