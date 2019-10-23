import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationStyles from "./RegistrationStyles";
import useForm from "react-hook-form";
import axios from "axios";
import { getThemeProps } from "@material-ui/styles";

const SignIn = props => {
  const classes = RegistrationStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = values => {
    axios
      .post("https://adventure-text.herokuapp.com/api/login/", values)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.key);
      })
      .then(() => {
        props.history.push("/game");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <label>Username</label>
        <input name="username" ref={register} required />

        <label>Password</label>
        <input name="password" ref={register} type="password" required />

        <input type="submit" />
      </form>
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
