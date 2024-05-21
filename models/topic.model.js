import mongoose from "mongoose";
import { Schema } from "mongoose";

const TopicSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the topic's title"],
    },
    description: {
      type: String,
      required: [true, "Please enter the topic's description"],
    },
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", TopicSchema);

export default Topic;
