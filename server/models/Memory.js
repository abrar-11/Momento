import mongoose from "mongoose";

const MemorySchema = mongoose.Schema({
   title: {
      type: String,
      required: [true, "Please provide a title"],
   },
   message: {
      type: String,
      required: [true, "Please provide a message"],
   },
   creator: {
      type: String,
      required: [true, "Please provide a creator"],
   },
   likeCount: {
      type: Number,
      default: 0,
   },
   createdAt: {
      type: Date,
      default: new Date(),
   },
});

const Memory = mongoose.model("Memory", MemorySchema);
