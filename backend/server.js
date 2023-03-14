require("dotenv").config();
const express = require("express");

//express
const app = express();

//routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

//listen for request
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
