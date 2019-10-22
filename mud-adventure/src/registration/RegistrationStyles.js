import { makeStyles } from "@material-ui/core";

const RegistrationStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    border: "1px solid red"
  },
  header: {
    color: "blue"
  },
  passwordMatchError: {
    color: "red"
  },
  noError: {
    display: "none"
  }
}));

export default RegistrationStyles;
