import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    height: 200,
      justifyContent: "center",
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
  hero: {
    height: 600,
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center'
  },
  icons: {
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent: "center",
    alignItems: 'center'
  },
  banner: {
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent: "center",
    alignItems: 'center',
    height: 400,
  }
}));

export default function Homepage() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.hero}>
            <Typography variant="h1">Hero Element</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h2">Sub-Sections</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h2">Sub-Sections</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.banner}>
            <Typography variant="h1">Banner</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.icons}>
            <Typography variant="h2">Icons</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.icons}>
            <Typography variant="h2">Icons</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.icons}>
            <Typography variant="h2">Icons</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.icons}>
            <Typography variant="h2">Icons</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h2">Sub-Sections</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h2">Sub-Sections</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
