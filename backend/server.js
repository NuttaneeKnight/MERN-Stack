require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");

//express
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use(workoutRoutes);

//listen for request
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
