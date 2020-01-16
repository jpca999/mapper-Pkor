import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const StaticInput  = () => {

  return(<div> <h1>Static  Content</h1>

       <TextField
        id="standard-basic"
        label="Input Value"
        />
    </div>);
};

export default StaticInput;
