import { motion } from "framer-motion";
import { Code, Play } from "lucide-react";

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  codeLink: string;
  demoLink: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <motion.div
     className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
     <div className="relative h-48 overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-primary/40 text-white text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex justify-between">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-1.5 bg-background rounded-md hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            <Code className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-medium">Code</span>
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-1.5 bg-background rounded-md hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            <Play className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-medium">Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
