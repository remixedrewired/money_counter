import React, { Component } from "react";
import TransactionsList from "../transactions/TransactionsList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Statistics from '../stats';

const styles = theme => ({
  list: {
    overflow: "auto",
    maxHeight: "400px"
  }
});

class Dashboard extends Component {
  render() {
    const { items, auth, classes } = this.props;
    const filteredItems = items && items.filter(item => {
      return item.authorId === auth.uid;
    });
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <Grid container className={classes.container}>
        <Grid className={classes.list} item sm={6}>
          <TransactionsList items={filteredItems} />
        </Grid>
        <Grid className={classes.list} item sm={6}>
          <Statistics />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.firestore.ordered.transactions,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "transactions", orderBy: ["createdAt", "desc"] },
    { collection: "users"}
  ])
)(withStyles(styles)(Dashboard));
