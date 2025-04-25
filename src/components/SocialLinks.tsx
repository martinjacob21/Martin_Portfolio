import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

interface SocialLinksProps {
  variant?: "footer" | "contact";
}

const SocialLinks = ({ variant = "contact" }: SocialLinksProps) => {
  const isContact = variant === "contact";
  
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/martinjacob21/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          isContact 
            ? "bg-muted hover:bg-primary text-muted-foreground hover:text-white p-3 rounded-full transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-primary/20" 
            : "text-muted-foreground hover:text-primary transform hover:scale-125"
        } transition-all duration-300 relative group`}
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="relative z-10" />
        {isContact && <span className="absolute inset-0 bg-primary rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-20 transition-all duration-300 z-0"></span>}
      </a>
      <a
        href="https://github.com/martinjacob21"
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          isContact 
            ? "bg-muted hover:bg-primary text-muted-foreground hover:text-white p-3 rounded-full transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-primary/20" 
            : "text-muted-foreground hover:text-primary transform hover:scale-125"
        } transition-all duration-300 relative group`}
        aria-label="GitHub"
      >
        <FaGithub className="relative z-10" />
        {isContact && <span className="absolute inset-0 bg-primary rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-20 transition-all duration-300 z-0"></span>}
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          isContact 
            ? "bg-muted hover:bg-primary text-muted-foreground hover:text-white p-3 rounded-full transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-primary/20" 
            : "text-muted-foreground hover:text-primary transform hover:scale-125"
        } transition-all duration-300 relative group`}
        aria-label="Twitter"
      >
        <FaTwitter className="relative z-10" />
        {isContact && <span className="absolute inset-0 bg-primary rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-20 transition-all duration-300 z-0"></span>}
      </a>
    </div>
  );
};

export default SocialLinks;
