import React, { useState, useEffect } from "react";
import GameStyles from "./GameStyles.js";
import axios from "axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSquare as regSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faSquare,
  faCoffee,
  faSquareFull
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faSquare, faCoffee, faSquareFull, regSquare);

const GameMap = ({ currentRoom, current_coordinates }) => {
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

  //   console.log(minX);
  //   console.log(maxX);
  //   console.log(minY);
  //   console.log(maxY);

  const createMap = () => {
    let map = [];

    for (let y = minY; y <= maxY; y++) {
      let rowMap = [];
      for (let x = minX; x <= maxX; x++) {
        roomList.find(el => el.x === x && el.y === y)
          ? rowMap.push(
              <div className={classes.room} key={[x, y]}>
                {x === current_coordinates[0] &&
                y === current_coordinates[1] ? (
                  <FontAwesomeIcon icon={faSquare} />
                ) : (
                  <FontAwesomeIcon icon={regSquare} />
                )}
              </div>
            )
          : rowMap.push(<div></div>);
      }
      map.push(<div className={classes.row}>{rowMap.map(row => row)}</div>);
    }
    map.reverse();
    return map;
  };

  return (
    <div>
      <div className={classes.gridContainer}>{createMap()}</div>
    </div>
  );
};

export default GameMap;
