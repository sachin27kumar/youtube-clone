import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { videoRoutes } from "./Routes/video.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(5300, () => {
  console.log("Server is running on port 5300");
});

mongoose.connect("mongodb://localhost:27017/youtubeClone");
const db = mongoose.connection;

db.on("open", () => {
  console.log("MongoDB connected successfully");
});
db.on("error", () => {
  console.log("MongoDB is not connected successfully");
});

videoRoutes(app);
