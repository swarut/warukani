import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../../css/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <h1>
          WaruKani
        </h1>


        <TextField hintText='Your api token' floatingLabelText='Your api token'/>
        <br/>
        <RaisedButton label='Go'></RaisedButton>
      </div>
    )
  }
}

export default Home
