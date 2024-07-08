import Month from './Month';
import Profile from './Profile';
import Weekgrid from './Weekgrid';

const HeaderCss = {    
  display: 'grid',
  gridTemplateColumns: '50% 50%',
  gridTemplateRows: '70%',
  height: '30%',
  border: '2px solid #000',
};

const Header = () => {
  return (
    <div style={HeaderCss}>
      <Month/>
      <Profile/>
      <Weekgrid/>
    </div>
  );
};

export default Header;