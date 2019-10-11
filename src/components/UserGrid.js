import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import UserData from './UserData';
import UserCard from './UserCard';
import {UserCardSkeleton} from './UserCardSkeleton';
import { makeStyles } from '@material-ui/core/styles';



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
