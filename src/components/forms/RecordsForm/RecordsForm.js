import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`
  },
  container: {
    maxWidth: "200px"
  }
});

const validationSchema = Yup.object({
  FieldName: Yup.string("Enter a FieldName").required("FieldName is required"),
  MappedFieldName: Yup.string("Enter a MappedFieldName").required("MappedFieldName is required"),
  MaxCharLength: Yup.string("Enter a MaxCharLength").required("MaxCharLength is required"),
  SequenceNumber: Yup.string("Enter a SequenceNumber").required("SequenceNumber is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("")
    .min(8, "Password must contain atleast 8 characters")
    .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});

class RecordsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = data => {
    console.log(data);
  };

  render() {
    const classes = this.props;
    const values = { FieldName: "", MappedFieldName:"", MaxCharLength: "", SequenceNumber:"",   };
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={this.submit}
            />
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(RecordsForm);

//  https://codesandbox.io/s/jzjx2890oy

