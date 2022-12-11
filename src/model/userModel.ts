import mongoose from "mongoose";

export interface UserAttribute {
  _id?: any;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  salt: string;
  address: string;
  phone: string;
}

export const userSchema = new mongoose.Schema<UserAttribute>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    rquired: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<UserAttribute>("user", userSchema);
export default User;
