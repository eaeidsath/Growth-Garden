import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//import all pages
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Explore from "./pages/Explore/Explore.jsx";
import MyGarden from "./pages/MyGarden/MyGarden.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SingleGoal from "./pages/SingleGoal/SingleGoal.jsx";
import SinglePost from "./pages/SinglePost/SinglePost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/mygarden",
        element: <MyGarden />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/singlegoal/:goalId",
        element: <SingleGoal />,
      },
      {
        path: "/singlepost/:postId",
        element: <SinglePost />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
