import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import config from "../config";

// Styles
import "../themes/Main.scss";
import { themesConfig } from "../themes/main";

// Material
import { ThemeProvider } from "@material-ui/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { CssBaseline, createTheme } from "@material-ui/core";

// Components
import NavBar from "../components/navbar/index";
import { Routes } from "../components/routes/routes";
import { setCurrentPage } from "../components/navbar/store/current_page/CurrentPageActions";
import PageNotifications from "../components/notifications/notificationsService";

const App = ({ match, history }) => {
  const state = useSelector((state) => ({
    theme: state.changeTheme.theme,
    showNotificationMessage: state.showNotification.showNotificationMessage,
  }));
  const theme = createTheme(themesConfig[state.theme]);
  const dispatch = useDispatch();

  useEffect(() => {
    let pathname = config.DOMAIN;
    try {
      pathname = Routes.filter((el) => el.path === history.location.pathname)[0]
        .name;
    } catch {
      pathname = "Not Found";
    }
    document.title = `${pathname} - ${config.DOMAIN} `;
    dispatch(setCurrentPage(history.location.pathname));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname]);

  const routeComponents = Routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {state.showNotificationMessage && <PageNotifications />}
        <NavBar />
        <Switch>{routeComponents}</Switch>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

export default withRouter(App);
