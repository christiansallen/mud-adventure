import React from "react";
import RegistrationStyles from "./RegistrationStyles";

const SignIn = () => {
  const classes = RegistrationStyles();
  return (
    <div className={classes.container}>
      <h1>Sign In</h1>
    </div>
  );
};

export default SignIn;
