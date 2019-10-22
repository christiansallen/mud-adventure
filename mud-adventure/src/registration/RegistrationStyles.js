import { makeStyles } from "@material-ui/core";

const RegistrationStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    border: "1px solid red"
  },
  header: {
    fontSize: "3rem"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  passwordMatchError: {
    color: "red"
  },
  noError: {
    display: "none"
  },
  toAccount: {
    color: "blue",
    fontSize: "1.3rem"
  }
}));

export default RegistrationStyles;
