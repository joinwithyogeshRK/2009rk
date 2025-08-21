import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface GalleryItem {
  id: number;
  category: string;
  image: string;
  title: string;
}

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [galleryItems] = useState<GalleryItem[]>([
    {
      id: 1,
      category: 'bridal',
      image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      title: 'Classic Bridal Look'
    },
    {
      id: 2,
      category: 'bridal',
      image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      title: 'Modern Bridal Makeup'
    },
    {
      id: 3,
      category: 'bridal',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
      title: 'Romantic Bridal Style'
    },
    {
      id: 4,
      category: 'bridal',
      image: 'https://images.unsplash.com/photo-1623244307563-f9ade3df13c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
      title: 'Elegant Bridal Beauty'
    },
    {
      id: 5,
      category: 'bridesmaid',
      image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      title: 'Bridesmaid Makeup'
    },
    {
      id: 6,
      category: 'bridesmaid',
      image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      title: 'Natural Bridesmaid Look'
    },
    {
      id: 7,
      category: 'engagement',
      image: 'https://images.unsplash.com/photo-1509955252650-8f558c2b8735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      title: 'Engagement Session Makeup'
    },
    {
      id: 8,
      category: 'engagement',
      image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
      title: 'Engagement Photo Ready'
    },
    {
      id: 9,
      category: 'special',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      title: 'Special Event Glam'
    },
    {
      id: 10,
      category: 'special',
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
      title: 'Evening Event Makeup'
    },
    {
      id: 11,
      category: 'bridal',
      image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      title: 'Soft Glam Bridal'
    },
    {
      id: 12,
      category: 'bridesmaid',
      image: 'https://images.unsplash.com/photo-1559654759-d8ef7854a454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      title: 'Coordinated Bridesmaid Looks'
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Portfolio Hero */}
        <section className="relative bg-primary/20 py-20">
          <div className="section-container text-center">
            <h1 className="heading-script mb-4">Portfolio</h1>
            <h2 className="heading-serif mb-6">Bridal Beauty Gallery</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Browse through our collection of beautiful bridal looks, bridesmaid makeup, and special event styling.
            </p>
          </div>
        </section>
        
        {/* Gallery */}
        <section className="section-container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-surface border border-primary">
                <TabsTrigger value="all" className="text-foreground">All</TabsTrigger>
                <TabsTrigger value="bridal" className="text-foreground">Bridal</TabsTrigger>
                <TabsTrigger value="bridesmaid" className="text-foreground">Bridesmaid</TabsTrigger>
                <TabsTrigger value="engagement" className="text-foreground">Engagement</TabsTrigger>
                <TabsTrigger value="special" className="text-foreground">Special Events</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                  <div key={item.id} className="portfolio-item group">
                    <img src={item.image} alt={item.title} className="w-full h-80 object-cover" />
                    <div className="p-4 bg-white">
                      <h3 className="font-medium text-lg">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {['bridal', 'bridesmaid', 'engagement', 'special'].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <div key={item.id} className="portfolio-item group">
                        <img src={item.image} alt={item.title} className="w-full h-80 object-cover" />
                        <div className="p-4 bg-white">
                          <h3 className="font-medium text-lg">{item.title}</h3>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
