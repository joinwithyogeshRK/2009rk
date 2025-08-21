import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Service {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const ServicesList = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Bridal Makeup",
      price: "$350",
      description: "Complete bridal makeup service using premium products for a flawless, long-lasting look on your special day.",
      features: [
        "Consultation and personalized look design",
        "Premium, long-lasting products",
        "False lashes included",
        "Touch-up kit for the day",
        "Travel to your venue (within 25 miles)"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Bridal Trial",
      price: "$175",
      description: "Pre-wedding makeup trial to perfect your look before the big day.",
      features: [
        "2-hour session",
        "Multiple look options",
        "Product testing for allergies",
        "Lighting tests for photography",
        "Detailed notes for wedding day"
      ]
    },
    {
      id: 3,
      title: "Bridesmaid Makeup",
      price: "$150",
      description: "Beautiful makeup for your bridal party that complements your look while letting each bridesmaid shine.",
      features: [
        "Coordinated with bridal makeup",
        "Customized to each bridesmaid",
        "Long-lasting application",
        "False lashes available (+$25)",
        "Group discounts available"
      ]
    },
    {
      id: 4,
      title: "Mother of Bride/Groom",
      price: "$125",
      description: "Age-appropriate, elegant makeup for mothers that photographs beautifully and lasts all day.",
      features: [
        "Mature skin preparation",
        "Natural, flattering look",
        "Long-wearing products",
        "Waterproof options available",
        "Sensitivity-tested products"
      ]
    },
    {
      id: 5,
      title: "Engagement Photo Makeup",
      price: "$175",
      description: "Camera-ready makeup for your engagement photoshoot that enhances your features while looking natural.",
      features: [
        "Photo-optimized application",
        "Natural yet defined look",
        "Consultation before application",
        "Lasts throughout photoshoot",
        "Touch-up tips provided"
      ]
    },
    {
      id: 6,
      title: "Special Event Makeup",
      price: "$125",
      description: "Glamorous makeup for rehearsal dinners, showers, and other wedding-related events.",
      features: [
        "Customized to event type",
        "Day or evening appropriate",
        "Coordinated with outfit",
        "False lashes optional (+$25)",
        "Makeup removal tips provided"
      ]
    }
  ];

  return (
    <section className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`service-card relative ${service.popular ? 'border-accent shadow-md' : ''}`}
          >
            {service.popular && (
              <div className="absolute -top-4 right-4 bg-accent text-white text-sm font-medium py-1 px-3 rounded-full">
                Popular
              </div>
            )}
            
            <h3 className="heading-sans mb-2">{service.title}</h3>
            <div className="text-2xl font-serif text-accent mb-4">{service.price}</div>
            <p className="mb-6">{service.description}</p>
            
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild className="btn-accent w-full mt-auto">
              <a href="/booking">Book Now</a>
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-primary/20 p-8 rounded-lg">
        <h3 className="heading-serif mb-4 text-center">Group Packages</h3>
        <p className="text-center mb-6">
          Planning services for your entire bridal party? Contact us for special group rates and custom packages.
        </p>
        <div className="flex justify-center">
          <Button asChild className="btn-accent">
            <a href="/contact">Contact for Group Rates</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
