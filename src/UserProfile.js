// UserProfile.js (updated)
import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    const { name, age, location } = this.props;
    return (
      <div>
        <h2>User Profile</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
      </div>
    );
  }
}

UserProfile.defaultProps = {
  name: 'Unknown',
  age: 'N/A',
  location: 'Not specified',
};

export default UserProfile;