import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import { connect } from 'react-redux'

import '../../css/home.css';

class Home extends React.Component {
  
  onClick(e) {
    // store.dispatch("yo")
  }
  render() {
    return (
      <div className='Home'>
        <h1>
          WaruKani
        </h1>


        <TextField hintText='Your api token' floatingLabelText='Your api token'/>
        <br/>
        <RaisedButton label='Go' onClick={this.onClick} />
      </div>
    )
  }
}

export default Home
