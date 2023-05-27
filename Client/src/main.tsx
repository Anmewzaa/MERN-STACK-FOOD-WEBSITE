import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import Layout from "./Layout/Layout";

// Page
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import AboutPage from "./Pages/AboutPage";
import MenuPage from "./Pages/MenuPage";
import FoodInfoPage from "./Pages/FoodInfoPage";
import AddMenuPage from "./Pages/AddMenuPage";
import EditPage from "./Pages/EditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/menu/:id",
        element: <FoodInfoPage />,
      },
      {
        path: "/edit/:id",
        element: <EditPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/add",
        element: <AddMenuPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
