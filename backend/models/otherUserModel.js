import mongoose from "mongoose";


const otherUserSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true,
      unique: true
  },
  age: {
      type: Number,
      required: true
  }
}, {
  timestamps: true
});

const otherUserModel = mongoose.model('crud', otherUserSchema)

export default otherUserModel;