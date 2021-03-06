import React from "react";
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import { connect } from "react-redux";
import { createField } from '../../actions';
import { useHistory } from "react-router-dom";
import AttributeSelectionNew from './AttributeSelectionNew/Index';
import PaddingSelection from '../../components/Records/PaddingSelection/PaddingSelection';

import CancelDeleteButtons from '../../components/Buttons/CancelDeleteButtons';

import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#00B3F0'
    }
  }
},
)

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: '#00B3F0',
    '&:hover': {
      backgroundColor: '#00B3F0',
      borderColor: '#00B3F0',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#00B3F0',
      borderColor: '#00B3F0',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  parent: {
    display: 'flex',
  },
  child: {
    marginLeft: 'auto',
    order: '2',
    marginRight: 10,
  },
  saveCancelBtn: {
    marginLeft: 'auto',
    marginRight: 40,
    color: '#F15A29',
  },
  cancelBtn: {
    marginLeft: 'auto',
    marginRight: 40,
    color: '#00B3F0',
  },
  deleteBtn: {
    marginLeft: 'auto',
    marginRight: 40,
    color: '#F15A29',
  },
  paddingBtwElements:{
    marginTop: 20,
  }
}));



const Form = props => {
  const classes = useStyles();
  let history = useHistory();


  const {
    values:{ MapId, RecordId, FieldName, MappedFieldName, MaxCharLength, SequenceNumber, RadioValue, PaddingLeft, PaddingRight},
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;
  // console.table(props);

  console.log('27 -  final props in form.js = ' , props );


  const handleSaveClick = () =>{
    console.log('28 -  called handleSaveClick inside form.js ' );
    // props.createClient(props.values);
    console.log('33 -  this.props ', props );
    props.createField(props.values);
    history.goBack();
  }

  const handleCancelClick = () =>{
    console.log('64 -  called handleCancelClick' );
    history.goBack();
  }

  const handleDeleteBtn = () =>{
    console.log('107 -  calling handleDeleteBtn' );
  }



  const change = (name, e) => {
    e.preventDefault();
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const [value, setValue] = React.useState('female');
  // const handleChange = event => {
  //   setValue(event.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>

      {/* <TextField
        name="MapId"
        helperText={touched.MapId ? errors.MapId : ""}
        error={Boolean(errors.MapId)}
        label="MapId"
        value={MapId}
        onChange={handleChange}
        disabled
        fullWidth
      />
      <div>{Boolean(errors.MapId) ? errors.MapId : ""}</div> */}

{/* RecordId */}

{/* <TextField
        name="RecordId"
        helperText={touched.RecordId ? errors.RecordId : ""}
        error={Boolean(errors.RecordId)}
        label="RecordId"
        value={RecordId}
        onChange={handleChange}
        disabled
        fullWidth
      />
      <div>{Boolean(errors.RecordId) ? errors.RecordId : ""}</div> */}


      {/* <TextField
        name="FieldName"
        helperText={touched.FieldName ? errors.FieldName : ""}
        error={Boolean(errors.FieldName)}
        label="FieldName"
        value={FieldName}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.FieldName) ? errors.FieldName : ""}</div>
 */}


      <AttributeSelectionNew className={classes.paddingBtwElements} {...props}/>

      <TextField
        name="MaxCharLength"
        className={classes.paddingBtwElements}
        helperText={touched.MaxCharLength ? errors.MaxCharLength : ""}
        error={Boolean(errors.MaxCharLength)}
        label="MaxCharLength"
        value={MaxCharLength}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.MaxCharLength) ? errors.MaxCharLength : ""}</div>

      <PaddingSelection className={classes.paddingBtwElements} {...props}/>

      <FormLabel component="legend"></FormLabel>
      <br/>
      <Divider />


      <CancelDeleteButtons  handleCancelClick={handleCancelClick}
                            handleDeleteBtn={handleDeleteBtn}
                            handleSaveClick={handleSaveClick}

      />

    </form>
  );
};


const mapStateToProps = (state) =>{
  console.log( ' state =', state );
};

export default connect(mapStateToProps, {
  createField
})(Form);

// export default Form