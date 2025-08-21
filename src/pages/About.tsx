import { useEffect } from 'react';
import { Calendar, Award, Heart, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* About Hero */}
        <section className="relative bg-primary/20 py-20">
          <div className="section-container text-center">
            <h1 className="heading-script mb-4">About Me</h1>
            <h2 className="heading-serif mb-6">The Artist Behind Bridal Beauty</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Passionate about making brides feel beautiful and confident on their special day.
            </p>
          </div>
        </section>
        
        {/* Artist Bio */}
        <section className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/artist-portrait.jpg" 
                alt="Makeup Artist Portrait" 
                className="rounded-lg shadow-lg w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80";
                }}
              />
            </div>
            <div>
              <h2 className="heading-serif mb-6">Emily Johnson</h2>
              <p className="text-lg mb-4">
                With over 8 years of experience in bridal makeup artistry, I've had the privilege of being part of hundreds of special days, helping brides look and feel their absolute best.
              </p>
              <p className="text-lg mb-4">
                My approach combines technical expertise with a deep understanding of what makes each bride unique. I believe that bridal makeup should enhance your natural beauty while ensuring you still look like yourself—just the most radiant version.
              </p>
              <p className="text-lg mb-6">
                I'm trained in the latest techniques and continuously update my skills and premium product knowledge to provide exceptional service to all my clients.
              </p>
              <Button asChild className="btn-accent">
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Credentials */}
        <section className="bg-surface py-16">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="heading-serif mb-4">Credentials & Experience</h2>
              <p className="text-lg max-w-2xl mx-auto">
                Professional training and industry recognition
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-style text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-accent" />
                </div>
                <h3 className="heading-sans mb-2">Certified</h3>
                <p>Professional certification from the Academy of Makeup Arts</p>
              </div>
              
              <div className="card-style text-center">
                <div className="flex justify-center mb-4">
                  <Calendar className="h-12 w-12 text-accent" />
                </div>
                <h3 className="heading-sans mb-2">8+ Years</h3>
                <p>Dedicated experience in bridal and special event makeup</p>
              </div>
              
              <div className="card-style text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-accent" />
                </div>
                <h3 className="heading-sans mb-2">500+ Brides</h3>
                <p>Happy brides who trusted me with their special day</p>
              </div>
              
              <div className="card-style text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-accent" />
                </div>
                <h3 className="heading-sans mb-2">Featured</h3>
                <p>Work published in wedding magazines and blogs</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Philosophy */}
        <section className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-serif mb-6">My Beauty Philosophy</h2>
            <p className="text-lg mb-6">
              I believe that makeup should enhance your natural beauty, not mask it. My goal is to create a look that makes you feel confident and beautiful, while still looking like yourself.
            </p>
            <p className="text-lg mb-6">
              Every bride deserves to feel special and radiant on her wedding day. I take the time to understand your vision and preferences, ensuring that your makeup complements your dress, theme, and personal style.
            </p>
            <p className="text-lg mb-6">
              Using only premium, long-lasting products, I create looks that not only photograph beautifully but also stay fresh throughout your special day—from the first look to the last dance.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
