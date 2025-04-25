import { motion } from "framer-motion";

export interface SkillProps {
  name: string;
  percentage: number;
}

const SkillBar = ({ skill }: { skill: SkillProps }) => {
  return (
    <div className="mb-4 group">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 group-hover:text-primary transition-colors duration-300">{skill.name}</span>
        <span className="text-gray-300 group-hover:text-primary transition-colors duration-300">{skill.percentage}%</span>
      </div>
      <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden group-hover:bg-gray-600 transition-colors duration-300">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary transition-all duration-500"
          style={{ 
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" 
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;
