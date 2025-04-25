import { motion } from "framer-motion";
import TimelineItem from "../components/TimelineItem";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section className="py-24 pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Work <span className="text-primary">Experience</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300">My professional journey</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map(experience => (
            <TimelineItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
