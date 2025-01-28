import { motion } from "framer-motion";
import React from "react";
import profilepic from "../assets/images/313067.jpg";
import { TypeAnimation } from "react-type-animation";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <header className="container mt-20 mb-36">
        <div className="grid lg:grid-cols-2 place-items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-800 dark:text-gray-100 md:text-5xl text-4xl mb-4"
            >
              Hi, I AM <br />{" "}
              <span className="font-bold text-purple-500 dark:text-purple-400 text-3xl md:text-5xl">
                <TypeAnimation
                  sequence={["Nada Ayman", 1500, "Front-End developer", 1500]}
                  speed={30}
                  repeat={Infinity}
                />
              </span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="text-gray-700 dark:text-gray-400 md:text-2xl text-lg mb-6"
            >
              A Front-End Developer Passionate About Creating Beautiful and
              User-Friendly Web Experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-row items-center gap-6 my-4 md:mb-0"
            >
              <motion.a
                href="Nada Ayman CV.pdf"
                target="_blank"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                }}
                className="z-10 cursor-pointer font-bold text-gray-800 dark:text-gray-100 md:w-auto px-4 py-2 border border-purple-600 dark:border-purple-500 rounded-xl"
              >
                Download CV
              </motion.a>

              <div className="flex gap-6 flex-row text-xl md:text-2xl text-purple-600 dark:text-purple-500 z-20">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://github.com/nadaa15"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.linkedin.com/in/nada-ayman0/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="mailTo:nadaayman0022@gmail.com"
                  target="_blank"
                >
                  <i className="fa-brands fa-google"></i>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-[200px] md:w-[350px] -order-1 lg:order-1"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={profilepic}
              className="w-full rounded-full border-4 border-purple-500 dark:border-purple-400"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>
      </header>
      <About />
      <Projects />
      <Contact/>
    </>
  );
}
