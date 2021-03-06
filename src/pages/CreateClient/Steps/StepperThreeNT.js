import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  sectioncenter:{
    textAlign: 'center',
  }
}));

function getSteps() {
  return ['Select from exiting maps', 'Give a Name', 'Create a map'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select map settings...';
    case 1:
      return 'What is an map name?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

export default function StepperThreeNT(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(2);
  const steps = getSteps();

  const handleNext = () => {
    
    props.history.push(`/records`);
    // setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    props.history.push(`/steppertwoNT`);
    // setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Divider />
      <br /><br /><br /><br /><br />
      <div className={classes.sectioncenter}>
        <Typography variant='h4'>  You're going to create a new map called: ABC map </Typography>
        <Typography variant='h4'>  based on existing map: MapXYZ </Typography>
      </div>
      <br />

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
