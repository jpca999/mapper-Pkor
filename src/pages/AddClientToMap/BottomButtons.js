import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));


const BottomButtons = ()=>{
  const classes = useStyles();

    return (
        <div >
             <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >

          Save
      </Button>
        </div>
    );
}

export default BottomButtons;
