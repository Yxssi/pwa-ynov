import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
    },
    status: {
      type: String,
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

Task.create({
  title: "Finir article blog",
  description: "Réaliser conclusion article sur les sorties tech de l'année",
  deadline: new Date(),
});

export default Task;
