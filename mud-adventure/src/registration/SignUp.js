import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationStyles from "./RegistrationStyles";
import useForm from "react-hook-form";
import axios from "axios";

const SignUp = props => {
  const classes = RegistrationStyles();
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = values => {
    if (values.password1.length < 8 && values.password1 === values.password2) {
      setPasswordLengthError(true);
      setPasswordMatchError(false);
    } else if (
      values.password1.length >= 8 &&
      values.password1 !== values.password2
    ) {
      setPasswordLengthError(false);
      setPasswordMatchError(true);
    } else if (
      values.password1.length < 8 &&
      values.password1 !== values.password2
    ) {
      setPasswordLengthError(true);
      setPasswordMatchError(true);
    } else {
      setPasswordLengthError(false);
      setPasswordMatchError(false);
      axios
        .post("https://adventure-text.herokuapp.com/api/registration/", values)
        .then(res => {
          console.log(res);
        })
        .then(() => {
          props.history.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.headerSignup}>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={classes.formSignup}>
        <label>Username</label>
        <input name="username" ref={classes.register} required />

        <label>Password</label>
        <input name="password1" ref={register} type="password" required />
        <p
          className={
            passwordMatchError ? classes.passwordError : classes.noError
          }
        >
          Passwords don't match
        </p>
        <p
          className={
            passwordLengthError ? classes.passwordError : classes.noError
          }
        >
          Password needs to be 8 characters or longer.
        </p>

        <label>Confirm Password</label>
        <input name="password2" ref={register} type="password" required />
        <p
          className={
            passwordMatchError ? classes.passwordError : classes.noError
          }
        >
          Passwords don't match
        </p>
        <p
          className={
            passwordLengthError ? classes.passwordError : classes.noError
          }
        >
          Password needs to be 8 characters or longer.
        </p>
        <input type="submit" />
      </form>
      <Link to="/">
        <p className={classes.toAccountSignup}>I already have an account</p>
      </Link>
    </div>
  );
};

export default SignUp;
