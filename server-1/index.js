const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Change later to only allow our server
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res) => {
  res.send("API Status: I'm awesome");
});

app.post("/api/email", (req, res) => {
  console.log(req.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "ireza.kaiser00@gmail.com",
    from: req.body.email,
    subject: "Website Contact",
    text: req.body.message,
  };

  sgMail
    .send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(401).json({
        success: false,
      });
    });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port no ${port}`);
});
