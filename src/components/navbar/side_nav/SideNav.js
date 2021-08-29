import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


import { MenuItems } from "./MenuItems";
import { setMenuOpen } from "../store/current_page/CurrentPageActions";
import config from "../../../config";


const useStyles = makeStyles((theme) => ({
  drawer: {
    width: config.MENU_WIDTH,
    flexShrink: 0,
    whiteSpace: "nowrap",
    "& ::-webkit-scrollbar": {
      width: "5px",
    },
    "& ::-webkit-scrollbar-track": {
      background: theme.palette.secondary.light,
    },
    /* Handle */
    "& ::-webkit-scrollbar-thumb": {
      background: theme.palette.primary.light,
    },

    /* Handle on hover */
    "& ::-webkit-scrollbar-thumb:hover": {
      background: theme.palette.primary.dark,
    },
  },
  drawerOpen: {
    background: theme.palette.background.paper,
    color: theme.palette.secondary.main,
    width: config.MENU_WIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: theme.palette.background.paper,
    color: theme.palette.secondary.main,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(0) + 1,
    [theme.breakpoints.up("md")]: {
      width: 0,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  activePage: {
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  listItem: {
    padding: "0",
  },
}));

const SideNav = () => {
  const theme = useTheme();
  const classes = useStyles();
  const state = useSelector((state) => ({
    menuOpen: state.changeMenuOpen.menuOpen,
    currentPage: state.changeCurrentPage.currentPage,
  }));
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(setMenuOpen(false));
  };

  const renderMenuElements = (item) => {
    return (
      <List className={classes.listItem} key={`LIST${item.name}`} onClick={handleDrawerClose}>
        <Link
          to={{
            pathname: item.path,
          }}
          className={classes.link}
          id={item.name}
        >
          <ListItem
            button
            key={item.name}
            className={state.currentPage === item.path && classes.activePage}
          >
            <ListItemIcon>{<item.icon />}</ListItemIcon>
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{ style: { whiteSpace: "normal" } }}
            />
          </ListItem>
        </Link>
      </List>
    );
  };
  const renderMenu = () => {
    return MenuItems.map((route, i) =>
      route.display ? <>{renderMenuElements(route)}</> : <></>
    );
  };
  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: state.menuOpen,
          [classes.drawerClose]: !state.menuOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: state.menuOpen,
            [classes.drawerClose]: !state.menuOpen,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        {renderMenu()}
      </Drawer>
    </>
  );
};

export default SideNav;
