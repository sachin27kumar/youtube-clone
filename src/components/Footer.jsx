import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 mb-4">
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <p className="text-sm">
              YouTube Clone is your go-to platform for watching and sharing
              videos, with endless entertainment and educational content at your
              fingertips.
            </p>
          </div>

          <div className="w-full sm:w-1/3 mb-4">
            <h3 className="text-xl font-semibold mb-2">Links</h3>
            <ul className="text-sm">
              <li>
                <a href="#home" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3 mb-4">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-red-600 hover:text-red-700">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; 2024 YouTube Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
