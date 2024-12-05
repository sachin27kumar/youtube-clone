import React, { useState, useEffect } from "react";
import { userData, channelData } from "./Utiles/userData"; // Import user and channel data
import TopHeader from "./TopHeader"; // Import TopHeader component
import Sidebar from "./Sidebar"; // Import Sidebar component

function Channel({ setUser }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentChannel, setCurrentChannel] = useState(channelData);
  const [videos, setVideos] = useState(currentChannel.videos);
  const [isSidebarExpanded, setSidebarExpanded] = useState(false); // State for sidebar expansion

  useEffect(() => {
    // Check if user is signed in (You can update this logic with actual authentication)
    if (userData) {
      setIsSignedIn(true);
    }
  }, []);

  const handleEditVideo = (videoId) => {
    // Add logic to edit video
    alert(`Editing video with ID: ${videoId}`);
  };

  const handleDeleteVideo = (videoId) => {
    // Add logic to delete video
    setVideos(videos.filter((video) => video.videoId !== videoId));
  };

  const handleCreateChannel = () => {
    // Logic to create a channel
    alert("Creating a new channel...");
  };

  return (
    <div className="mb-4 flex flex-col">
      {/* Top Header */}
      <TopHeader setSidebarExpanded={setSidebarExpanded} />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isExpanded={isSidebarExpanded} />

        {/* Channel Content */}
        <div className="flex-1 px-4 sm:px-6 pt-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Channel Header */}
            <div className="relative">
              <img
                src={currentChannel.channelBanner}
                alt="Channel Banner"
                className="w-full h-40 sm:h-56 md:h-64 lg:h-72 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                  {currentChannel.channelName}
                </h1>
                <p className="text-xs sm:text-sm md:text-base">
                  {currentChannel.description}
                </p>
                <p className="text-sm sm:text-base md:text-lg mt-1">
                  {currentChannel.subscribers} Subscribers
                </p>
              </div>
            </div>

            {/* Channel Content */}
            <div className="p-4 sm:p-6">
              {isSignedIn ? (
                <div className="mb-6 flex justify-end">
                  <button
                    onClick={handleCreateChannel}
                    className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300 text-sm sm:text-base"
                  >
                    Create New Channel
                  </button>
                </div>
              ) : (
                <p className="text-center text-red-600">
                  Please sign in to create a channel.
                </p>
              )}

              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
                Videos
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {videos.map((video) => (
                  <div
                    key={video.videoId}
                    className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                        {video.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {video.description}
                      </p>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                      <button
                        onClick={() => handleEditVideo(video.videoId)}
                        className="px-2 sm:px-4 py-1 sm:py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition duration-300 text-sm sm:text-base"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteVideo(video.videoId)}
                        className="px-2 sm:px-4 py-1 sm:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 text-sm sm:text-base"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;
