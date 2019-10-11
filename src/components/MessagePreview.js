import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',

    backgroundColor: theme.palette.background.paper,
  },
  item: {
    margin: theme.spacing(2),
  },
  inline: {
    display: 'inline',
  },
}));

const MessagePreview = ({user}) => {
  const classes = useStyles();

  return (
<Paper>
    <ListItem alignItems="center" className={classes.item}>
      <ListItemAvatar>
          <Avatar alt={user.name} src={user.thumbnail} />
      </ListItemAvatar>

      <ListItemText
        primary="Subject Line"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {user.name}
            </Typography>
            {" — Lorem ipsum dolor sit amet, consectetu Quisque ullamcorper felis ut nisl commodo lobortis. Donec imperdiet tortor lacinia gravida pharetrar…"}
          </React.Fragment>
        }
      />

      <ListItemIcon >
        <MoreVertIcon/>
      </ListItemIcon>
    </ListItem>

</Paper>





    )
  }

  export default MessagePreview
