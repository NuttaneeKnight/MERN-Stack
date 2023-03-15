const Workout = require("../models/workoutModel");

// GET all workouts
const getWorkouts = async (req, res) => {
  // leave the {}blanck to retrieve all the properties. 
  const workouts = await Workout.find({}) 
}

// GET a single workout

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
  createWorkout,
};
