import React, { Component } from "react";
import { connect } from "react-redux";
import { createItem } from "../../store/actions/itemActions";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
    padding: 25,
    margin: "50px auto"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 100
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
  firstMenuEl: {
    borderBottom: 'solid 2px gray'
  }
});

class CreateItem extends Component {
  state = {
    pOrM: "-",
    amount: "",
    note: "",
    type: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id || e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createItem(this.state);
    this.setState({
      pOrM: "-",
      amount: "",
      note: "",
      type: ""
    });
  };

  render() {
    const { auth, classes } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <Paper className={classes.container}>
        <Typography variant="h4" gutterBottom>
          Create a new cash waste
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <Grid container justify="center" alignItems="center" spacing={24}>
            <Grid item xs={12} sm={1}>
              <RadioGroup
                aria-label="Gender"
                name="pOrM"
                className={classes.group}
                value={this.state.pOrM}
                onChange={this.handleChange}
              >
                <FormControlLabel value="+" control={<Radio />} label="P" />
                <FormControlLabel value="-" control={<Radio />} label="M" />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                id="amount"
                label="Amount"
                style={{ margin: 8 }}
                value={this.state.amount}
                onChange={this.handleChange}
                type="number"
                fullWidth
                variant="outlined"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="type">Type</InputLabel>
                <Select
                  value={this.state.type}
                  onChange={this.handleChange}
                  input={<Input name="type" id="type" />}
                >
                  <MenuItem className={classes.firstMenuEl} value={"salary"}>Salary</MenuItem>
                  <MenuItem value={"house"}>House</MenuItem>
                  <MenuItem value={"car"}>Car</MenuItem>
                  <MenuItem value={"food"}>Food</MenuItem>
                  <MenuItem value={"clothes"}>Clothes</MenuItem>
                  <MenuItem value={"health"}>Health</MenuItem>
                  <MenuItem value={"transportation"}>Transportation</MenuItem>
                  <MenuItem value={"entertainment"}>Entertainment</MenuItem>
                  <MenuItem value={"other_expenses"}>Other expenses</MenuItem>
                </Select>
                <FormHelperText>Select the type of the expense</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item sm={1}/>
            <Grid item xs={12} sm={9}>
              <TextField
                id="note"
                label="Note"
                style={{ margin: 8 }}
                value={this.state.note}
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
            <Grid item xs={12} sm={2}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createItem: item => dispatch(createItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateItem));
