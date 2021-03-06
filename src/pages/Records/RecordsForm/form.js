import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { editField } from "../../../actions";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
// new
import { makeStyles } from "@material-ui/core/styles";
import FullDialogInFormFields from "../../../components/Records/FullDialogInFormFields.js";

// import PickMapSelectRecords from "../../../components/Records/PickMapSelectRecords.js";

import PickMapSelectFields from "../../../components/Records/PickMapSelectFields.js";

import PaddingSelection from '../../../components/Records/PaddingSelection/PaddingSelection';



const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

// new end

export const Form = props => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // console.log(' 18- form.js -  props =', props );
  let history = useHistory();

  const {
    values: {
      RecordName,
      FieldName,
      MappedFieldName,
      MaxCharLength,
      SequenceNumber,
      RadioValue,
      LeftPadding,
      RightPadding
    },
    // values:{ RecordName: props.fieldInfo.RecordName, FieldName, MappedFieldName,MaxCharLength,SequenceNumber,RadioValue,LeftPadding,RightPadding},
    errors,
    touched,
    // handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;
  // console.table(props);

  const dispatch = useDispatch();

  const change = (name, e) => {
    e.preventDefault();
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const handleClickVariant = variant => () => {
    console.log(" 66 - handleClickVariant  called ");
    // variant could be success, error, warning, info, or default
    console.log("  40 -  handleClickVariant called");
    enqueueSnackbar("Save Successful!", { variant });
  };

  const handleSubmit = e => {
    console.log(" 73 -  handleSubmit  in side  RECORDS/ RECORDS FORM");
    e.preventDefault();
    e.persist();
    dispatch(editField(props.values._id, props.values));
    handleClickVariant("success");
  };

  const handleSelectChange = event => {
    setAge(event.target.value);
  };

  const handleClickCancel = () => {
    console.log("86 -  handleClickCancel called ");
    // history.push('/');
    // history.reload();
    // history.pop();

    // location.reload();
  };

  const [value, setValue] = React.useState("female");

  return (
    <form onSubmit={handleSubmit}>
      {/* <TextField
        name="RecordName"
        helperText={touched.RecordName ? errors.RecordName : ""}
        error={Boolean(errors.RecordName)}
        label="RecordName"
        value={RecordName}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.RecordName) ? errors.RecordName : ""}</div>
 */}

      <TextField
        name="FieldName"
        helperText={touched.FieldName ? errors.FieldName : ""}
        error={Boolean(errors.FieldName)}
        label="FieldName"
        value={FieldName}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.name) ? errors.name : ""}</div>

      {/* <TextField
        name="MappedFieldName"
        helperText={touched.MappedFieldName ? errors.MappedFieldName : ""}
        error={Boolean(errors.MappedFieldName)}
        label="MappedFieldName"
        value={MappedFieldName}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.MappedFieldName) ? errors.MappedFieldName : ""}</div> */}

      <PickMapSelectFields  {...props} />

      <FormLabel component="legend">
      </FormLabel>

      <TextField
        name="MaxCharLength"
        helperText={touched.MaxCharLength ? errors.MaxCharLength : ""}
        error={Boolean(errors.MaxCharLength)}
        label="MaxCharLength"
        value={MaxCharLength}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.MaxCharLength) ? errors.MaxCharLength : ""}</div>

      <FormLabel component="legend">
      </FormLabel>


      {/* <TextField
        name="SequenceNumber"
        helperText={touched.SequenceNumber ? errors.SequenceNumber : ""}
        error={Boolean(errors.SequenceNumber)}
        label="SequenceNumber"
        value={SequenceNumber}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.SequenceNumber) ? errors.SequenceNumber : ""}</div> */}


      <FormLabel component="legend"></FormLabel>

      <FormLabel component="legend">
      </FormLabel>



      <PaddingSelection {...props} />


      <FullDialogInFormFields {...props} />

      <Button
        onClick={handleClickVariant("success")}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Save
      </Button>

      <Button
        onClick={handleClickCancel}
        fullWidth
        variant="contained"
        color="default"
      >
        Cancel
      </Button>
    </form>
  );
};

const mapStateToProps = state => {
  // console.log( '51 -  state.records =', state.records );
  return { records: state.records.data };
};

export default connect(null, { editField })(Form);

// https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd
