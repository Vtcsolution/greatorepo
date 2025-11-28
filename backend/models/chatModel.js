import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  username: {
      type: String,
      default: 'Anonymous',
      index: true,          // non-unique index
      // remove any `unique: true`
    },
  supportQuery: { type: String, default: "" },
  messages: [{
    role: { type: String, enum: ['user', 'assistant'], required: true },
    content: { type: String, required: true },
  }],
  queries: [{ type: String }],
}, {
  timestamps: true,
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
