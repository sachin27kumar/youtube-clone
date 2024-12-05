import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TopHeader from "./TopHeader";
import Sidebar from "./Sidebar";
import { videoData } from "./Utiles/videoData";

export default function DetailedVideo() {
  const { videoId } = useParams();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const videoDetails = videoData.find((video) => video.videoId === videoId);
  const [comments, setComments] = useState(videoDetails?.comments || []);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(videoDetails?.likes || 0);
  const [dislikes, setDislikes] = useState(videoDetails?.dislikes || 0);

  if (!videoDetails) {
    return (
      <div className="h-screen mb-2 flex items-center justify-center text-lg font-bold">
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

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleDislike = () => setDislikes((prev) => prev + 1);

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
              src={videoDetails.videoUrl}
              title={videoDetails.title}
              className="w-full h-56 sm:h-64 md:h-80 lg:h-[24rem] rounded-lg shadow-md"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Details */}
          <h1 className="text-lg md:text-xl font-bold mb-2 truncate">
            {videoDetails.title}
          </h1>
          <p className="text-gray-600 text-xs md:text-sm mb-4">
            {videoDetails.views} views • {videoDetails.uploadDate}
          </p>
          <p className="text-gray-800 text-sm md:text-base mb-6">
            {videoDetails.description}
          </p>

          {/* Channel Info and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <span className="font-bold text-sm md:text-lg">
              {videoDetails.channelName}
            </span>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-md text-xs sm:text-sm"
                onClick={handleLike}
              >
                👍 Like {likes}
              </button>
              <button
                className="px-3 py-1 sm:px-4 sm:py-2 bg-red-500 text-white rounded-md text-xs sm:text-sm"
                onClick={handleDislike}
              >
                👎 Dislike {dislikes}
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
              {comments.map((comment) => (
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
