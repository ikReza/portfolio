import React from "react";
import { Paper } from "@material-ui/core";

import "./myName.scss";

const MyName = () => {
  return (
    <div className="ikr-center">
      <Paper className="ikr-box1" elevation={5}>
        Ibrahim Kaiser
      </Paper>
      <div className="ikr-box2"></div>
    </div>
  );
};

export default MyName;
