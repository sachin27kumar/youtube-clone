import React, { useState } from "react";
import TopHeader from "./TopHeader";
import Sidebar from "./Sidebar";
import VideoCardList from "./VideoCardList";
import CategoryList from "./CategoryList";

export default function HomePage() {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [categoryName, setCategoryName] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null); // Track logged-in user

  return (
    <div className="flex flex-col mb-3">
      {/* Top Header */}
      <TopHeader
        setSidebarExpanded={setSidebarExpanded}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        user={user}
      />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isExpanded={isSidebarExpanded} />

        {/* Main Section */}
        <div className="flex-1 px-6 pt-2">
          <div>
            {/* Category Section */}
            <CategoryList
              categoryName={categoryName}
              setCategoryName={setCategoryName}
            />

            {/* Video List Section */}
            <VideoCardList
              categoryName={categoryName}
              searchTerm={searchTerm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
