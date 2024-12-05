import React from "react";
import { Link } from "react-router-dom";

export default function TopHeader({
  setSidebarExpanded,
  setSearchTerm,
  searchTerm,
  user,
}) {
  return (
    <div className="bg-white text-gray-800 p-4 mx-3">
      <div className="flex items-center justify-between">
        {/* Logo and Hamburger */}
        <div className="flex items-center space-x-3">
          <div
            className="cursor-pointer"
            onClick={() => setSidebarExpanded((prev) => !prev)}
          >
            <i
              className="fa-solid fa-bars fa-xl"
              style={{ color: "#565658" }}
            ></i>
          </div>
          <Link to="/">
            <i
              className="fa-brands fa-youtube text-4xl"
              style={{ color: "#f70202" }}
            ></i>
            <span className="text-2xl font-medium">YouTube</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center flex-1 mx-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="flex-grow px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-4 py-2 text-black rounded-r-full border border-gray-300 hover:bg-zinc-200">
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#525151" }}
            ></i>
          </button>
        </div>

        {/* User Options */}
        <div className="flex items-center space-x-5">
          <i className="fa-solid fa-video fa-xl"></i>
          <i className="fa-regular fa-bell fa-xl"></i>
          {user ? (
            <>
              <span className="text-lg font-bold">{user.username}</span>
              <img
                src={userData.avatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 border border-black text-zinc-900 rounded-md hover:bg-gray-100 transition duration-300"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
