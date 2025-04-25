import { Link } from "wouter";
import { FaLinkedinIn, FaGithub, FaTwitter, FaDev } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-primary font-bold text-xl tracking-tight">
              Martin<span className="text-secondary">.Jacob</span>
            </Link>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://dev.to" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition duration-300"
              aria-label="Dev.to"
            >
              <FaDev />
            </a>
          </div>
          
          <div className="mt-4 md:mt-0 text-muted-foreground">
            <p>&copy; {currentYear} Martin Jacob. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
