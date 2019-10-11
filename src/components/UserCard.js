import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactCountryFlag from "react-country-flag";
import Typography from '@material-ui/core/Typography';
import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(5),
    display: 'flex'
  },
  tite: {
    color: indigo[900],
  },
  card: {
    minWidth: 250,
    maxWidth: 250,
    margin: theme.spacing(3),
    textAlign: 'left',

  },
  media: {
    height: 200,
  },
  favorite: {
    color: '#304ffe',
    marginRight: 0
  },
  icon: {
    color: indigo[900],
  },
  followed: {
    color: green[500],
  },
  bio: {
    marginTop: theme.spacing(2)
  }
}))


const UserCard = ({user}) => {
  const classes = useStyles();
  const [state, setState] = React.useState(true)
  const [fill, setFill] = React.useState(true)


  const toggle = () => {
    state ? setState(false) : setState(true);
  }

  const fillIcon = () => {
    fill ? setFill(false) : setFill(true);
  }

  return (
    <Card className={classes.card}>
      <CardActionArea disableSpacing>
        <CardMedia
          className={classes.media}
          image={user.image}
          title={user.name}
        >
        <IconButton onClick={fillIcon}>
          { fill ?
            <FavoriteBorderIcon className={classes.favorite}/> :
            <FavoriteIcon className={classes.favorite}/>
          }
        </IconButton>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom className={classes.title} variant="p" component="h2">
            {user.name}
            <IconButton edge="end" onClick={toggle} size="small">
              { state ?
                <AddCircleOutlineIcon className={classes.icon}/> :
                <CheckCircleOutlineIcon className={classes.followed} />
              }
            </IconButton>
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            <ReactCountryFlag code={user.nationality}/>
          </Typography>
          <Divider />

          <Typography gutterBottom className={classes.bio} variant="p" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>

            </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default UserCard
