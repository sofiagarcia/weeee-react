import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing(5),
    display: 'flex',
    flexWrap: 'wraps',
  },
  card: {
    minWidth: 250,
    maxWidth: 250,
    height: 360,
    margin: theme.spacing(3),

  },

}))

const UserCardSkeleton = () => {
  const classes = useStyles();
  return(
    <section className={classes.root}>
     <Skeleton variant="rect" className={classes.card} />
     <Skeleton variant="rect" className={classes.card} />
     <Skeleton variant="rect" className={classes.card} />
     <Skeleton variant="rect" className={classes.card} />
     <Skeleton variant="rect" className={classes.card} />
     <Skeleton variant="rect" className={classes.card} />
     <Skeleton variant="rect" className={classes.card} />
     <Skeleton variant="rect" className={classes.card} />
     </section>
  )
}

export default UserCardSkeleton
