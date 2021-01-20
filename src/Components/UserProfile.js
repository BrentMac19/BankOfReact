import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return ( 
        <div className="container">
          <div className="title">
          <h1>User Profile</h1>
          </div>
            <div className="link-conatiner">
             <ul>
              <li><Link className='a'to="/">Home</Link></li>
              <li><Link className='a' to="/credits">Credits Page</Link></li>
              <li><Link className='a'to="/debits">Debits Page</Link></li>
            </ul>
            </div>
            <div className="img-con">
          <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" width="200" height="200" alt="up"/>
          </div>
            <div className="account-con">
            <ul>
          <li>Username: {this.props.userName}</li>
          <li>Member Since: {this.props.memberSince}</li>
          </ul>
          </div>
        
        </div>
    ); 
  }
}

export default UserProfile;