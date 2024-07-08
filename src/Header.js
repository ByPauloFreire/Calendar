import Month from './Month';
import Profile from './Profile';

const HeaderCss = {    
  display: 'grid',
  gridTemplateColumns: '60% 40%',
  height: '25vh',
  border: '1px solid #000',
};

const Header = () => {
  return (
    <div style={HeaderCss}>
      <Month/>
      <Profile/>
    </div>
  );
};

export default Header;