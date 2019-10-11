import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import indigo from '@material-ui/core/colors/indigo';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    height: 500,
      justifyContent: "center",
    alignItems: 'center',
    color: indigo[900],
  },
  banner: {
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent: "center",
    alignItems: 'center',
    height: 400,
    color: indigo[600],
  }
}));

export default function SettingsLayout() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h2">User Card</Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography variant="h2">Settings Overview</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.banner}>
            <Typography variant="h1">List of Options</Typography>
          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}
