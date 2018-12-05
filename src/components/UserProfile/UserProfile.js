import React, { Component } from 'react';
import './UserProfile.css';

class UserProfile extends Component {
  render() {
    const { profileImg } = this.props;
    return (
        // eslint-disable-next-line
        <a href="#">
            <img className="UserProfile" src={profileImg} alt="user-profile"></img>
        </a>
    );   
  }
}

export default UserProfile;