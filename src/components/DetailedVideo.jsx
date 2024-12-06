import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopHeader from "./TopHeader";
import Sidebar from "./Sidebar";
import { useFetchVideos } from "./Hooks/useFetchVideos";

export default function DetailedVideo() {
  const { videoId } = useParams();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  // Fetch video data using the custom hook
  const { data, loading, error } = useFetchVideos(
    "http://localhost:5300/api/videos"
  );

  const video = data.find((item) => String(item._id) === String(videoId));

  // Handle loading or error states
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-lg font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-lg font-bold text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!video) {
    return (
      <div className="h-screen flex items-center justify-center text-lg font-bold">
        Video not found.
      </div>
    );
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentData = {
        commentId: Date.now().toString(),
        userId: "currentUser",
        text: newComment.trim(),
        timestamp: new Date().toISOString(),
      };
      setComments((prev) => [...prev, newCommentData]);
      setNewComment("");
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments((prev) =>
      prev.filter((comment) => comment.commentId !== commentId)
    );
  };

  const handleLike = () => {
    video.likes += 1; // Directly increment likes
  };

  const handleDislike = () => {
    video.dislikes += 1; // Directly increment dislikes
  };

  return (
    <div className="mb-4 flex flex-col">
      {/* Top Header */}
      <TopHeader setSidebarExpanded={setSidebarExpanded} />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isExpanded={isSidebarExpanded} />

        {/* Main Video Section */}
        <div className="flex-1 px-4 sm:px-6 py-4 overflow-auto">
          {/* Video Player */}
          <div className="mb-4 md:mb-6">
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-56 sm:h-64 md:h-80 lg:h-[24rem] rounded-lg shadow-md"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Details */}
          <h1 className="text-lg md:text-xl font-bold mb-2 truncate">
            {video.title}
          </h1>
          <p className="text-gray-600 text-xs md:text-sm mb-4">
            {video.views} views •{" "}
            {new Date(video.uploadDate).toLocaleDateString()}
          </p>
          <p className="text-gray-800 text-sm md:text-base mb-6">
            {video.description}
          </p>

          {/* Channel Info and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <span className="font-bold text-sm md:text-lg">
              {video.channelName}
            </span>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-md text-xs sm:text-sm"
                onClick={handleLike}
              >
                👍 Like {video.likes}
              </button>
              <button
                className="px-3 py-1 sm:px-4 sm:py-2 bg-red-500 text-white rounded-md text-xs sm:text-sm"
                onClick={handleDislike}
              >
                👎 Dislike {video.dislikes}
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div>
            <h2 className="text-sm md:text-lg font-bold mb-3">Comments</h2>

            {/* Add Comment */}
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
              />
              <button
                onClick={handleAddComment}
                className="px-3 py-1 bg-green-500 text-white rounded-md text-xs sm:text-sm"
              >
                Add
              </button>
            </div>

            {/* Comments List */}
            <ul className="space-y-2">
              {video.comments.map((comment) => (
                <li
                  key={comment.commentId}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border rounded-md bg-gray-50"
                >
                  <div>
                    <span className="font-bold text-xs sm:text-sm">
                      {comment.userId}
                    </span>
                    : <span className="text-xs sm:text-sm">{comment.text}</span>
                    <p className="text-gray-400 text-xs mt-1">
                      {new Date(comment.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteComment(comment.commentId)}
                    className="text-red-500 mt-2 sm:mt-0 text-xs sm:text-sm"
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
