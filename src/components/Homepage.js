import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import indigo from '@material-ui/core/colors/indigo';
import hero from '../assets/hero.jpg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingRight: theme.spacing(8),
    display: 'flex',
    height: 200,
    justifyContent: "center",
    alignItems: 'center',
    color: indigo[500],
  },
  hero: {
    padding: theme.spacing(4),
    paddingLeft: '5em',
    height: 600,
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center'
  },
  heroText: {
    // maxWidth: 850,
    width: '100%',
    marginTop: '4em',
    color: indigo[50],

  },
  subheading: {
    marginTop: theme.spacing(2),
    color:  '#222',
    maxWidth: 750,
  },
  icons: {
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent: "center",
    alignItems: 'center',
  },
  btn:{
    backgroundColor: indigo.A700,
    color: indigo[50],
    padding: theme.spacing(1),
    marginTop: theme.spacing(3),
    fontSize: '1em',

  },
  banner: {
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent: "center",
    alignItems: 'center',
    height: 400,
    color: indigo[900],
  },
  img: {
    position:'absolute',
    margin: 'auto',
   display: 'block',
   maxWidth: '100%',
   maxHeight: '100%',
  }
}));

export default function Homepage() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
        <Paper className={classes.hero}>
          <Box className={classes.heroText}>
            <Typography  variant="h1">Lorem Ipsum </Typography>
            <Typography className={classes.subheading} variant="h4">Excepteur sint occaecat cupidatat non proident  sunt in culpa qui officia deserunt mollit</Typography>
            <NavLink to="/explore">
            <Button
            className={classes.btn}
            endIcon={<ArrowForwardIosIcon/>}>
            Explore Now
            </Button>
            </NavLink>
            </Box>
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
