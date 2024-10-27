import { motion } from "framer-motion";
import React from "react";
import Skills from "./Skills";
export default function About() {
  return (
    <>
      <section className="container my-20">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center text-5xl uppercase italic font-bold text-gray-200"
          >
            About me
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-4xl font-semibold text-gray-400 mt-6"
          >
            Hi, I'm Nada Ayman, a front-end developer with a passion for
            creating engaging and user-friendly web experiences. Although my
            academic background is in Languages and Tranlation, my fascination
            with web development led me to learn HTML, CSS, and JavaScript, and
            specialize in React. <br /> <br /> My journey into front-end
            development has been an exciting mix of self-study, hands-on
            projects, and overcoming challenges, which have all strengthened my
            problem-solving skills, then I hold a front-end development diploma
            from Route Academy, where I gained hands-on experience in building
            responsive and interactive websites using the latest technologies.{" "}
            <br />
            I'm currently a Frontend (React.js) intern at Web Masters, where I
            work on hands-on projects that simulate the labor market to expand
            my experience. <br /> <br /> I'm continuously learning and expanding
            my skills, eager to explore new frameworks, tools, and best
            practices in the ever-evolving field of web development. My goal is
            to be part of innovative projects where I can contribute my
            creativity and technical expertise.
          </motion.p>

          <Skills />
        </div>
      </section>
    </>
  );
}
