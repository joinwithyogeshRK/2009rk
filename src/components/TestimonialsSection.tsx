import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bride",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      quote: "I couldn't have been happier with my bridal makeup! It was exactly what I wanted - natural but enhanced, and it lasted all day through tears, hugs, and dancing. Highly recommend!",
      rating: 5
    },
    {
      id: 2,
      name: "Emily Davis",
      role: "Bride",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      quote: "The makeup for me and my bridesmaids was absolutely stunning. Everyone looked beautiful and the makeup lasted through the entire day and night. Thank you for making us look and feel amazing!",
      rating: 5
    },
    {
      id: 3,
      name: "Jessica Wilson",
      role: "Bride",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
      quote: "Not only is she an incredible makeup artist, but she's also so calming to have around on your wedding day. She listened to exactly what I wanted and delivered beyond my expectations.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-container bg-primary/20">
      <div className="text-center mb-12">
        <h2 className="heading-script mb-4">Testimonials</h2>
        <h3 className="heading-serif mb-6">What Our Brides Say</h3>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="testimonial-card">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto border-4 border-white shadow-md">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <div className="flex mb-4 justify-center md:justify-start">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-lg italic mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div>
                <p className="font-medium text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              onClick={prevTestimonial} 
              variant="outline" 
              size="icon" 
              className="rounded-full border-accent text-accent hover:bg-accent hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              onClick={nextTestimonial} 
              variant="outline" 
              size="icon" 
              className="rounded-full border-accent text-accent hover:bg-accent hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
