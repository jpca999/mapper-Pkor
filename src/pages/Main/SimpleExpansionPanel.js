import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckboxLabels from './CheckboxLabels';
import InputAdornments from './InputAdornments.js';
import RadioButtonsGroup from './RadioButtonsGroup.js'; 
import FieldDetails from './FieldDetails.js';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h5' align='left'> Header </Typography>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Account Number Field</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FieldDetails/>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Company Name Field</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FieldDetails/>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> Header field 1 </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FieldDetails/>
        </ExpansionPanelDetails>
      </ExpansionPanel>



      <Typography variant='h5'  align='left'> Details </Typography>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>2 Field</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FieldDetails/>
        </ExpansionPanelDetails>
      </ExpansionPanel>



      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Detail</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FieldDetails/>
        </ExpansionPanelDetails>
      </ExpansionPanel>



      <Typography variant='h5'  align='left'> Trail </Typography>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>1 Trail Field</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FieldDetails/>
        </ExpansionPanelDetails>
      </ExpansionPanel>



      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>2 Trail Field</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FieldDetails/>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}


const FieldList = [
  { fieldId: 'field_id', maxCharLength: '20', Alignment: 'left', LeftPadding: '0', RightPadding: '0' },
  { fieldId: 'field_id', maxCharLength: '20', Alignment: 'left', LeftPadding: '0', RightPadding: '0' },
  { fieldId: 'field_id', maxCharLength: '20', Alignment: 'left', LeftPadding: '0', RightPadding: '0' }, 
  { fieldId: 'field_id', maxCharLength: '20', Alignment: 'left', LeftPadding: '0', RightPadding: '0' }
 ];