import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Bridal Makeup" 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80";
          }}
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="heading-script mb-4 fade-in">Bridal Beauty</h1>
          <h2 className="heading-serif mb-6 fade-in">Enhancing Your Natural Beauty for Your Special Day</h2>
          <p className="text-lg mb-8 fade-in">
            Professional makeup artistry for brides and bridal parties. Creating timeless, elegant looks that make you feel confident and beautiful on your wedding day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in">
            <Button asChild className="btn-accent">
              <a href="/booking">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild className="btn-outline">
              <a href="/portfolio">View Portfolio</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
