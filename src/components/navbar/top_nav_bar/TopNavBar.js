import React from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";

import { setMenuOpen } from "../store/current_page/CurrentPageActions";
import MenuTopNav from "./top_nav_bar_elements/Menu";
import config from "../../../config";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: config.MENU_WIDTH,
    width: `calc(100% - ${config.MENU_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 15,
  },
  hide: {
    display: "none",
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "flex",
  },
}));

const TopNavBar = (props) => {
  const state = useSelector((state) => ({
    menuOpen: state.changeMenuOpen.menuOpen,
  }));

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleDrawerOpen = () => {
    dispatch(setMenuOpen(true));
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: state.menuOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: state.menuOpen,
            })}
          >
            <MenuIcon />
          </IconButton>
          <img src={config.LOGO} alt="Logo" width="40" height="40" />
          <Link href="/" color="inherit" underline="none">
            <Typography variant="overline" noWrap>
              {config.DOMAIN}
            </Typography>
          </Link>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuTopNav />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopNavBar;
