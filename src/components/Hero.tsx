import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import profileImagePath from "../../src/assets/profileImage.jpg" //"./assets/IMG_20230627_144517.jpg";


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Hi, I'm <span className="relative inline-block group">
                <span className="relative z-10 text-primary transition-all duration-500 group-hover:text-white">Martin Jacob</span>
                <span className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium mb-6">
              <span className="relative inline-block overflow-hidden">
                <span className="text-muted-foreground transition-all duration-300 hover:text-primary cursor-default">
                  ME(A)RN Full Stack Developer 
                </span>
                <span className="relative z-10">
                  <span className="text-secondary transition-all duration-300 hover:text-white cursor-default"> at </span>
                  <span className="text-primary transition-all duration-300 hover:text-secondary cursor-default">NyxSpectra</span>
                </span>
              </span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-gray-300">
              A passionate developer with a Bachelor of Technology in Information Technology.
              Currently working at NyxSpectra, where I design and develop dynamic web applications using MongoDB, Express.js, Angular, and Node.js.
              I specialize in creating scalable backend solutions and responsive frontend experiences with a focus on performance and user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-secondary blur-lg opacity-30"></div>
              <div className="relative overflow-hidden rounded-lg group">
                <img 
                  src={profileImagePath} 
                  alt="Martin Jacob, MEARN Stack Developer" 
                  className="w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
