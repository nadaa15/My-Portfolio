import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import ProjectsContextProvider from "../Context/ProjectsContext";

function App() {
  let router = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "Projectdetails/:index",
          element: <ProjectDetails />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <ProjectsContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProjectsContextProvider>
    </>
  );
}

export default App;
