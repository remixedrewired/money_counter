import React from 'react'
import TransactionSummary from './TransactionSummary'
import { Link } from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    padding: 25,
    margin: '0 auto'
  }
};

const ProjectList = ({items, classes}) => {
  return (
    <Grid className={classes.container} container direction='column' spacing={24}>
      { items && items.map((item, index) => {
        return (
          <Grid item key={index} >
            <Link to={'/transaction/' + item.id} key={item.id}>
              <TransactionSummary item={item} />
            </Link>
          </Grid>
          
        )
      })}  
    </Grid>
  )
}

export default withStyles(styles)(ProjectList)
