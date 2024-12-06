import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commentId: { type: String, required: true },
  userId: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true },
  title: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: { type: String },
  channelId: { type: String, required: true },
  channelName: { type: String, required: true },
  uploader: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  uploadDate: { type: Date, required: true },
  category: { type: String },
  comments: [commentSchema],
});

export const Video = mongoose.model("Video", videoSchema);
