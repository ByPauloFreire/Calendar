//CSS
const profileCss = {
  display: 'flex',
  border: '1px solid black',
  justifyContent: 'center',
  alignItems: 'center',
};

//Obj
const ProfileName = {
  ProfileName: '$$$',
}

//Main Func
const Profile = () => {
  return (
    <div style={profileCss}>
      <div>
      {ProfileName.ProfileName}
      </div>
    </div>
  );
};


export default Profile;
