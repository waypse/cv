import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String,
  message: String,
  pLink: String,
  id: Number
});

const projects = mongoose.model('projects', projectSchema);

export default projects;
