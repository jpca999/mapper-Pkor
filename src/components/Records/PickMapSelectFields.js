import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { editField } from "../../actions";

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const PickMapSelect = (props)=>{

const dispatch = useDispatch();
console.log( '26-PickMapSelect Values =', props.values);

console.log( '28-PickMapSelectFields MappedFieldName =', props.values.MappedFieldName);

const { MappingFieldOptions, MappedFieldName } = props.values;

console.log( '32-PickMapSelectFields MappedFieldName =', MappingFieldOptions);

console.log( '34-PickMapSelectFields MappedFieldName =', MappedFieldName);

  const selectedOption = props.values.MappedFieldName;

  let itemIndex = MappingFieldOptions.findIndex(x => x === MappedFieldName);
  console.log( '  39  itemIndex  = ', itemIndex );


    const handleSelectChange = event => {
      console.log('43 -  handleSelectChange =', event.target.value);
        setMap(event.target.value);

        props.values.MappedFieldName = MappingFieldOptions[event.target.value];

        dispatch(editField(props.values._id, props.values));
      };

    const classes = useStyles();
    const [Map, setMap] = React.useState(itemIndex);

    // setMap(itemIndex);

    return (
        <React.Fragment>
              <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Pick Mapp</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={Map}
          onChange={handleSelectChange}
        >
          <MenuItem value="">
           <em>None</em>
          </MenuItem>

          {/* {MappingFieldOptions.map((item, index) => */}
          {["TYPE_CODE", "ACCOUNT_NUMBER", "POST_DATE", "ENCUMBRANCE", "JOURNAL", "AMOUNT", "D_UI_PROJECT_ID", "D_AMOUNT", "D_PERCENT"].map((item, index) =>
            <MenuItem key={index} value={index}> {item} </MenuItem>
          )}

        </Select>
      </FormControl>


        </React.Fragment>
    );
}
// export default PickMapSelect;

export default connect(null, { editField })(PickMapSelect);
