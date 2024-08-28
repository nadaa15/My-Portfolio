import { motion, stagger } from 'framer-motion';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [Nav, setNav] = useState(false)

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
          duration: .3,
        },
      },
    };
    function toggleNav() {
        setNav(!Nav)
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
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      className="block rounded-md px-3 py-2 text-base font-medium text-white"
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <Link
                      to="about"
                      className="block rounded-md px-3 py-2 text-base font-medium text-white"
                      aria-current="page"
                    >
                      About
                    </Link>
                    <Link
                      to="projects"
                      className="block rounded-md px-3 py-2 text-base font-medium text-white"
                      aria-current="page"
                    >
                      Projects
                    </Link>
                    <Link
                      to="contact"
                      className="block rounded-md px-3 py-2 text-base font-medium text-white"
                      aria-current="page"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={Nav ? "open" : "closed"}
            variants={menuVariants}
            className={Nav ? 'fixed right-0 top-0 w-1/2 min-h-screen z-40 flex justify-center items-center bg-purple-950' : "hidden"}
            id="mobile-menu"
          >
            <div className="w-1/2 space-y-1 px-2 pb-3 pt-2 text-center mx-auto rounded-lg ">
              <Link
                onClick={closeNav}
                to="/"
                className="block px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                onClick={closeNav}
                to="about"
                className="block px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                About
              </Link>
              <Link
                onClick={closeNav}
                to="projects"
                className="block px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Projects
              </Link>
              <Link
                onClick={closeNav}
                to="contact"
                className="block px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </nav>
      </>
    );
}
