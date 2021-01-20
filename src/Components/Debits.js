import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Debit extends Component {
  constructor(props) {  
    super(props);
    this.submitIt = this.submitIt.bind(this);
  }

submitIt(event){
    event.preventDefault();
      console.log("DEBIT SUBMIT VALUE "+event.target.debitAmount.value)
       let temp = [event.target.debitDesc.value,
                   event.target.debitAmount.value,
                   new Date().toLocaleString()]
  
        this.props.updateDebit(Number(event.target.debitAmount.value));
        this.props.updateDebitInfo(temp)      

}

  render() {

    return (
        <div className="container">
            <div className="link-conatiner">
            <ul>
            <li><Link className='a' to="/"> Home</Link></li>
            <li><Link className='a' to="/credits">Credits Page</Link></li>
            <li><Link className='a' to="/userProfile">User Profile</Link></li>
            </ul>
            </div>

         <div>  
            <div style={{margin:"10%"}}>
            <h2><div>Debits: ${(Math.round(this.props.debitAmount* 100) / 100).toFixed(2)}</div></h2>
            
          <form  onSubmit={this.submitIt}>    
            <input type='text' name="debitDesc" placeholder="Debit Description" />
            <label> </label>
            <input type='number' step='0.01' name="debitAmount" placeholder="Debit amount"/>
            <br></br><br></br>
            <input type='submit'/>
            </form>
            <br></br><br></br>
            <div className="debitsImage">
              <img src="https://www.td.com/us/en/personal-banking/images/contactless_card_component_13_card_image_tcm371-285097.jpg" width="300" height="200" alt="debit"/>
            </div>
          </div>

        <div> 
            {this.props.debitInfo.map ((x , index) =>
                <div className="creditTable" key = {index} >
                    <p>Description: {x[0]}</p>  
                    <p>Amount: ${x[1]} </p>
                    <p>Date:  {x[2]} </p>
                </div>
            )}  
        </div>                   
        </div>
        </div>
    );
  }
}

export default Debit;