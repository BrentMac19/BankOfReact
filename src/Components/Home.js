import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import "./home.css"

class Home extends Component {
  render() {
    return (
        <div className="container">
        
        <div className="title">
          <h1>Bank of React</h1>
        </div>
        <div className="img-con">
        <img src="https://www.financialsuccess.iastate.edu/blog/wp-content/uploads/2020/09/bank-getty.jpg" width="200" height="200" alt="bank"/>
        </div>
        <div className="link-conatiner">
            <ul>
          <li><Link className='a' to="/UserProfile">User Profile</Link></li>
          <li><Link className='a' to="/Login">Login</Link></li>
          <li><Link className='a' to="/Credits">Credit</Link></li>
          <li><Link className='a' to="/Debits">Debits</Link></li>
          </ul>
          </div>
          <div className="account-con">
            <ul>
            <li><AccountBalance accountBalance={this.props.accountBalance}/></li>
            </ul>
          </div>
        </div>
        
    );
  }
}

export default Home;