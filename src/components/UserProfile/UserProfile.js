import React, { Component } from "react";
import "./UserProfile.css";

class UserProfile extends Component {
  render() {
    const { profileImg } = this.props;
    return (
      <div className="user-profile">
        <div className="user-profile__name">
          <p className="user-profile__name__p">Anonymous User</p>
        </div>
        {/* eslint-disable-next-line */}
        <a href="#">
          <img
            className="user-profile__icon"
            src={profileImg}
            alt="user-profile"
          />
        </a>
      </div>
    );
  }
}

export default UserProfile;
