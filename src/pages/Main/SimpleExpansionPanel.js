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
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Account Number Field</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>

          <Typography paragraph>
              Max chars,
          </Typography>

          <Typography paragraph>
            Right Align / Left Align
          </Typography>

          <Typography paragraph>
            Left /Right padding 
          </Typography>

        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Company Name Field</Typography>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails>

        <Typography style={{display: 'inline-block'}}>
          <InputAdornments />
        </Typography>
        
        <Typography style={{display: 'inline-block'}}> Rules ---------------Rules 
          <Typography paragraph>
     
            <CheckboxLabels />

            <RadioButtonsGroup />
          </Typography>
        </Typography>


        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Header field 1</Typography>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>



      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Detail 1 Field</Typography>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
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