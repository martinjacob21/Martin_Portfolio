import { motion } from "framer-motion";
import SkillBar from "../components/SkillBar";
import { frontendSkills, backendSkills, tools } from "../data/skills";

const Skills = () => {
  return (
    <section className="py-24 bg-muted pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">My <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300">Technologies and tools I work with</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <motion.div 
            className="bg-background p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary">Frontend Development</h3>
            
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div 
            className="bg-background p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary">Backend Development</h3>
            
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </motion.div>
          
          {/* Additional Skills */}
          <motion.div 
            className="bg-background p-8 rounded-lg shadow-lg md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary">Tools & Other Skills</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map(tool => (
                <div 
                  key={tool.id} 
                  className="bg-muted p-4 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:shadow-primary/20 hover:bg-background group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-primary text-2xl mb-2 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-secondary">
                    {tool.icon}
                  </div>
                  <span className="text-gray-300 group-hover:text-white relative z-10 transition-colors duration-300">{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
