import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        {/* YouTube Icon or Logo */}
        <i className="fa-brands fa-youtube text-6xl mb-4"></i>
        <h1 className="text-4xl font-bold mb-2">Oops! Page Not Found</h1>
        <p className="text-lg mb-4">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>

        {/* Home button */}
        <a
          href="/"
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}

export default NotFound;
