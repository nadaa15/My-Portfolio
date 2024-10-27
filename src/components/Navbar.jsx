import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [Nav, setNav] = useState(false);

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
  };
  function toggleNav() {
    setNav(!Nav);
  }
  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      <nav>
        <div className="x-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative container flex h-16 items-center justify-between z-50">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={toggleNav}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {Nav ? (
                  <i className="fa-solid fa-xmark" />
                ) : (
                  <i className="fa-solid fa-bars-staggered" />
                )}
              </button>
            </div>
            <div className="flex justify-start items-center w-full sm:w-auto">
              <Link to="/">
                <h1 className="text-white text-2xl uppercase">nada</h1>
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-end sm:items-stretch">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex">
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      return `block mx-4 text-base font-medium text-white relative before:bg-purple-400 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`;
                    }}
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="about"
                    className={({ isActive }) => {
                      return `block mx-4 text-base font-medium text-white relative before:bg-purple-400 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`;
                    }}
                    aria-current="page"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="projects"
                    className={({ isActive }) => {
                      return `block mx-4 text-base font-medium text-white relative before:bg-purple-400 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`;
                    }}
                    aria-current="page"
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    to="contact"
                    className={({ isActive }) => {
                      return `block mx-4 text-base font-medium text-white relative before:bg-purple-400 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`;
                    }}
                    aria-current="page"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={Nav ? "open" : "closed"}
          variants={menuVariants}
          className={
            Nav
              ? "fixed right-0 top-0 w-1/2 min-h-screen z-40 flex justify-center items-center bg-purple-950"
              : "hidden"
          }
          id="mobile-menu"
        >
          <div className="w-1/2 space-y-6 px-2 pb-3 pt-2 text-center mx-auto rounded-lg ">
            <NavLink
              onClick={closeNav}
              to="/"
              className={({ isActive }) => {
                return `block text-base font-medium text-white relative before:bg-purple-200 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                  isActive ? `before:w-full` : "before:w-0"
                }`;
              }}
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              onClick={closeNav}
              to="about"
              className={({ isActive }) => {
                return `block text-base font-medium text-white relative before:bg-purple-200 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                  isActive ? `before:w-full` : "before:w-0"
                }`;
              }}
              aria-current="page"
            >
              About
            </NavLink>
            <NavLink
              onClick={closeNav}
              to="projects"
              className={({ isActive }) => {
                return `block text-base font-medium text-white relative before:bg-purple-200 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                  isActive ? `before:w-full` : "before:w-0"
                }`;
              }}
              aria-current="page"
            >
              Projects
            </NavLink>
            <NavLink
              onClick={closeNav}
              to="contact"
              className={({ isActive }) => {
                return `block text-base font-medium text-white relative before:bg-purple-200 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                  isActive ? `before:w-full` : "before:w-0"
                }`;
              }}
              aria-current="page"
            >
              Contact
            </NavLink>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
