import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ProjectsContext } from "../../Context/ProjectsContext";

export default function ProjectDetails() {
  let { id } = useParams();
  let { projects } = useContext(ProjectsContext);

  return (
    <>
      {projects.map((project) =>
        project.id == id ? (
          <motion.div
            className="my-20 container flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="mb-4 w-full lg:w-2/3">
              <motion.img
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full object-cover"
                src={project.img}
                alt={project.title}
              />
            </div>
            <motion.div
              className="w-full lg:w-2/3 p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h1 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h1>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <ul className="text-white flex justify-start items-center gap-5 flex-wrap mb-6">
                {project.technologies?.map((technology, index) => (
                  <li
                    key={index}
                    className="bg-gray-300 bg-opacity-10 px-4 py-2 rounded-3xl"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
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
            </motion.div>
          </motion.div>
        ) : null
      )}
    </>
  );
}
