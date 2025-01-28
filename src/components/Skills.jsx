import React from 'react'
import tailwind from "../assets/images/tailwind.webp";
import jquery from "../assets/images/jQuery.png";
import framermotion from "../assets/images/framermotion.jpg";
import redux from "../assets/images/redux.webp";
import mui from "../assets/images/mui.png";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Skills() {

    const skills = {
      technologies: [
        {
          name: "HTML",
          icon: <i className="fa-brands fa-html5 text-orange-600"></i>,
        },
        {
          name: "CSS",
          icon: <i class="fa-brands fa-css3-alt text-blue-600"></i>,
        },
        {
          name: "JavaScript",
          icon: <i class="fa-brands fa-js text-yellow-500"></i>,
        },
        {
          name: "Bootstrap",
          icon: <i class="fa-brands fa-bootstrap text-purple-700"></i>,
        },
        {
          name: "TailwindCss",
          icon: (
            <img
              src={tailwind}
              alt="tailwind logo"
              className="w-6 h-6 mix-blend-multiply"
            />
          ),
        },
        {
          name: "jQuery",
          icon: (
            <img
              src={jquery}
              alt="jQuery logo"
              className="w-6 h-6 mix-blend-multiply"
            />
          ),
        },
        {
          name: "React",
          icon: <i class="fa-brands fa-react text-blue-500"></i>,
        },
        { name: "Git", icon: <i class="fa-brands fa-git text-orange-500"></i> },
        {
          name: "GitHub",
          icon: <i class="fa-brands fa-github text-black"></i>,
        },
        {
          name: "Redux Toolkit",
          icon: (
            <img
              src={redux}
              alt="Redux Toolkit logo"
              className="w-6 h-6 mix-blend-multiply"
            />
          ),
        },
        {
          name: "Material ui",
          icon: (
            <img
              src={mui}
              alt="Material ui logo"
              className="w-6 h-6 mix-blend-multiply"
            />
          ),
        },
        {
          name: "Framer Motion",
          icon: (
            <img
              src={framermotion}
              alt="Framer Motion logo"
              className="w-6 h-6 mix-blend-multiply"
            />
          ),
        },
      ],
    };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center mt-32 px-4 ttext-gray-800 dark:text-gray-100 pb-8 md:py-12"
        id="skills"
      >
        <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8 text-2xl">
          I worked on various frontend projects. Check them{" "}
          <Link to="/projects" className="underline">
            there
          </Link>
          .
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full border border-purple-900 p-6 rounded-lg bg-gray-300 dark:bg-black dark:bg-opacity-40 shadow-lg">
            {skills.technologies.map((tech, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <span className="text-lg md:text-2xl">{tech.icon}</span>
                <span className="text-gray-800 dark:text-gray-100 text-base md:text-xl">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
