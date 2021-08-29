import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ErrorIcon from "@material-ui/icons/Error";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
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

const NotFound = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.content}>
        <ErrorIcon color="secondary" style={{ fontSize: 140 }} />
        <Typography variant="h4" paragraph className={classes.text}>
          Sorry but we could not find the page you are looking for
        </Typography>
        <Link href="/" variant="body2" color="primary">
          Go back to dashboard
        </Link>
      </div>
    </>
  );
};

export default NotFound;
