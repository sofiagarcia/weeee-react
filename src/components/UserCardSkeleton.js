import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({

  card: {
    minWidth: 250,
    maxWidth: 250,
    height: 360,
    margin: theme.spacing(3),
  },

  message: {
    width:'100%',
    maxWidth:1200,
    height: 72,
    margin: theme.spacing(3),
  },
}))

export const UserCardSkeleton = () => {
  const classes = useStyles();
  const elements = [...new Array(8)];

  return(
    <Grid container>
    {
      elements.map(element => {
        return <Skeleton disabledAnimate={false} variant="rect"  className={classes.card} key={element}  />
        ;
      })
    }

    </Grid>
  )
}

export const MessageSkeleton = () => {
  const classes = useStyles();
  const elements = [...new Array(10)];

  return(
    <Grid container>
    {
      elements.map(element => {
        return <Skeleton disabledAnimate={false} variant="rect"  className={classes.card} key={element}  />
        ;
      })
    }

    </Grid>
  )
}
