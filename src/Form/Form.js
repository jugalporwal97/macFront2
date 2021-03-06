import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withRouter } from "react-router";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    width: "100%",
    margin: theme.spacing(3, 0, 2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Form(props) {
  const classes = useStyles();

  const forms = props.FormGenerater
    ? props.FormGenerater.map((form) => {
        return form.inputType === "text" ? (
          <TextField
            key={form.id}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={form.id}
            value={form.formValue}
            label={`${form.label}`}
            name={form.name}
            type={form.type}
            onChange={(e) => props.updateForm(e, form.id)}
            // autoFocus
          />
        ) : form.inputType === "date" ? (
          <React.Fragment>
            <TextField
              key={form.id}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id={form.id}
              label={form.label}
              value={moment(new Date(form.formValue)).format("YYYY-MM-DD")}
              name={form.name}
              type={form.type}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => props.updateForm(e, form.id)}
              // autoFocus
            />
          </React.Fragment>
        ) : form.inputType === "number" ? (
          <TextField
            key={form.id}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={form.id}
            label={form.label}
            value={form.formValue}
            name={form.name}
            type={form.type}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => props.updateForm(e, form.id)}
            // autoFocus
          />
        ) : form.inputType === "select" ? (
          <TextField
            label={form.label}
            select
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => props.updateForm(e, form.id)}
            value={form.formValue}
            defaultValue={form.formValue}
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              native: true,
            }}
            hover
          >
            <option value=""></option>
            {form.value.map((load) => {
              return (
                <option value={load.val || load}>{load.payload || load}</option>
              );
            })}
          </TextField>
        ) : null;
      })
    : null;

  const remember = props.remember ? (
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
  ) : null;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {props.title}
        </Typography>
        <form className={classes.form} noValidate>
          {forms}

          {remember}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => props.submitForm(e)}
          >
            Submit
          </Button>
          <Grid container></Grid>
        </form>
      </div>
    </Container>
  );
}
export default withRouter(Form);
