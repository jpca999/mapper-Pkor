import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import RightPadComponent from './RightPadComponent.js';
import LeftPadComponent from './LeftPadComponent.js';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#00B3F0'
    }
  }
},
)

const renderPaddComponents = (selectedValue) => {
  console.log('17 -  selectedValue = ', selectedValue);
  if (selectedValue === 'LeftAligned') {
    return (<>
      <LeftPadComponent />
    </>);
  }
  else if (selectedValue === 'RightAligned') {
    return (<>
      <RightPadComponent />
    </>);
  }

}

const PaddingSelection = (props) => {

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    console.log('21-handleChange event.target.value = ', event.target.value);
    setSelectedValue(event.target.value);
  };


  return (<React.Fragment>
    <MuiThemeProvider theme={theme}>

    <FormLabel component="legend">Please Select Alignment</FormLabel>

    <FormControlLabel
      checked={selectedValue === 'None'}
      onChange={handleChange}
      value="None"
      control={<Radio color="secondary" />}
      // onChange={handleChange(None)}
      label="None"
      labelPlacement="end"
    />

    <FormControlLabel
      checked={selectedValue === 'LeftAligned'}
      onChange={handleChange}
      value="LeftAligned"
      control={<Radio color="secondary" />}
      // onChange={handleChange(None)}
      label="LeftAligned"
      labelPlacement="end"
    />


    <FormControlLabel
      checked={selectedValue === 'RightAligned'}
      onChange={handleChange}
      value="RightAligned"
      control={<Radio color="secondary" />}
      // onChange={handleChange(None)}
      label="RightAligned"
      labelPlacement="end"
    />

    {renderPaddComponents(selectedValue)}
    </MuiThemeProvider>
  </React.Fragment>);
};

export default PaddingSelection;







