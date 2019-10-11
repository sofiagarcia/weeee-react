import React from 'react';
import axios from "axios";



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
