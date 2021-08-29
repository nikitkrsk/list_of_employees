import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CallMadeIcon from "@material-ui/icons/CallMade";

const useStyles = makeStyles((theme) => ({
  helper: {
    position: "absolute",
    top: 70,
    left: 40,
  },
  content: {
    minHeight: "100vh",
    margin: theme.spacing(0, 20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.helper}>
        <CallMadeIcon style={{ transform: "rotate(270deg)" }} />
        <Typography variant="body1">Click here to navigate</Typography>
      </div>
      <div className={classes.content}>
        <Typography variant="h2" paragraph className={classes.text}>
          WELCOME
        </Typography>
      </div>
    </>
  );
};

export default Home;
