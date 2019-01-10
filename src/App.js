import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MainContent from "./components/main/index";
import TransactionDetails from "./components/transactions/TransactionDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateItem from "./components/transactions/CreateItem";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Navbar />
            <div className={classes.layout}>
              <Switch>
                <Route exact path="/" component={MainContent} />
                <Route path="/transaction/:id" component={TransactionDetails} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/create" component={CreateItem} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
