const Workout = require("../models/workoutModel");

// GET all workouts
const getWorkouts = async (req, res) => {
  // leave the {}blanck to retrieve all the properties.
  const workouts = await Workout.find({}).sort({ createdAt: -1 }); //desc order

  res.status(200).json(workouts);
};

// GET a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};
// CREATE new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add doc to db
  try {
    const workout = await Workout.create({ title, load, reps }); //async
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// DELETE a workout

// UPDATE a workout

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
};