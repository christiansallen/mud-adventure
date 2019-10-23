import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GameStyles from "./GameStyles.js";
import axios from "axios";

const Game = () => {
  const classes = GameStyles();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .get("http://adventure-text.herokuapp.com/api/adv/init/", {
        headers: {
          authorization: `Token ${token}`
        }
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);
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
