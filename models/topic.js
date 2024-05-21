/* Schema definition */

const mongoose = require("mongoose");
const { Schema } = mongoose;

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

const Topic = mongoose.model.Topic || mongoose.model("Topic", TopicSchema);

module.exports = Topic;
