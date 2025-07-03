import { createContext, useEffect, useState } from "react";
import mealify from "../src/assets/images/mealify.jpg";
import daniels from "../src/assets/images/daniels.jpg";
import viva from "../src/assets/images/vivadecor.png";
import slider from "../src/assets/images/slider.png";
import bookmark from "../src/assets/images/bookmarker.jpg";
import todo from "../src/assets/images/to-do.jpg";
import weather from "../src/assets/images/weather.webp";
import weather2 from "../src/assets/images/weather react.png";
import yummy from "../src/assets/images/yummy.png";
import note from "../src/assets/images/note.jpeg";
import freshcart from "../src/assets/images/fresh-cart.jpg";
import exclusive from "../src/assets/images/exclusive.png";
import trio from "../src/assets/images/trio.png";

export const ProjectsContext = createContext();

export default function ProjectsContextProvider(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const myProjects = [
      {
        id: 1,
        img: mealify,
        title: "Mealify",
        description:
          "This project is a static restaurant web page built using HTML, CSS and media queries for responsive design. It aims to provide a modern, clean, and user-friendly interface that adapts to user preferences for light and dark themesusing :has pseudo-class and :checked selector.",
        links: {
          site: "https://nadaa15.github.io/Mealify/",
          github: "https://github.com/nadaa15/Mealify",
        },
        technologies: ["Html", "CSS", "Media Queries"],
        catg: "HTML & CSS",
      },
      {
        id: 2,
        img: daniels,
        title: "Portfolio template",
        description:
          "A personal portfolio website built using HTML, CSS, and Bootstrap, designed to be responsive and aesthetically pleasing and show your skills, experience and projects",
        links: {
          site: "https://nadaa15.github.io/Daniels/",
          github: "https://github.com/nadaa15/Daniels",
        },
        technologies: ["Html", "CSS", "Bootstrap"],
        catg: "HTML & CSS",
      },
      {
        id: 3,
        img: viva,
        title: "Viva Decor",
        description:
          "This is a basic responsive landing page created using HTML5, CSS3, and Bootsrap5. The landing page is structured using semantic elements and styled to provide a clean, user-friendly design. It is fully responsive and tested across multiple browsers for compatibility.",
        links: {
          site: "https://nadaa15.github.io/VivaDecor/",
          github: "https://github.com/nadaa15/VivaDecor",
        },
        technologies: ["Html", "CSS", "Bootstrap"],
        catg: "HTML & CSS",
      },
      {
        id: 4,
        img: slider,
        title: "Slider",
        description:
          "A fully responsive Image Gallery created using HTML, CSS, and JavaScript. This project allows users to view a collection of images with an interactive interface, including navigation buttons and dots for forward/backward movement, automatic image transitions, hover pause and swipe on touch devices.",
        links: {
          site: "https://nadaa15.github.io/Image-Gallery/",
          github: "https://github.com/nadaa15/Image-Gallery",
        },
        technologies: ["Html", "CSS", "JavaScript"],
        catg: "JavaScript",
      },
      {
        id: 5,
        img: bookmark,
        title: "Bookmarker",
        description:
          "A simple, responsive web application to manage and organize your bookmarks. built using HTML, CSS, Bootstrap and JavaScript",
        links: {
          site: "https://nadaa15.github.io/Bookmark/",
          github: "https://github.com/nadaa15/Bookmark",
        },
        technologies: ["Html", "CSS", "Bootstrap", "JavaScript", "LocaStorage"],
        catg: "JavaScript",
      },
      {
        id: 6,
        img: todo,
        title: "To-Do-List",
        description:
          "To-Do List Web App that demonstrates CRUD operations (Create, Read, Update, Delete, Search) built using HTML, CSS, Bootstrap, JS and Local Storage",
        links: {
          site: "https://nadaa15.github.io/To-Do-List/",
          github: "https://github.com/nadaa15/To-Do-List",
        },
        technologies: ["Html", "CSS", "Bootstrap", "JavaScript", "LocaStorage"],
        catg: "JavaScript",
      },
      {
        id: 7,
        img: weather,
        title: "Weather App",
        description:
          "A responsive Weather App that provides current weather information based on the user's location built using HTML, CSS, Bootstrap, JS, Weather API, Geolocation API.",
        links: {
          site: "https://nadaa15.github.io/Weather-App/",
          github: "https://github.com/nadaa15/Weather-App",
        },
        technologies: [
          "Html",
          "CSS",
          "Bootstrap",
          "JavaScript",
          "Weather API",
          "Geolocation API",
        ],
        catg: "JavaScript",
      },
      {
        id: 8,
        img: yummy,
        title: "Yummy",
        description:
          "A web application that allows users to explore various meals and recipes from around the world. It uses HTML, CSS, JavaScript, and jQuery, interacts with an external API to fetch meal data and Regular Expressions for form validation.",
        links: {
          site: "https://nadaa15.github.io/Yummy/",
          github: "https://github.com/nadaa15/Yummy",
        },
        technologies: [
          "Html",
          "CSS",
          "Bootstrap",
          "JavaScript",
          "jQuery",
          "Regex",
        ],
        catg: "JavaScript",
      },
      {
        id: 9,
        img: note,
        title: "Note-App",
        description:
          "A simple, responsive note-taking application built with React, React-Bootstrap, Recoil, and authentication support. This app allows users to register, log in, and manage their notes securely.",
        links: {
          site: "https://nadaa15.github.io/Note-App/",
          github: "https://github.com/nadaa15/Note-App",
        },
        technologies: [
          "React",
          "React Router",
          "React-Bootstrap",
          "Recoil",
          "Formik",
          "Yup",
          "Axios",
          "React-hot-toast",
        ],
        catg: "React",
      },
      {
        id: 10,
        img: freshcart,
        title: "Fresh-Cart",
        description:
          "FreshCart is an eCommerce application built using React, Tailwind CSS. It provides User authentication (login and signup), Displays products, categories, brands and product details, Shopping cart and wishlist functionality, Checkout process and Online payment",
        links: {
          site: "https://nadaa15.github.io/Fresh-Cart/",
          github: "https://github.com/nadaa15/Fresh-Cart",
        },
        technologies: [
          "React",
          "React Router",
          "TailwindCss",
          "Context API",
          "Formik",
          "Yup",
          "Axios",
          "jwt-decode",
          "React-hot-toast",
          "React-slick",
        ],
        catg: "React",
      },
      {
        id: 11,
        img: weather2,
        title: "Weather App using React",
        description:
          "A responsive Weather App that provides current weather information based on the user's location built using React.js, Redux toolkit, Material ui, Weather API, Geolocation API.",
        links: {
          site: "https://nadaa15.github.io/Weather-App-React/",
          github: "https://github.com/nadaa15/Weather-App-React",
        },
        technologies: [
          "React js",
          "Redux toolkit",
          "MUI",
          "Axios",
          "React-hot-toast",
          "React-slick",
          "Weather API",
          "Geolocation API",
        ],
        catg: "React",
      },
      {
        id: 12,
        img: exclusive,
        title: "Exclusive",
        description:
          "Exclusive is an eCommerce application built using React, Tailwind CSS, Redux Toolkit and Firebase. It provides User authentication (login and signup), Displaying and searching products, filtring by category, product details, Shopping cart and wishlist functionality, Checkout process",
        links: {
          site: "https://nadaa15.github.io/Exclusive-Store/",
          github: "https://github.com/nadaa15/Exclusive-Store",
        },
        technologies: [
          "React",
          "React Router",
          "TailwindCss",
          "Redux Toolkit",
          "Context API",
          "Firebase",
          "Axios",
          "React-hot-toast",
          "React-slick",
          "React-Helmet",
          "React-Paginate",
          "DummyJSON API",
        ],
        catg: "React",
      },
      {
        id: 13,
        img: trio,
        title: "SND (Shipping Services Platform)",
        description:
          `A web platform that connects customers with delivery service providers. Users can browse services, place orders, track shipments, and manage profiles, while providers can register, offer delivery options, and manage their orders. Built with Nuxt 3 for server-side rendering and enhanced SEO, with dynamic routing and form validation across multiple steps. The system includes user and provider dashboards, authentication, notification system, and responsive design based on Figma mockups.`,
        links: {
          site: "https://trio-snd.onrender.com",
          github: "https://github.com/nadaa15/Trio-Shipping-Services-Platform-",
        },
        technologies: [
           "Nuxt 3", "TypeScript", "Tailwind CSS", "Pinia", "Axios", "vuetify", "vee-validate", "yup", "swiper", "nuxtjs/i18n", "Figma", "Git"
        ],
        catg: "vue",
      },
    ];

    setProjects(myProjects);
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {props.children}
    </ProjectsContext.Provider>
  );
}
