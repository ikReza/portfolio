import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Send } from "@material-ui/icons";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import ContactFooter from "./ContactFooter";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() => ({
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

const InputField = withStyles({
  root: {
    border: "none",
    outline: "none",
    borderRadius: "15px",
    boxShadow:
      "inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8)",

    "& label": {
      color: "tan",
      fontSize: "14px",
    },
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0,0,0,0)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0,0,0,0)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(0,0,0,0)",
      },
    },
  },
})(TextField);

const Contact = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setDisabled(true);

    const data = { username, email, message };

    axios
      .post("https://ikr-portfolio.herokuapp.com/api/email", data)
      // .post("http://localhost:4000/api/email", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setDisabled(false);
          setEmailSent(true);
          setOpen(true);
        } else {
          setDisabled(false);
          setEmailSent(false);
          setOpen(true);
        }
      })
      .catch((err) => {
        console.log({ message: err });
        setDisabled(false);
        setEmailSent(false);
        setOpen(true);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  let condition;

  if (emailSent && open) {
    condition = (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Emai Sent!
        </Alert>
      </Snackbar>
    );
  } else if (!emailSent && open) {
    condition = (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Email Not Sent!
        </Alert>
      </Snackbar>
    );
  }

  return (
    <Box component="div" style={{ height: "100vh", background: "#233" }}>
      <Navbar />
      <Grid container justify="center" align="center">
        <Grid item xs={10} sm={5} md={3}>
          <Box
            component="form"
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <Typography variant="h4" gutterBottom className={classes.text}>
              <span className={classes.letter}>L</span>
              <span className={classes.letter}>e</span>
              <span className={classes.letter}>t</span>
              <span className={classes.letter}>'</span>
              <span className={classes.letter}>s</span>
              <span> </span>
              <span className={classes.letter}>T</span>
              <span className={classes.letter}>a</span>
              <span className={classes.letter}>l</span>
              <span className={classes.letter}>k</span>
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <InputField
              variant="outlined"
              label="Email"
              type="email"
              required
              fullWidth
              margin="dense"
              size="medium"
              inputProps={{
                style: { color: "white" },
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <InputField
              variant="outlined"
              label="Message"
              required
              fullWidth
              multiline
              margin="dense"
              size="medium"
              inputProps={{
                style: { color: "white", height: "30px" },
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <Button
              className={classes.btn}
              variant="outlined"
              fullWidth
              type="submit"
              disabled={disabled}
              endIcon={hover ? null : <Send />}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? "ireza.kaiser00@gmail.com" : "contact me"}
            </Button>
            {condition}
          </Box>
        </Grid>
      </Grid>
      <ContactFooter />
    </Box>
  );
};

export default Contact;
