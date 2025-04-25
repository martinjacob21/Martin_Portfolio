import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "../components/ui/button";
import { apiRequest } from "../lib/queryClient";
import { useToast } from "../hooks/use-toast";
import profileImagePath from "../assets/profileImage.jpg";

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();
  
  const handleDownloadResume = async () => {
    setIsDownloading(true);
    
    try {
      const response = await apiRequest("GET", "/api/resume", undefined);
      
      if (!response.ok) {
        throw new Error("Failed to download resume");
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "martin-jacob-resume.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast({
        title: "Download failed",
        description: "There was a problem downloading the resume. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
  };
  
  return (
    <section className="py-24 bg-muted pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src={profileImagePath} 
                alt="Martin Jacob, MEARN Stack Developer" 
                className="w-full rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 relative inline-block group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">ME(A)RN Full Stack Developer</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm <span className="text-primary font-medium relative inline-block group cursor-default">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Martin Jacob</span>
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </span>, a passionate developer with a Bachelor of Technology in Information Technology from Amal Jyothi College of Engineering. Currently working at <span className="text-secondary hover:text-primary transition-colors duration-300 cursor-default">NyxSpectra</span> as a ME(A)RN Full Stack Developer, I design and develop dynamic web applications using MongoDB, Express.js, Angular, and Node.js.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A collaborative team player with a commitment to building a positive business culture. I excel at creating scalable backend solutions and RESTful APIs while implementing responsive front-end features. I work efficiently in Agile environments and follow best practices for code quality and security.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Throughout my career, I've developed expertise in full-stack development, performance optimization, and creating elegant solutions to complex problems. My experience spans from my current role at NyxSpectra to previous internships at Luminar Technolab and Leopard Tech Labs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold mb-2 text-primary">Education</h4>
                <p className="text-gray-300">Bachelor of Technology in Information Technology (2019-2023)</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-primary">Experience</h4>
                <p className="text-gray-300">NyxSpectra, Luminar Technolab, Leopard Tech Labs</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-primary">Phone</h4>
                <p className="text-gray-300">7510471292</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-primary">Email</h4>
                <p className="text-gray-300">martinjacob2001mj@gmail.com</p>
              </div>
            </div>
            
            <Button 
              onClick={handleDownloadResume} 
              className="inline-flex items-center bg-background text-primary border border-primary px-6 py-3 rounded-md transition-all duration-300 group relative overflow-hidden hover:border-transparent hover:shadow-lg hover:shadow-primary/20"
              disabled={isDownloading}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Download className="h-5 w-5 mr-2 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {isDownloading ? "Downloading..." : "Download Resume"}
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
