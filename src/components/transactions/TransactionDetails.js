import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  papper: {
    width: "35%",
    padding: 50,
    margin: "50px auto"
  },
  text: {
    marginBottom: 5
  }
};

const ProjectDetails = props => {
  const { transaction, auth, classes } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (transaction) {
    return (
      <Paper className={classes.papper}>
        <Typography className={classes.text} variant="h4">Type: {transaction.type}</Typography>
        <Typography className={classes.text} variant="h5">
          Amount: {`${transaction.pOrM + " " + transaction.amount}`}
        </Typography>
        <Typography className={classes.text} variant="body">Note: {transaction.note}</Typography>
        <Typography className={classes.text} variant="overline">
          Posted by {transaction.authorFirstName} {transaction.authorLastName}
        </Typography>
        <Typography className={classes.text} variant="overline">
          {moment(transaction.createdAt.toDate()).calendar()}
        </Typography>
      </Paper>
    );
  } else {
    return (
      <Paper className={classes.papper}>
        <CircularProgress className={classes.progress} />
        <Typography variant="h5">Loading project...</Typography>
      </Paper>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const transactions = state.firestore.data.transactions;
  const transaction = transactions ? transactions[id] : null;
  return {
    transaction,
    auth: state.firebase.auth
  };
};

export default compose(
  withFirestore,
  connect(mapStateToProps),
)(withStyles(styles)(ProjectDetails));
