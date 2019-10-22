import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationStyles from "./RegistrationStyles";
import useForm from "react-hook-form";

const SignUp = () => {
  const classes = RegistrationStyles();
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = values => {
    if (values.password1 !== values.password2) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }

    if (values.password1.length < 8) {
      setPasswordLengthError(true);
    } else {
      setPasswordLengthError(false);
    }
  };
  return (
    <div>
      <h1 className={classes.header}>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <label>Username</label>
        <input name="username" ref={register} required />

        <label>Password</label>
        <input name="password1" ref={register} type="password" required />
        <p
          className={
            passwordMatchError ? classes.passwordMatchError : classes.noError
          }
        >
          Passwords don't match
        </p>
        <p
          className={
            passwordLengthError ? classes.passwordMatchError : classes.noError
          }
        >
          Password needs to be 8 characters or longer.
        </p>

        <label>Confirm Password</label>
        <input name="passsword2" ref={register} type="password" required />
        <p
          className={
            passwordMatchError ? classes.passwordMatchError : classes.noError
          }
        >
          Passwords don't match
        </p>
        <p
          className={
            passwordLengthError ? classes.passwordMatchError : classes.noError
          }
        >
          Password needs to be 8 characters or longer.
        </p>
        <input type="submit" />
      </form>
      <Link to="/">
        <p className={classes.toAccount}>I already have an account</p>
      </Link>
    </div>
  );
};

export default SignUp;

//Username already exists
//Password isn't 8 characters long
