import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="z-10">
          <h1 className="font-script text-accent text-3xl">Bridal Beauty</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="/" 
            className={`font-medium transition-colors hover:text-accent ${isActive('/') ? 'text-accent' : 'text-foreground'}`}
          >
            Home
          </a>
          <a 
            href="/services" 
            className={`font-medium transition-colors hover:text-accent ${isActive('/services') ? 'text-accent' : 'text-foreground'}`}
          >
            Services
          </a>
          <a 
            href="/portfolio" 
            className={`font-medium transition-colors hover:text-accent ${isActive('/portfolio') ? 'text-accent' : 'text-foreground'}`}
          >
            Portfolio
          </a>
          <a 
            href="/about" 
            className={`font-medium transition-colors hover:text-accent ${isActive('/about') ? 'text-accent' : 'text-foreground'}`}
          >
            About
          </a>
          <a 
            href="/contact" 
            className={`font-medium transition-colors hover:text-accent ${isActive('/contact') ? 'text-accent' : 'text-foreground'}`}
          >
            Contact
          </a>
          <Button asChild className="btn-accent">
            <a href="/booking">Book Now</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-10 p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
        >
          <nav className="flex flex-col items-center space-y-6">
            <a 
              href="/" 
              className={`text-xl font-medium transition-colors hover:text-accent ${isActive('/') ? 'text-accent' : 'text-foreground'}`}
            >
              Home
            </a>
            <a 
              href="/services" 
              className={`text-xl font-medium transition-colors hover:text-accent ${isActive('/services') ? 'text-accent' : 'text-foreground'}`}
            >
              Services
            </a>
            <a 
              href="/portfolio" 
              className={`text-xl font-medium transition-colors hover:text-accent ${isActive('/portfolio') ? 'text-accent' : 'text-foreground'}`}
            >
              Portfolio
            </a>
            <a 
              href="/about" 
              className={`text-xl font-medium transition-colors hover:text-accent ${isActive('/about') ? 'text-accent' : 'text-foreground'}`}
            >
              About
            </a>
            <a 
              href="/contact" 
              className={`text-xl font-medium transition-colors hover:text-accent ${isActive('/contact') ? 'text-accent' : 'text-foreground'}`}
            >
              Contact
            </a>
            <Button asChild className="btn-accent mt-4">
              <a href="/booking">Book Now</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
