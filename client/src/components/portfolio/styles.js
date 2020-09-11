import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  media: {
    height: "25vh",
    width: "90%",
    display: "flex",
    alignItems: "center",
    transition: "0.6s",
    opacity: 0.7,
    "&:hover": {
      height: "31vh",
      width: "100%",
      opacity: 1,
    },
  },
  mainContainer: {
    height: "100%",
    background: "#233",
  },
  cardContainer: {
    height: "46vh",
    maxWidth: "345px",
    margin: "3rem auto",
    background: "#D3D3D3",
    transition: "0.6s",
    "&:hover": {
      background: "black",
      color: "tomato",
    },
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
  },
  btnBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  btnLeft: {
    color: "tomato",
    border: "1px solid tomato",
    width: "40%",
    "&:hover": {
      background: "#333",
    },
  },
  btnRight: {
    color: "tomato",
    border: "1px solid tomato",
    width: "40%",
    "&:hover": {
      background: "#333",
    },
  },
  root: {
    backgroundColor: "#C5C6C7",
  },
  rootBody: {
    backgroundColor: "#C5CBE3",
  },
}));
