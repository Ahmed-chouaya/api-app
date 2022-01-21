import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./User.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 180,
  },
});

const User = ({user}) => {
  const classes = useStyles();

  return (
    <div className="user">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://png.pngtree.com/png-vector/20191104/ourmid/pngtree-businessman-avatar-cartoon-style-png-image_1953664.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`UserName: ${user.username}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`Email: ${user.email}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`City: ${user.address.city}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`Phone: ${user.phone}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default User;
