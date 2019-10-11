import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import logo from '../assets/logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(3),
    backgroundColor: 'white',
  },
  mobile: {
    display: 'flex',
    alignItems: 'center',
  },
  desktop: {
    display:'flex',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(1),
    color: blueGrey[900],
  },
  title: {
    color: blueGrey[900],
  },
  avatar: {
    backgroundColor: indigo[800],
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <nav >
    <Toolbar className={classes.root}>
        <div className={classes.mobile}>
            <IconButton className={classes.menuButton} aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
          <div className={classes.desktop}>

              <NavLink to="/explore">
                <IconButton className={classes.menuButton} aria-label="menu">
                  <ExploreOutlinedIcon />
                </IconButton>
              </NavLink>

            <NavLink to="/messages">
              <IconButton className={classes.menuButton} aria-label="menu">
                <Badge badgeContent={4} color="primary">
                  <MailOutlinedIcon />
                </Badge>
              </IconButton>
            </NavLink>

            <NavLink to="/settings">
              <IconButton className={classes.menuButton} aria-label="menu">
                <PersonOutlineOutlinedIcon />
              </IconButton>
            </NavLink>
          </div>
            </Toolbar>
    </nav>
  );
}
