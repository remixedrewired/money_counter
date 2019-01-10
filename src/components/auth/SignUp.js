import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "white",
    padding: 50,
    maxWidth: "50%",
    margin: "50px auto"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  form: {
    marginTop: 0
  },
  redText: {
    color: 'red'
  }
});

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError, classes } = this.props;
    if (auth.uid) return <Redirect to='/' /> 

    return (
      <Paper className={classes.container}>
      <form className={classes.form} onSubmit={this.handleSubmit}>
          <Typography variant='h5'>Sign Up</Typography>
          <Grid container justify="center" alignItems="center" spacing={24}>
            <Grid item xs={12}>
              <TextField
                  id="email"
                  label="Email"
                  style={{ margin: 8 }}
                  value={this.state.amount}
                  onChange={this.handleChange}
                  type="email"
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  id="password"
                  label="Password"
                  style={{ margin: 8 }}
                  value={this.state.amount}
                  onChange={this.handleChange}
                  type="password"
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  id="firstName"
                  label="First Name"
                  style={{ margin: 8 }}
                  value={this.state.amount}
                  onChange={this.handleChange}
                  type="text"
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  id="lastName"
                  label="Last Name"
                  style={{ margin: 8 }}
                  value={this.state.amount}
                  onChange={this.handleChange}
                  type="text"
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
          <div className={classes.redText}>
              { authError ? <p>{authError}</p> : null }
            </div>
        </form>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignUp));
