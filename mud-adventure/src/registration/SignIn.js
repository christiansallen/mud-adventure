import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationStyles from "./RegistrationStyles";

const SignIn = () => {
  const classes = RegistrationStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Sign In</h1>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <Link to="/game">
        <button>Game</button>
      </Link>
    </div>
  );
};

export default SignIn;
