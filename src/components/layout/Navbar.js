import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  text: {
    color: 'black'
  }
};

const Navbar = props => {
  const { auth, profile, classes } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );

  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <Link className={classes.grow} to="/">
          <Typography className={classes.text} variant="h6" color="inherit" noWrap>
            Money Counter
          </Typography>
        </Link>
        {links}
      </Toolbar>
      
    </AppBar>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
