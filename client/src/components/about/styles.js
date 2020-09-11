import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  box1: {
    width: "100%",
    background: "transparent",
  },
  card: { padding: "10px", textAlign: "justify", background: "#233" },
  circle: {
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    float: "left",
    shapeOutside: "circle()",
    margin: "30px",
  },
  mblCircle: {
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    float: "left",
    shapeOutside: "circle()",
    margin: "30px",
  },
  text: {
    color: "tan",
  },
  avatar: {
    margin: "0.5rem 1rem",
    height: theme.spacing(10),
    width: theme.spacing(10),
  },
  box2: {
    background: "#557A95",
  },
  box3: {
    background: "#7395AE",
  },
}));
