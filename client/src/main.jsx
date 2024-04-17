import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//import all pages
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Explore from "./pages/Explore.jsx";
import MyGarden from "./pages//MyGarden/MyGarden.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SingleGoal from "./pages/SingleGoal.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        //TODO: change this to "/goals/:goalId" when we have client queries set up
        path: "/singlegoal/:goalId",
        element: <SingleGoal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
