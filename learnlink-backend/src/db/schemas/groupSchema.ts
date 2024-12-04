import { model, Schema } from "mongoose";
import { GroupModel } from "../../interfaces";

const groupSchema: Schema<GroupModel> = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: [],
    },
  ],
  resources: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resource",
      default: [],
    },
  ],
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
      default: [],
    },
  ],
  groupAdmin: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Group = model<GroupModel>("Group", groupSchema);
export { Group };
