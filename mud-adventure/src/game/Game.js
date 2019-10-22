import React from "react";
import { makeStyles } from "@material-ui/core";

const Game = () => {
  const classes = makeStyles({
    container: {
      display: "flex",
      border: "1px solid red"
    },
    header: {
      fontSize: "20px"
    }
  })();
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Game</h1>
    </div>
  );
};

export default Game;
