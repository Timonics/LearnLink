import { Document, Types } from "mongoose";

export interface UserModel extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface GroupModel extends Document {
  name: string;
  description: string;
  members?: Types.ObjectId[];
  resources?: Types.ObjectId[];
  tasks?: Types.ObjectId[];
  groupAdmin: Types.ObjectId;
}

export interface TaskModel extends Document {
  title: string;
  status: string;
  groupId: Types.ObjectId;
  assignedBy: Types.ObjectId;
  deadline?: Date;
}
