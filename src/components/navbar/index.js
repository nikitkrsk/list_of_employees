import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import TopNavBar from './top_nav_bar/TopNavBar'
import SideNav from "./side_nav/SideNav"


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const Navigation = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <TopNavBar />
      <SideNav />
    </div>
  );
};



export default Navigation;
