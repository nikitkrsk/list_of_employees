
import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  searchBox: {
    width: "20%",
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "65%",
    },
  },
}));

const SearchBox = ({ searchChange }) => {
  const classes = useStyles()
  const [search, setsearch] = useState("");
  const handleChange = (e) => {
    searchChange(e);
    setsearch(e.target.value);
  };

  
  return (
    <TextField
      id="search"
      label={"Search by Last Name"}
      value={search}
      onChange={handleChange}
      variant="outlined"
      className= {classes.searchBox}
    />
  );
};

export default SearchBox;