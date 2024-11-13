import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 ${
      isScrolled ? 'glass-effect subtle-border py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Code2 className="h-8 w-8 text-purple-400 transition-transform group-hover:scale-110" />
            <span className="text-xl font-semibold text-white">TheCraftWeb</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" 
                  className="text-gray-300 hover:text-white transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 
                           transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/services" 
                  className="text-gray-300 hover:text-white transition-colors relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 
                           transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/portfolio"
                  className="text-gray-300 hover:text-white transition-colors relative group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 
                           transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <a href="#contact"
               onClick={handleContactClick}
               className="px-4 py-2 rounded-lg bg-white text-gray-900 
                        hover:bg-gray-100 transition-all duration-200 font-medium">
              Contact
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} 
                  className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full glass-effect subtle-border mt-2">
          <div className="container-padding py-4 space-y-3">
            <Link to="/about"
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 
                           rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/services" 
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 
                           rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/portfolio"
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 
                           rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
            <a href="#contact"
               onClick={handleContactClick}
               className="block px-4 py-2 text-center rounded-lg bg-white text-gray-900 
                        hover:bg-gray-100 transition-all duration-200 font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}