import React, { useState } from "react";
import employees from "../../employees.json";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

import Grid from "../../components/employees/Grid";
import CardList from "../../components/employees/CardList";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
  },
  content: {
    margin: theme.spacing(2),
  },

  switch: {
    margin: theme.spacing(2),
    textAlign: "end",
  },
}));

const Employees = () => {
  const classes = useStyles();
  const [switchView, setSwitchView] = useState(false);
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h5" className={classes.text}>
          Employees:
        </Typography>
        <div className={classes.switch}>
          Grid
          <Switch
            checked={switchView}
            onChange={() => setSwitchView((prev) => !prev)}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          Cards
        </div>

        {switchView ? <CardList rows={employees} /> : <Grid rows={employees} />}
      </div>
    </div>
  );
};

export default Employees;
