import React, { Component } from "react";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  stats: {
    padding: 30
  },
  text: {
    padding: 10
  }
});

class Statistics extends Component {
  render() {
    const { items, classes, users, auth } = this.props;
    const userId = auth.uid;
    const balance = users && users[userId].balance;
    const filteredItems = items && items.filter(item => {
      return item.authorId === auth.uid;
    });
    const object =
      filteredItems &&
      filteredItems.reduce((acc, curr) => {
        const type = curr.type;
        const types = Object.keys(acc);
        if (!types.includes(type)) {
          acc[`${type}`] = curr.amount;
        } else {
          acc[`${type}`] = +acc[`${type}`] + +curr.amount;
        }
        return acc;
      }, {});

    return (
      <Paper className={classes.stats}>
        <Typography variant="h5">Balance: {balance}</Typography>
        {object &&
          Object.keys(object).map((item, index) => {
            return (
              <Typography
                key={index}
                className={classes.text}
                variant="overline"
              >
                {`${item.charAt(0).toUpperCase() +
                  item.slice(1) +
                  " :" +
                  object[item]} `}
              </Typography>
            );
          })}
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.firestore.ordered.transactions,
    auth: state.firebase.auth,
    users: state.firestore.data.users
  };
};

export default compose(
  withFirestore,
  connect(mapStateToProps)
)(withStyles(styles)(Statistics));
