import express from "express";
import { Video } from "../Model/video.model.js";

const router = express.Router();

// Get all videos
router.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching videos", error });
  }
});

// Get a single video by ID
router.get("/videos/:id", async (req, res) => {
  try {
    const video = await Video.findOne({ videoId: req.params.id });
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: "Error fetching video", error });
  }
});

// Add a new video
router.post("/videos", async (req, res) => {
  try {
    const newVideo = new Video(req.body);
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(400).json({ message: "Error adding video", error });
  }
});

export const videoRoutes = (app) => {
  app.use("/api", router);
};
