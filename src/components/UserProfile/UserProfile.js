import React, { Component } from 'react';
import './UserProfile.css';

class UserProfile extends Component {
  render() {
    const { profileImg } = this.props;
    return (
      <div className="UserProfile">
        <div className="UserProfile__Name">
          <p className="UserProfile__Name__p">Anonymous User</p>
        </div>
        {/* eslint-disable-next-line */}
        <a href="#">
            <img className="UserProfile__Icon" src={profileImg} alt="user-profile"></img>
        </a>
      </div>
    );   
  }
}

export default UserProfile;