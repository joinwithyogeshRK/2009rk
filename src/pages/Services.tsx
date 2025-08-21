import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesList from '@/components/ServicesList';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Services Hero */}
        <section className="relative bg-primary/20 py-20">
          <div className="section-container text-center">
            <h1 className="heading-script mb-4">Our Services</h1>
            <h2 className="heading-serif mb-6">Bridal Beauty Packages</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Discover our carefully crafted makeup and beauty services designed to make you look and feel your best on your special day.
            </p>
            <Button asChild className="btn-accent">
              <a href="/booking">
                <Calendar className="mr-2 h-4 w-4" /> Book a Consultation
              </a>
            </Button>
          </div>
        </section>
        
        <ServicesList />
        
        {/* FAQ Section */}
        <section className="section-container bg-surface">
          <div className="text-center mb-12">
            <h2 className="heading-serif mb-4">Frequently Asked Questions</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Everything you need to know about our bridal beauty services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-style">
              <h3 className="heading-sans mb-3">How far in advance should I book?</h3>
              <p>We recommend booking 6-9 months in advance for wedding dates, especially during peak season (May-October). For trials, book 3-4 months before your wedding.</p>
            </div>
            
            <div className="card-style">
              <h3 className="heading-sans mb-3">Do you travel to the venue?</h3>
              <p>Yes! We offer on-location services throughout the area. Travel fees may apply depending on the distance.</p>
            </div>
            
            <div className="card-style">
              <h3 className="heading-sans mb-3">What happens during a trial?</h3>
              <p>During your trial, we'll discuss your vision, try different looks, and finalize the perfect style for your wedding day. Trials typically last 2-3 hours.</p>
            </div>
            
            <div className="card-style">
              <h3 className="heading-sans mb-3">What products do you use?</h3>
              <p>We use high-quality, long-lasting products from brands like Charlotte Tilbury, MAC, NARS, and Bobbi Brown that photograph beautifully and last all day.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
