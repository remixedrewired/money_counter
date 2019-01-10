import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
  avatar: {
    margin: 10
  },
  orangeAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
};

const SignedOutLinks = () => {
  return (
    <Grid container justify="flex-end" alignItems="center">
      <Button color="secondary">
        <NavLink to="/signup">Signup</NavLink>
      </Button>
      <Button color="secondary">
        <NavLink to="/signin">Login</NavLink>
      </Button>
    </Grid>
  );
};

export default withStyles(styles)(SignedOutLinks);