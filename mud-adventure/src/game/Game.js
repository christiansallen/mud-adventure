import React from "react";
import { Link } from "react-router-dom";
import GameStyles from "./GameStyles.js";

const Game = () => {
  const classes = GameStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Game</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Game;
