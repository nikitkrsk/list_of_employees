import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "./Card";
import SearchBox from "./SearchBox";
const useStyles = makeStyles((theme) => ({
  search: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  cards: {
    height: "70vh",
    overflow: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

const CardList = ({ rows }) => {
  const classes = useStyles();
  const [searchField, setsearchField] = useState("");

  const onSearchChange = (event) => {
    event.preventDefault();
    setsearchField(event.target.value);
  };

  const filteredBonusTypes = rows.filter((user) => {
    return user.lastName.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <SearchBox searchChange={onSearchChange} />
      </div>

      <div className={classes.cards}>
        {filteredBonusTypes.map((user) => (
          <Card user={user} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
