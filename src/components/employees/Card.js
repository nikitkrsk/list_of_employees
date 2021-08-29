import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 370,
    margin: theme.spacing(2),
    width: 250,
    background: theme.palette.background.paper,
    borderRadius: 4,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(3, 1, 0, 1),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  position: {
    background: theme.palette.primary.main,
    padding: theme.spacing(1, 2),
    borderRadius: 10,
  },
  extraInformation: {
    display: "flex",
    margin: theme.spacing(3, 1),
    flexDirection: "column",
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: theme.spacing(0.2),
  },
}));

const Card = ({ user }) => {
  const classes = useStyles();

  const handleActionClick = (action) => {
    console.log("action", action);
  };
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Avatar
          alt={`${user.firstName} ${user.lastName}`}
          src={user.picture}
          className={classes.avatar}
        />
        <Typography variant="h6" paragraph>
          {user.firstName} {user.lastName}
        </Typography>
        <div className={classes.position}>
          <Typography variant="body2">{user.position}</Typography>
        </div>
        <div className={classes.extraInformation}>
          <Typography variant="body2">Date Of Birth: {user.dob}</Typography>
          <Typography variant="body2">
            Number of subordinates: {user.subordinates}
          </Typography>
        </div>
      </div>
      <Divider />
      <div className={classes.actions}>
        <IconButton aria-label="edit" onClick={() => handleActionClick("edit")}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => handleActionClick("delete")}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Card;
