import React from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Setting extends React.Component {
  constructor(props) {
    super(props)
    this.saveSetting = this.saveSetting.bind(this)
  }
  saveSetting() {
    console.log("save setting")
  }
  render() {
    return (
      <div className='setting'>
        <div className='setting-item'>
          <SelectField
            floatingLabelText="Font"
            value={'sdfsd'}
            onChange={this.handleChange}>
            <MenuItem value={1} primaryText='font' />
            <MenuItem value={2} primaryText='font' />
            <MenuItem value={3} primaryText='font' />
            <MenuItem value={4} primaryText='font' />
          </SelectField>
        </div>
        <div className='setting-item save'>
          <RaisedButton label='Save' onClick={this.saveSetting} />
        </div>
      </div>
    )
  }
}

export default Setting
