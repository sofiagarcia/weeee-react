import React from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import UserData from './UserData'
import MessagePreview from './MessagePreview'
import { MessageSkeleton } from './UserCardSkeleton';



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
      <List>
        {!isLoading ? (
          users.map(user => {
            return(
              <MessagePreview key={user.username} user={user} />
              );
          })
        ) : (
          <MessageSkeleton  />
        )}
        </List>
      </Container>

  );
  }
}

export default MessageList
