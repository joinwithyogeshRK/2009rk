import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioPreview = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      category: "Bridal"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      category: "Bridal"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      category: "Bridesmaid"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1509955252650-8f558c2b8735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      category: "Engagement"
    }
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="heading-script mb-4">Portfolio</h2>
        <h3 className="heading-serif mb-6">Recent Work</h3>
        <p className="text-lg max-w-2xl mx-auto">
          Browse through a selection of our beautiful bridal makeup looks.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item group relative">
            <img 
              src={item.image} 
              alt={`Portfolio ${item.category}`} 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white font-medium bg-accent/80 px-4 py-2 rounded">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button asChild className="btn-accent">
          <a href="/portfolio">
            View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default PortfolioPreview;
