require("dotenv").config();
const express = require('express')
const app = express()
const port = 3456
// const controller = require('controller')
const session = require("express-session")

let { SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.listen(SERVER_PORT, () => {
  console.log(`Michelle is beautiful on ${SERVER_PORT}.`);
});