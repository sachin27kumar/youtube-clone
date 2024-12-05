import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomePage from "./components/HomePage.jsx";
import DetailedVideo from "./components/DetailedVideo.jsx";
import LogReg from "./components/LogReg.jsx";
import NotFound from "./components/NotFound.jsx";
import Channel from "./components/Channel.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/video/:videoId",
        element: <DetailedVideo />,
      },
      {
        path: "/login",
        element: <LogReg />,
      },
      {
        path: "/channel",
        element: <Channel />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
