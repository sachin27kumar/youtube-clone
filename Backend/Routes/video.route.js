import express from "express";
import { Video } from "../Model/video.model.js";

const router = express.Router();

// Get all videos
router.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find(); // Fetch all video documents
    res.status(200).json(videos); // Send back the videos in JSON format
  } catch (error) {
    res.status(500).json({ message: "Error fetching videos", error }); // Handle error
  }
});

// Get a single video by MongoDB _id
router.get("/videos/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" }); // Return 404 if video is not found
    }
    res.status(200).json(video); // Send back the video data in JSON format
  } catch (error) {
    res.status(500).json({ message: "Error fetching video", error }); // Handle error
  }
});

// Add a new video
router.post("/videos", async (req, res) => {
  try {
    const newVideo = new Video(req.body); // Create a new video document from the request body
    await newVideo.save(); // Save the video to the database
    res.status(201).json(newVideo); // Return the created video as a response
  } catch (error) {
    res.status(400).json({ message: "Error adding video", error }); // Handle error
  }
});

export const videoRoutes = (app) => {
  app.use("/api", router); // Register routes in the Express app
};
