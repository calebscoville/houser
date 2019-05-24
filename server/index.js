require("dotenv").config();
const express = require('express')
const app = express()
const port = 3456
// const controller = require('controller')
const session = require("express-session")
const massive = require("massive")

let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set("db", dbInstance);
      })
      .catch(err => console.log(err));

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