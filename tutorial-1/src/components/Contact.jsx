import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";

const useStyles = makeStyles(() => ({
  form: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  text: {
    color: "tomato",
    textAlign: "center",
  },
  btn: {
    marginTop: "1vh",
    color: "tomato",
    border: "1px solid tomato",

    "&:hover": {
      background: "#333",
      textTransform: "none",
    },
  },
}));

const InputField = withStyles({
  root: {
    "& label": {
      color: "tan",
    },
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  return (
    <Box component="div" style={{ height: "100vh", background: "#233" }}>
      <Navbar />
      <Grid container justify="center">
        <Box componet="form" className={classes.form}>
          <Typography variant="h4" gutterBottom className={classes.text}>
            Let's Talk
          </Typography>
          <InputField
            variant="outlined"
            label="Name"
            required
            fullWidth
            margin="dense"
            size="medium"
            inputProps={{
              style: { color: "white" },
            }}
          />
          <br />
          <InputField
            variant="outlined"
            label="Email"
            required
            fullWidth
            margin="dense"
            size="medium"
            inputProps={{
              style: { color: "white" },
            }}
          />
          <br />
          <InputField
            variant="outlined"
            label="Message"
            required
            fullWidth
            margin="dense"
            size="medium"
            inputProps={{
              style: { color: "white" },
            }}
          />
          <br />
          <Button
            className={classes.btn}
            variant="outlined"
            fullWidth
            type="submit"
            endIcon={hover ? null : <Send />}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? "ireza.kaiser00@gmail.com" : "contact me"}
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
