import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import UserCard from './UserCard';
import UserCardSkeleton from './UserCardSkeleton';
import { makeStyles } from '@material-ui/core/styles';



class UserData extends React.Component {
  state = {
    users: [],
    isLoading: true,
    errors: null
  };

  getUsers() {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then(response =>
        response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          nationality: `${user.nat}`,
          email: `${user.email}`,
          image: `${user.picture.large}`,
          thumbnail: `${user.picture.thumbnail}`
        }))
      )
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getUsers();
  }

}

export default UserData
