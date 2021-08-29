import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { DataGrid } from "@mui/x-data-grid";

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop: theme.spacing(10),
    height: 400,
    width: "100%",
  },
}));

const columns = [
  {
    field: "firstName",
    headerName: "First name",
    flex: 1,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    flex: 1,
    editable: true,
  },
  {
    field: "dob",
    headerName: "Date Of Birth",
    type: "date",
    flex: 1,
    editable: true,
  },
  {
    field: "position",
    headerName: "Position",
    flex: 1,
    editable: true,
  },
  {
    field: "subordinates",
    headerName: "Number of subordinates",
    type: "number",
    flex: 1,
    editable: true,
  },
];

const Grid = ({rows}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.text}>
        Material Grid has inbuilt methods for search and filters / alternatively
        you can create methods for each field
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Grid;
