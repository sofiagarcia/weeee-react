import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UserData from './UserData'
import MessagePreview from './MessagePreview'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Skeleton from '@material-ui/lab/Skeleton';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));

class MessageList extends UserData {

  state = {
    users: [],
    isLoading: true,
    errors: null
  };




  render() {
    const { isLoading, users } = this.state;

    return(
      <Container >
        {!isLoading ? (
          users.map(user => {
            return(
              <List >
              <MessagePreview key={user.username} user={user} />
              </List>)

            ;
          })
        ) : (
           <p>p</p>
        )}
      </Container>

  );
  }
}

export default MessageList
