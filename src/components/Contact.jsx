import { motion } from 'framer-motion';
import React from 'react'

export default function Contact() {
  
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container flex justify-center items-center"
      >
        <form
          action="https://getform.io/f/azylzevb"
          method="POST"
          className="flex flex-col w-full lg:w-2/3 p-5 md:p-12"
          id="form"
        >
          <p className="text-gray-100 font-bold text-xl mb-2">Let´s connect!</p>
          <input
            type="text"
            id="name"
            placeholder="Your Name ..."
            name="name"
            className="mb-4 w-full bg-gray-700 text-gray-100 bg-opacity-20 rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email ..."
            name="email"
            className="mb-4 w-full bg-gray-700 text-gray-100 bg-opacity-20 rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <textarea
            name="textarea"
            id="textarea"
            rows="10"
            placeholder="Your Message ..."
            className="mb-4 w-full bg-gray-700 text-gray-100 bg-opacity-20 rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <button
            type="submit"
            className="w-1/2 md:w-1/4 self-center md:px-2 py-2 rounded-2xl border border-purple-600 text-gray-100 font-semibold text-base md:text-xl"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </>
  );
}
