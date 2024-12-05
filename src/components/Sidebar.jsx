import React from "react";

export default function Sidebar({ isExpanded }) {
  const menuItems = [
    { icon: "fa-house", label: "Home" },
    { icon: "fa-fire", label: "Trending" },
    { icon: "fa-play", label: "Shorts" },
    { icon: "fa-star", label: "Subscriptions" },
    { icon: "fa-folder", label: "Library" },
    { icon: "fa-clock", label: "History" },
    { icon: "fa-ellipsis-h", label: "More" },
  ];

  return (
    <div
      className={`transition-all duration-300 p-2 ${
        isExpanded ? "w-48" : "w-16"
      }`}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center my-8 py-4 rounded-md px-4 hover:bg-gray-200 cursor-pointer"
        >
          <i
            className={`fa-solid ${item.icon} fa-xl`}
            style={{ color: "#4e4f50" }}
          ></i>
          <span
            className={`ml-4 transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
