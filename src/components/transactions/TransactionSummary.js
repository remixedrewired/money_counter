import React from "react";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: 200,
    marginBottom: 10,
  },
  text: {
    padding: '5px 10px 5px 10px'
  }
};

const ProjectSummary = ({ item, classes }) => {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Typography className={classes.text} variant="h6">{`${item.pOrM + item.amount}`}</Typography>
        {/* <Typography className={classes.text} variant="subtitle1">
          Posted by {item.authorFirstName} {item.authorLastName}
        </Typography> */}
        <Typography className={classes.text} variant="overline">
          {moment(item.createdAt.toDate()).calendar()}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(ProjectSummary);
