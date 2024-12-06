YouTube Clone - Video Streaming Platform
This project is a YouTube clone built using React.js, Tailwind CSS, and a custom API to manage
videos, comments, and interactions. It mimics the layout and functionality of YouTube with features
like video viewing, likes/dislikes, comments, and video details.

## Features

- Video Playback: Watch videos embedded from YouTube.
- Like/Dislike Buttons: Like or dislike videos to express your preference.
- Comment Section: Add, delete, and view comments for each video.
- Responsive Design: Tailwind CSS ensures the site is fully responsive on all screen sizes.
- Video Details: Display video title, description, views, and upload date.
- Sidebar: Toggle sidebar for navigation options.

## Tech Stack

- Frontend: React.js, Tailwind CSS
- Backend (API): Node.js (Assumed from URL in the example)
- Video Hosting: YouTube (via embedded URLs)
- State Management: React's useState and useEffect

## Installation

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

git clone https://github.com/sachin27kumar/youtube-clone

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:
cd youtube-clone
npm install

### 3. Set Up Backend

If you are using a local API (e.g., http://localhost:5300/api/videos), make sure your backend is
running. This project assumes that you have a backend that serves the video data, including titles,
descriptions, views, comments, and more.

### 4. Run the Application

After setting up the backend (or using a mock API), you can start the React app:
npm start
This will launch the app in your default web browser at http://localhost:3000.

## Folder Structure

/src
/components
/TopHeader.js # Header component with sidebar toggle
/Sidebar.js # Sidebar navigation component

/DetailedVideo.js # Video details page with embedded video player
/hooks
/useFetchVideos.js # Custom hook to fetch video data
/App.js # Main application entry point
/index.js # App's entry point for ReactDOM
