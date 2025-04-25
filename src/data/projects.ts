import { ProjectProps } from "../components/ProjectCard";

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Project Fair",
    description: "A responsive web application where users can add projects like GitHub and manage them. Projects are made available to all users. Features include all CRUD operations.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    codeLink: "https://github.com/martinjacob21",
    demoLink: "https://project-fair-mern.netlify.app"
  },
  {
    id: 2,
    title: "E-cart",
    description: "A responsive e-commerce website with functionalities for displaying products, adding products to cart and wishlist, removing products, and updating the cart. Uses Redux toolkit for state management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["React.js", "REST API", "Redux"],
    codeLink: "https://github.com/martinjacob21",
    demoLink: "https://e-cart-shopping-app.netlify.app"
  },
  {
    id: 3,
    title: "Video Library",
    description: "A responsive web application for uploading videos with features to add videos, delete videos, create categories, and drag and drop videos to different categories.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["React.js", "React Bootstrap", "Bootswatch", "JSON Server"],
    codeLink: "https://github.com/martinjacob21",
    demoLink: "https://video-library-app-react.netlify.app"
  },
  {
    id: 4,
    title: "Weather App",
    description: "A responsive web application for finding the weather of current location and other locations using a weather API.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "API"],
    codeLink: "https://github.com/martinjacob21",
    demoLink: "https://weather-app-location-api.netlify.app"
  }
];
