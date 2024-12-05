import React from "react";
import { categoryList } from "./Utiles/category";

function CategoryList({ categoryName, setCategoryName }) {
  return (
    <>
      {/* Category Filter Section: Buttons to filter products by category */}
      <div className="flex flex-wrap gap-5 my-6">
        {categoryList.map((list) => (
          <button
            key={list.id}
            onClick={() => setCategoryName(list.title)}
            className={`py-2 px-6 rounded-md shadow-lg transition-transform duration-300 ${
              categoryName === list.title
                ? "text-white bg-black"
                : "bg-zinc-200 text-black hover:bg-zinc-300"
            }`}
          >
            {list.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default CategoryList;
