import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserData from './UserData';
import UserCard from './UserCard';
import {UserCardSkeleton} from './UserCardSkeleton';



class UserGrid extends UserData {
  state = {
    users: [],
    isLoading: true,
    errors: null
  };

  render() {
    const { isLoading, users } = this.state;

    return(

          <Grid container>
            {!isLoading ? (
              users.map(user => {
                return <UserCard key={user.username} user={user} />
                ;
              })
            ) : (
               <UserCardSkeleton variant="rect" width={260}  />
            )}
          </Grid>

  );
  }
}

export default UserGrid
