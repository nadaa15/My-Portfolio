import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../../Context/ProjectsContext";

export default function Projects() {
  let { projects } = useContext(ProjectsContext);

  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const childVariant = {
    hidden: {
      y: 100,
    },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container p-6 md:my-20"
        id="portfolio"
      >
        <h2 className="text-3xl font-bold text-gray-200 mb-8">My Projects</h2>
        {projects.map((project, index) => (
          <motion.div
            variants={childVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <Link to={`/Projectdetails/${index}`}>
                <motion.img
                  whileHover={{ scale: 0.9 }}
                  src={project.img}
                  alt={project.title}
                  className="w-[400px] h-64 object-cover rounded-lg shadow-lg"
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}{" "}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description.split(" ").slice(0, 20).join(" ")}...{" "}
                <Link to={`/Projectdetails/${index}`}>
                  <motion.span whileHover={{ x: 10 }} className="text-base">
                    {" "}
                    Show details
                  </motion.span>
                </Link>
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  Demo
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
