import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TopHeader from "./TopHeader";
import Sidebar from "./Sidebar";
import { videoData } from "./Utiles/videoData";

export default function DetailedVideo() {
  const { videoId } = useParams();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  // Find the video details using the videoId
  const videoDetails = videoData.find((video) => video.videoId === videoId);

  const [comments, setComments] = useState(videoDetails?.comments || []);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(videoDetails?.likes || 0);
  const [dislikes, setDislikes] = useState(videoDetails?.dislikes || 0);

  if (!videoDetails) {
    return (
      <div className="h-screen flex items-center justify-center text-lg font-bold">
        Video not found.
      </div>
    );
  }

  // Handle new comment submission
  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentData = {
        commentId: Date.now().toString(),
        userId: "currentUser", // Placeholder user ID
        text: newComment.trim(),
        timestamp: new Date().toISOString(),
      };
      setComments((prev) => [...prev, newCommentData]);
      setNewComment("");
    }
  };

  // Handle comment deletion
  const handleDeleteComment = (commentId) => {
    setComments((prev) =>
      prev.filter((comment) => comment.commentId !== commentId)
    );
  };

  // Handle like and dislike buttons
  const handleLike = () => setLikes((prev) => prev + 1);
  const handleDislike = () => setDislikes((prev) => prev + 1);

  return (
    <div className="mb-4 flex flex-col">
      {/* Top Header */}
      <TopHeader setSidebarExpanded={setSidebarExpanded} />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isExpanded={isSidebarExpanded} />

        {/* Main Detailed Video Section */}
        <div className="flex-1 px-6 pt-4">
          {/* Video Player */}
          <div className="mb-6">
            <iframe
              src={videoDetails.videoUrl}
              title={videoDetails.title}
              className="w-full h-96 rounded-lg shadow-md"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Details */}
          <h1 className="text-2xl font-bold mb-2">{videoDetails.title}</h1>
          <p className="text-gray-600 text-sm mb-4">
            {videoDetails.views} views • {videoDetails.uploadDate}
          </p>
          <p className="text-gray-800 mb-6">{videoDetails.description}</p>

          {/* Channel Name and Actions */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-bold text-lg">
              {videoDetails.channelName}
            </span>
            <div className="flex items-center gap-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleLike}
              >
                👍 Like {likes}
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={handleDislike}
              >
                👎 Dislike {dislikes}
              </button>
            </div>
          </div>

          {/* Comment Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            {/* Add Comment */}
            <div className="flex items-center gap-4 mb-6">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleAddComment}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Add
              </button>
            </div>

            {/* Comment List */}
            <ul>
              {comments.map((comment) => (
                <li
                  key={comment.commentId}
                  className="flex items-center justify-between p-4 border-b"
                >
                  <div>
                    <span className="font-bold">{comment.userId}</span>:{" "}
                    {comment.text}
                    <p className="text-gray-400 text-sm">
                      {new Date(comment.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteComment(comment.commentId)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
