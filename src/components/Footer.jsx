import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-500 dark:bg-black dark:bg-opacity-30 text-white py-5">
      <div className="flex flex-col justify-center items-center">
        <div className="text-sm">
          @{new Date().getFullYear()} Nada Ayman. All Rights Reserved.
        </div>
        <div className="mt-4">
          <a
            href="https://github.com/nadaa15"
            target="_blank"
            className="text-white dark:text-gray-400 mx-2"
          >
            <i class="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/nada-ayman0/"
            target="_blank"
            className="text-white dark:text-gray-400 mx-2"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="mailTo:nadaayman0022@gmail.com"
            target="_blank"
            className="text-white dark:text-gray-400 mx-2"
          >
            <i class="fa-brands fa-google"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
