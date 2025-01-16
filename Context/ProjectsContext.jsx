import { createContext, useEffect, useState } from "react";
import mealify from "../src/assets/images/mealify.jpg";
import daniels from "../src/assets/images/daniels.jpg";
import viva from "../src/assets/images/vivadecor.png";
import slider from "../src/assets/images/slider.png";
import bookmark from "../src/assets/images/bookmarker.jpg";
import todo from "../src/assets/images/to-do.jpg";
import login from "../src/assets/images/login.jpg";
import cart from "../src/assets/images/cart.jpg";
import weather from "../src/assets/images/weather.webp";
import weather2 from "../src/assets/images/weather react.png";
import yummy from "../src/assets/images/yummy.png";
import note from "../src/assets/images/note.jpeg";
import freshcart from "../src/assets/images/fresh-cart.jpg";
import exclusive from "../src/assets/images/exclusive.png";

export const ProjectsContext = createContext();

export default function ProjectsContextProvider(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const myProjects = [
      {
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
        img: login,
        title: "Authontcator",
        description:
          "A responsive login system featuring user registration, login and logout, client-side validation for registration and login form, basic session management using LocaStorage",
        links: {
          site: "https://nadaa15.github.io/Login-system/",
          github: "https://github.com/nadaa15/Login-system/",
        },
        technologies: ["Html", "CSS", "Bootstrap", "JavaScript", "LocaStorage"],
        catg: "JavaScript",
      },
      {
        img: cart,
        title: "Shopping cart",
        description: `This is a simple e-commerce shopping cart web application that allows users to: Browse and add products to their shopping cart from the home page. View, increment, decrement, or remove products in their cart. The total price of items in the cart is dynamically updated as products are added, removed, or their quantities are changed. User authentication functionality with login and logout. All cart and user data is stored in the browser's localStorage.`,
        links: {
          site: "https://nadaa15.github.io/Shopping-Cart/",
          github: "https://github.com/nadaa15/Shopping-Cart/",
        },
        technologies: ["Html", "TailwindCSS", "JavaScript", "LocaStorage"],
        catg: "JavaScript",
      },
      {
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
    ];

    setProjects(myProjects);
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {props.children}
    </ProjectsContext.Provider>
  );
}
