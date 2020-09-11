import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  form: {
    marginTop: "12vh",
    transition: "0.4s",
    //Extra
    boxShadow:
      "-5px -5px 10px rgba(255, 255, 255, 0.05), 5px 5px 15px rgba(0, 0, 0, 0.5)",
    padding: "40px 40px 60px",
    "&:hover": {
      boxShadow:
        "-5px -5px 10px rgba(210, 180, 140, 0.1), 5px 5px 15px rgba(222,184,135, 0.4)",
    },
  },
  text: {
    color: "tomato",
    textAlign: "center",
    cursor: "default",
    letterSpacing: "4px",
  },
  letter: {
    transition: "0.5s",
    filter: "blur(0.5px)",
    "&:hover": {
      textShadow: "0 0 20px #ff005b",
      filter: "brightness(200%)",
    },
  },
  btn: {
    marginTop: "1vh",
    color: "tomato",
    //Extra
    border: "none",
    outline: "none",
    borderRadius: "15px",
    height: "40px",
    boxShadow:
      "inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8)",
    "&:hover": {
      background: "#333",
      textTransform: "none",
    },
  },
}));
