import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [Nav, setNav] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const darkModeHandler = () => {
    setDark(!dark);
  };

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
      <AnimatePresence mode="wait">
        {/* Background Animation */}
        <motion.div
          key={dark ? "dark" : "light"}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backgroundColor: dark ? "#190b1f" : "#F8FAFC",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full z-[-1]"
        ></motion.div>
      </AnimatePresence>
      <nav className="bg-purple-400 dark:bg-black dark:bg-opacity-30 fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-[85%]">
          <div className="relative flex h-16 items-center justify-between z-50">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {dark ? (
                  <motion.button
                    onClick={darkModeHandler}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full"
                  >
                    <i className="fa-regular fa-moon text-2xl me-8 text-white"></i>
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={darkModeHandler}
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full"
                  >
                    <i className="fa-regular fa-sun text-2xl me-8 text-white"></i>
                  </motion.button>
                )}
              </motion.div>
              <button
                onClick={toggleNav}
                type="button"
                className="relative flex items-center justify-center rounded-md p-2 text-white dark:text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={Nav ? "true" : "false"}
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
                    className={({ isActive }) =>
                      `block mx-4 text-base font-medium text-white relative before:bg-purple-900 dark:before:bg-purple-400 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      `block mx-4 text-base font-medium text-white relative before:bg-purple-900 dark:before:bg-purple-400 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="projects"
                    className={({ isActive }) =>
                      `block mx-4 text-base font-medium text-white relative before:bg-purple-900 dark:before:bg-purple-400 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`
                    }
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      `block mx-4 text-base font-medium text-white relative before:bg-purple-900 dark:before:bg-purple-400 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
            <motion.div
              className="hidden sm:inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {dark ? (
                <motion.button
                  onClick={darkModeHandler}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full"
                >
                  <i className="fa-regular fa-moon text-2xl ms-8 text-white"></i>
                </motion.button>
              ) : (
                <motion.button
                  onClick={darkModeHandler}
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full"
                >
                  <i className="fa-regular fa-sun text-2xl ms-8 text-white"></i>
                </motion.button>
              )}
            </motion.div>
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
          <div className="w-1/2 space-y-6 px-2 pb-3 pt-2 text-center mx-auto rounded-lg">
            <NavLink
              onClick={closeNav}
              to="/"
              className={({ isActive }) =>
                `block text-base font-medium text-white relative before:bg-purple-200 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                  isActive ? `before:w-full` : "before:w-0"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              onClick={closeNav}
              to="about"
              className={({ isActive }) =>
                `block text-base font-medium text-white relative before:bg-purple-200 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                  isActive ? `before:w-full` : "before:w-0"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              onClick={closeNav}
              to="projects"
              className={({ isActive }) =>
                `block text-base font-medium text-white relative before:bg-purple-200 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                  isActive ? `before:w-full` : "before:w-0"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              onClick={closeNav}
              to="contact"
              className={({ isActive }) =>
                `block text-base font-medium text-white relative before:bg-purple-200 before:h-[2px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                  isActive ? `before:w-full` : "before:w-0"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
