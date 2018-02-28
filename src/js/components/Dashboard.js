import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
// import '../../css/dashboard.css'

class Dashboard extends React.Component {
  render () {
    return (
      <div className='dashboard'>
        <RaisedButton label="Practise" className='button1' />
        <RaisedButton label="Lookup" />
      </div>
    )
  }

}

export default Dashboard
