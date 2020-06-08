const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port no ${port}`);
});
