import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
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

const SignedInLinks = props => {
  return (
    <Grid container justify="flex-end" alignItems="center">
      <Avatar className={props.classes.orangeAvatar}>
        {props.profile.initials}
      </Avatar>
      <Button color="secondary" onClick={props.signOut}>
        Log out
      </Button>
    </Grid>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(SignedInLinks));
