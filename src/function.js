import React from 'react';

function ProfilePage(props) {
  const showMessage = () => {
    alert('Followed ' + props.user);
    
  };

  const handleClick = () => {
    console.log(this)
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Follow</button>
  );
}

export default ProfilePage;