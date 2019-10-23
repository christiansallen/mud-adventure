import React, { useState, useEffect } from "react";
import GameStyles from "./GameStyles.js";
import axios from "axios";

const Game = props => {
  const classes = GameStyles();

  const [playerLocation, setPlayerLocation] = useState({
    x: 0,
    y: 0
  });
  //   const [inRoom, setInRoom] = useState(false);
  //   const [worldArray, setWorldArray] = useState();
  const [currentPlayer, setCurrentPlayer] = useState({
    description: "",
    name: "",
    players: [],
    room_id: 0,
    title: "",
    uuid: "",
    error_msg: "",
    x_coordinates: 0,
    y_coordinates: 0
  });
  const [roomOtherPlayers, setRoomOtherPlayers] = useState([]);

  const [direction, setDirection] = useState("");

  window.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        //left arrow
        setDirection("w");
        break;

      case 38:
        //up arrow
        setDirection("n");
        break;

      case 39:
        //right arrow
        setDirection("e");
        break;

      case 40:
        //down arrow
        setDirection("s");
        break;

      default:
        return;
    }
  };

  //initial data
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://adventure-text.herokuapp.com/api/adv/init/", {
        headers: {
          authorization: `Token ${token}`
        }
      })
      .then(res => {
        setCurrentPlayer({ ...res.data, error_msg: "" });
      })
      .catch(err => console.log(err));
  }, []);

  //moving directions
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "https://adventure-text.herokuapp.com/api/adv/move/",
        { direction: direction },
        { headers: { authorization: `Token ${token}` } }
      )
      .then(res => {
        setRoomOtherPlayers(res.data.other_players);
        setCurrentPlayer(res.data);
      })
      .catch(err => console.log(err));
    return () => setDirection("");
  }, [direction]);

  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <div className={classes.container}>
      <div className={classes.sideBar}>
        <h1 className={classes.header}>MUD Adventure</h1>
        <div className={classes.headerAndText}>
          <h2 className={classes.headertwo}>Name: </h2>
          <p className={classes.text}> {currentPlayer.name}</p>
        </div>
        <div className={classes.headerAndText}>
          <h2 className={classes.headertwo}>Current Room:</h2>
          <p className={classes.text}> {currentPlayer.description}</p>
        </div>
        <div className={classes.errorContainer}>
          <div
            className={
              currentPlayer.error_msg
                ? classes.headerAndTextError
                : classes.hidden
            }
          >
            <h2 className={classes.headertwoError}>Error:</h2>
            <p className={classes.textError}> {currentPlayer.error_msg}</p>
          </div>
        </div>
        <img
          src="https://media.istockphoto.com/vectors/compass-vector-id503891738?k=6&m=503891738&s=612x612&w=0&h=5oVWFpcfiYnhhpRx4bXapyQlGT4n8rkdzazXGA8uqHI="
          alt="compass"
          width="150px"
          height="150px"
          className={classes.image}
        />
      </div>
      <div className={classes.mainSection}>
        <div className={classes.mapSection}>
          <h1>Map section</h1>
        </div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Game;
