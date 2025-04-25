import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  return (
    <section className="py-24 bg-muted pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Get In <span className="text-primary">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300">Let's discuss your project or just say hello</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-background p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="flex items-start mb-6">
                <div className="text-primary mr-4 mt-1">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:martinjacob2001mj@gmail.com" className="text-gray-300 hover:text-primary transition duration-300">
                    martinjacob2001mj@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="text-primary mr-4 mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-300">Kerala, India</p>
                  <p className="text-gray-300">(Remote Available)</p>
                </div>
              </div>
              
              <div className="flex items-start mb-8">
                <div className="text-primary mr-4 mt-1">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Availability</h4>
                  <p className="text-gray-300">Open to new opportunities</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Social Media</h3>
              <SocialLinks variant="contact" />
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
