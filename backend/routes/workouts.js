const express = require("express");

const router = express.Router();

//Get all workouts
router.get("/", (req, res) => {
  res.json({
    message: "GET all workouts",
  });
});

//GET a single workout
router.get("/:id", (res, req) => {
  res.json({
    message: "GET a single workout",
  });
});

//POST a new workout
router.post("/", (req, res) => {
  res.json({
    message: "POST a new workout",
  });
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({
    message: "DELETE a new workout",
  });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({
    message: "UPDATE a workout",
  });
});

module.exports = router;
