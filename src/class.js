import React from 'react';

class ProfilePage extends React.Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
    console.log(this)
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}

export default ProfilePage;