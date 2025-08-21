import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPreview = () => {
  const services = [
    {
      id: 1,
      title: "Bridal Makeup",
      description: "Complete bridal makeup service using premium products for a flawless, long-lasting look on your special day.",
      image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: 2,
      title: "Bridesmaid Makeup",
      description: "Beautiful makeup for your bridal party that complements your look while letting each bridesmaid shine.",
      image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: 3,
      title: "Special Event Makeup",
      description: "Glamorous makeup for engagement photos, rehearsal dinners, and other special occasions.",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    }
  ];

  return (
    <section className="section-container bg-surface">
      <div className="text-center mb-12">
        <h2 className="heading-script mb-4">Services</h2>
        <h3 className="heading-serif mb-6">Bridal Beauty Services</h3>
        <p className="text-lg max-w-2xl mx-auto">
          Professional makeup services tailored to your unique style and wedding vision.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="service-card group hover:shadow-md transition-shadow">
            <div className="h-64 mb-4 overflow-hidden rounded-t-lg">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="heading-sans mb-3">{service.title}</h3>
            <p className="mb-4">{service.description}</p>
            <a 
              href="/services" 
              className="text-accent font-medium inline-flex items-center hover:underline"
            >
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button asChild className="btn-accent">
          <a href="/services">View All Services</a>
        </Button>
      </div>
    </section>
  );
};

export default ServicesPreview;
