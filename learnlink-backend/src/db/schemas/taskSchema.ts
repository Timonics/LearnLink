import { Schema, model } from "mongoose";
import { TaskModel } from "../../interfaces";

const taskSchema: Schema<TaskModel> = new Schema({
  title: {
    type: String,
    required: true,
  },
  groupId: {
    type: Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
  assignedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  deadline: {
    type: Date,
    required: false,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
});

const Task = model<TaskModel>("Task", taskSchema);
export { Task };
