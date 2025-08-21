import { useEffect, useState } from 'react';
import { Calendar, Clock, Check } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
  notes: string;
}

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.date || !formData.service) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Booking request sent! We'll contact you to confirm your appointment.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        service: '',
        notes: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Booking Hero */}
        <section className="relative bg-primary/20 py-20">
          <div className="section-container text-center">
            <h1 className="heading-script mb-4">Book Now</h1>
            <h2 className="heading-serif mb-6">Schedule Your Bridal Beauty Service</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Take the first step towards looking your best on your special day by booking a consultation or service.
            </p>
          </div>
        </section>
        
        {/* Booking Process */}
        <section className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-serif mb-6">How Booking Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card-style text-center">
                <div className="bg-primary/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-xl">1</span>
                </div>
                <h3 className="heading-sans mb-3">Submit Request</h3>
                <p>Fill out the booking form with your details and preferred date</p>
              </div>
              
              <div className="card-style text-center">
                <div className="bg-primary/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-xl">2</span>
                </div>
                <h3 className="heading-sans mb-3">Confirmation</h3>
                <p>We'll contact you within 24 hours to confirm availability</p>
              </div>
              
              <div className="card-style text-center">
                <div className="bg-primary/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-xl">3</span>
                </div>
                <h3 className="heading-sans mb-3">Secure Your Date</h3>
                <p>Pay the deposit to secure your booking</p>
              </div>
            </div>
          </div>
          
          {/* Booking Tabs */}
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="appointment" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-surface border border-primary">
                <TabsTrigger value="appointment" className="text-foreground">Book Appointment</TabsTrigger>
                <TabsTrigger value="consultation" className="text-foreground">Request Consultation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="appointment" className="mt-6">
                <div className="card-style">
                  <h3 className="heading-sans mb-6">Book Your Bridal Beauty Service</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block mb-2 font-medium">
                          Full Name <span className="text-error">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="form-input"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                          Email <span className="text-error">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          required
                          className="form-input"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block mb-2 font-medium">
                          Phone Number <span className="text-error">*</span>
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          required
                          className="form-input"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="date" className="block mb-2 font-medium">
                          Event Date <span className="text-error">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                          <Calendar className="absolute right-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block mb-2 font-medium">
                        Service <span className="text-error">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="form-input w-full"
                      >
                        <option value="">Select a service</option>
                        <option value="bridal-makeup">Bridal Makeup</option>
                        <option value="bridal-trial">Bridal Makeup Trial</option>
                        <option value="bridesmaid-makeup">Bridesmaid Makeup</option>
                        <option value="mother-makeup">Mother of Bride/Groom Makeup</option>
                        <option value="engagement-makeup">Engagement Photo Makeup</option>
                        <option value="special-event">Special Event Makeup</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="notes" className="block mb-2 font-medium">
                        Additional Notes
                      </label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Tell us more about your event, preferences, or any questions you have"
                        className="form-input min-h-[120px]"
                      />
                    </div>
                    
                    <Button type="submit" className="btn-accent w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Check className="mr-2 h-4 w-4" /> Book Appointment
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </TabsContent>
              
              <TabsContent value="consultation" className="mt-6">
                <div className="card-style">
                  <h3 className="heading-sans mb-6">Request a Free Consultation</h3>
                  <p className="mb-6">
                    Not sure which service is right for you? Schedule a free 15-minute consultation to discuss your needs and get personalized recommendations.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="consult-name" className="block mb-2 font-medium">
                          Full Name <span className="text-error">*</span>
                        </label>
                        <Input
                          id="consult-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="form-input"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="consult-email" className="block mb-2 font-medium">
                          Email <span className="text-error">*</span>
                        </label>
                        <Input
                          id="consult-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          required
                          className="form-input"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="consult-phone" className="block mb-2 font-medium">
                          Phone Number <span className="text-error">*</span>
                        </label>
                        <Input
                          id="consult-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          required
                          className="form-input"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="consult-date" className="block mb-2 font-medium">
                          Preferred Date <span className="text-error">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            id="consult-date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                          <Calendar className="absolute right-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="consult-notes" className="block mb-2 font-medium">
                        What would you like to discuss?
                      </label>
                      <Textarea
                        id="consult-notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Tell us about your event and what you're looking for"
                        className="form-input min-h-[120px]"
                      />
                    </div>
                    
                    <Button type="submit" className="btn-accent w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Clock className="mr-2 h-4 w-4" /> Request Consultation
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Policies */}
        <section className="section-container bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-serif mb-8 text-center">Booking Policies</h2>
            
            <div className="space-y-6">
              <div className="card-style">
                <h3 className="heading-sans mb-3">Deposits & Payments</h3>
                <p>A 50% non-refundable deposit is required to secure your booking date. The remaining balance is due 14 days before your event date. We accept credit cards, PayPal, and bank transfers.</p>
              </div>
              
              <div className="card-style">
                <h3 className="heading-sans mb-3">Cancellation Policy</h3>
                <p>Cancellations made more than 30 days before your event date will receive a refund of any payments made beyond the non-refundable deposit. Cancellations within 30 days of your event are non-refundable.</p>
              </div>
              
              <div className="card-style">
                <h3 className="heading-sans mb-3">Rescheduling</h3>
                <p>Rescheduling requests must be made at least 14 days before your event date and are subject to availability. A rescheduling fee may apply.</p>
              </div>
              
              <div className="card-style">
                <h3 className="heading-sans mb-3">Trials</h3>
                <p>We highly recommend scheduling a makeup trial 1-3 months before your wedding day. Trials are booked separately from your wedding day services and are not included in wedding day packages.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
