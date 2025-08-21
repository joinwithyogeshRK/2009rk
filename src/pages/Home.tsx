import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import PortfolioPreview from '@/components/PortfolioPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import InstagramFeed from '@/components/InstagramFeed';
import { Button } from '@/components/ui/button';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* About Preview */}
        <section className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-script mb-4">About Me</h2>
              <h3 className="heading-serif mb-6">Bringing Your Beauty Vision to Life</h3>
              <p className="text-lg mb-6">
                With over 8 years of experience in bridal makeup artistry, I specialize in creating timeless, 
                elegant looks that enhance your natural beauty on your special day.
              </p>
              <Button asChild className="btn-accent">
                <a href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/about-preview.jpg" 
                alt="Makeup artist at work" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80";
                }}
              />
            </div>
          </div>
        </section>
        
        <ServicesPreview />
        <PortfolioPreview />
        <TestimonialsSection />
        <InstagramFeed />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
