const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
// var cors = require('cors')
// app.use(cors())

require("dotenv").config();
// Connect to db after the dotenv above
require("./config/database");

const app = express();

app.use(logger("dev"));
// Process data in body of request if
// Content-Type: 'application/json'
// and put that data on req.body
app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// middleware that adds the user object from a JWT to req.user
app.use(require("./config/checkToken"));

// Put all API routes here (before the catch-all)
app.use("/api/users", require("./routes/api/user"));
app.get('/api/mapbox-token', (req, res) => {
  res.send({
    accessToken: 'YOUR_MAPBOX_API_KEY'
  });
});

// "catch-all" route that will match all GET requests
// that don't match an API route defined above
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
