import { motion } from "framer-motion";
import Hero from "../components/Hero";
import { Button } from "../components/ui/button";
import { Link } from "wouter";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-2">Featured <span className="text-primary">Projects</span></h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-4 text-gray-300">Some of my recent development work</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button asChild  className="border-primary text-white hover:bg-primary/10">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to bring your ideas to life?</h2>
            <p className="text-xl text-gray-300 mb-8">Let's collaborate on your next project and create something amazing together.</p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
