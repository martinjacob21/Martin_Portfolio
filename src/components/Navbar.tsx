import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight group relative">
              <span className="text-primary transition-colors duration-300 group-hover:text-white">Martin</span>
              <span className="text-secondary transition-colors duration-300 group-hover:text-primary">.Jacob</span>
              <span className="absolute -inset-1 -z-10 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={cn(
                  "text-foreground hover:text-primary transition-colors duration-300 relative group py-1",
                  location === item.href && "text-primary"
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300",
                  location === item.href && "w-full"
                )}></span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-muted/90 backdrop-blur-sm shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={cn(
                "block px-3 py-3 rounded-md text-foreground hover:text-primary hover:bg-background transition-all duration-300 relative overflow-hidden",
                location === item.href ? "text-primary bg-background/50" : ""
              )}
              onClick={() => setIsOpen(false)}
            >
              <span className="relative z-10">{item.label}</span>
              <span className={cn(
                "absolute bottom-0 left-0 w-1 h-full bg-primary transition-all duration-300",
                location === item.href ? "opacity-100" : "opacity-0"
              )}></span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
