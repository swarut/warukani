import React from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import '../../css/setting.css';

class Setting extends React.Component {
  render() {
    return (
      <div className='setting'>
        <div className='setting-item'>
          <label></label>
          <SelectField
            floatingLabelText="Frequency"
            value={'sdfsd'}
            onChange={this.handleChange}>
            <MenuItem value={1} primaryText='font' />
          </SelectField>
        </div>
      </div>
    )
  }
}

export default Setting
