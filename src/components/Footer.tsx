import { Instagram, Facebook, Pinterest, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h2 className="font-script text-accent text-3xl mb-4">Bridal Beauty</h2>
            <p className="mb-6">
              Creating timeless beauty for your special day. Professional makeup artistry for brides and bridal parties.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:bg-accent hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:bg-accent hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:bg-accent hover:text-white transition-colors"
                aria-label="Pinterest"
              >
                <Pinterest className="h-5 w-5" />
              </a>
              <a 
                href="mailto:hello@bridalbeauty.com" 
                className="bg-white p-2 rounded-full hover:bg-accent hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="/services" className="hover:text-accent transition-colors">Services</a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-accent transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="/about" className="hover:text-accent transition-colors">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">Contact</a>
              </li>
              <li>
                <a href="/booking" className="hover:text-accent transition-colors">Book Now</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="hover:text-accent transition-colors">Bridal Makeup</a>
              </li>
              <li>
                <a href="/services" className="hover:text-accent transition-colors">Bridesmaid Makeup</a>
              </li>
              <li>
                <a href="/services" className="hover:text-accent transition-colors">Engagement Makeup</a>
              </li>
              <li>
                <a href="/services" className="hover:text-accent transition-colors">Special Event Makeup</a>
              </li>
              <li>
                <a href="/services" className="hover:text-accent transition-colors">Makeup Lessons</a>
              </li>
              <li>
                <a href="/services" className="hover:text-accent transition-colors">Group Services</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to receive beauty tips, special offers, and updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="form-input bg-white"
                required
              />
              <Button type="submit" className="btn-accent w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-primary pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bridal Beauty. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
