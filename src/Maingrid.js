import Header from './Header';
import Daygrid from './Daygrid';

const mainGrid = {
    width: '75vw',
    height:'75vh',
    border: '2px solid #000',
    margin: '10%',
};

function Maingrid () {

const numberOfDays = 31;

    return (
        <div style={mainGrid}>
            <Header/>
            <Daygrid numberOfDays={numberOfDays} />
        </div>
    );
}

export default Maingrid