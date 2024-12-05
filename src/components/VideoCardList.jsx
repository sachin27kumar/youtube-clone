import React from "react";
import { videoData } from "./Utiles/videoData";
import { Link } from "react-router-dom";

export default function VideoCardList({ categoryName, searchTerm }) {
  // Filter products based on the selected category
  const filteredData = Array.isArray(videoData)
    ? videoData
        .filter(
          (item) =>
            categoryName === "All" ||
            item.category.toLowerCase() === categoryName.toLowerCase()
        )
        .filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredData.map((video) => (
        <Link to={`/video/${video.videoId}`} key={video.videoId}>
          <div className="bg-white rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Thumbnail */}
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-40 object-cover"
            />

            {/* Video Details */}
            <div className="p-4">
              {/* Title */}
              <h3 className="font-bold text-lg mb-2 truncate">{video.title}</h3>

              {/* Channel Name */}
              <p className="text-sm text-gray-600 mb-1">{video.channelName}</p>

              {/* Views */}
              <p className="text-sm text-gray-500">{video.views} views</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
