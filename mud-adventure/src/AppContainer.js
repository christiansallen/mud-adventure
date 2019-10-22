import React from "react";
import { makeStyles } from "@material-ui/core";
import { Route } from "react-router-dom";
import SignIn from "./registration/SignIn.js";
import SignUp from "./registration/SignUp.js";
import Game from "./game/Game.js";

const AppContainer = () => {
  const classes = makeStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100vh"
    }
  })();

  return (
    <div className={classes.root}>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  );
};

export default AppContainer;
