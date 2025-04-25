import { motion } from "framer-motion";

export interface ExperienceProps {
  id: number;
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const TimelineItem = ({ experience }: { experience: ExperienceProps }) => {
  return (
    <motion.div 
      className="timeline-container relative mb-12 group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="timeline-dot group-hover:scale-150 group-hover:bg-primary transition-all duration-300"></div>
      <div className="mb-2">
        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm group-hover:bg-primary/30 transition-all duration-300">
          {experience.period}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">{experience.title}</h3>
      <h4 className="text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{experience.company}</h4>
      <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="bg-background px-2 py-1 rounded-md text-xs text-gray-300 hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
