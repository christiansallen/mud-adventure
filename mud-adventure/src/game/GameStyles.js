import { makeStyles } from "@material-ui/core";

const GameStyles = makeStyles({
  container: {
    display: "flex",
    border: "1px solid red",
    maxWidth: "1500px",
    width: "100%",
    height: "100vh"
  },
  header: {
    fontSize: "20px",
    color: "gray"
  },
  sideBar: {
    border: "1px solid black",
    width: "20%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  headerAndText: {
    marginTop: "4rem",
    alignItems: "center"
  },
  headertwo: {
    fontSize: "2rem",
    fontWeight: "bold"
  },
  text: {
    fontSize: "1.6rem"
  },
  errorContainer: {
    height: "10rem"
  },
  headerAndTextError: {
    alignItems: "center",
    color: "red",
    marginTop: "4rem",
    display: "block"
  },
  headertwoError: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "red"
  },
  textError: {
    fontSize: "1.6rem",
    color: "red"
  },
  hidden: {
    visibility: "hidden"
  },
  mainSection: {
    display: "flex",
    margin: "0 auto",
    flexDirection: "column"
  }
});

export default GameStyles;
