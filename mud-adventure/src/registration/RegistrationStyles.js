import { makeStyles } from "@material-ui/core";

const RegistrationStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#258f6c",
    display: "flex",
   flexDirection: "column",
   alignItems: "center",
   width: "400px",
   height: "340",
  borderRadius: "12px",
  boxShadow: "2px 2px 15px 3px rgba(0,0,0,0.5);",
  margin: "0 auto 0 auto",
  padding: "0px 0px 70px 0px",
  border:  "#2980b9 4px solid"
  },

  header: {
    fontSize: "5rem",
    
   
  },


  form: {
    display: "flex",
    flexDirection: "column",
    
  },

 
  passwordError: {
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
