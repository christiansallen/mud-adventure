import React, { useState, useEffect } from "react";
import GameStyles from "./GameStyles.js";
import axios from "axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faSquare);

const GameMap = () => {
  const classes = GameStyles();
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://adventure-text.herokuapp.com/api/adv/map/", {
        headers: {
          authorization: `Token ${token}`
        }
      })
      .then(res => {
        console.log(res.data);
        setRoomList(res.data.map);
      })
      .catch(err => console.log(err));
  }, []);
  console.log("roomList:", roomList);
  roomList.sort((a, b) => a.id - b.id);

  const xValues = roomList.map(room => Number(room.x));

  const yValues = roomList.map(room => Number(room.y));

  const minX = Math.min(...xValues);
  const minY = Math.min(...yValues);

  const maxX = Math.max(...xValues);
  const maxY = Math.max(...yValues);

  console.log(minX);
  console.log(maxX);
  console.log(minY);
  console.log(maxY);

  const createMap = () => {
    let map = [];
    for (let y = minY; y <= maxY; y++) {
      let rowMap = [];
      for (let x = minX; x <= maxX; x++) {
        rowMap.push(
          <div className={classes.room}>
            <FontAwesomeIcon icon={faSquare} size="2x" />
          </div>
        );
      }
      map.push(<div className={classes.row}>{rowMap.map(row => row)}</div>);
    }
    return map;
  };

  return (
    <div>
      <h1>Map</h1>
      <div>{createMap()}</div>
    </div>
  );
};

export default GameMap;
