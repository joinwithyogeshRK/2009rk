import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      likes: 98,
      comments: 12
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      likes: 156,
      comments: 24
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1509955252650-8f558c2b8735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      likes: 87,
      comments: 9
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      likes: 112,
      comments: 15
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      likes: 143,
      comments: 21
    }
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="heading-script mb-4">Instagram</h2>
        <h3 className="heading-serif mb-6">Follow Our Journey</h3>
        <p className="text-lg max-w-2xl mx-auto">
          Follow us on Instagram for daily inspiration, behind-the-scenes content, and makeup tips.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {instagramPosts.map((post) => (
          <div key={post.id} className="portfolio-item group relative">
            <img 
              src={post.image} 
              alt={`Instagram post ${post.id}`} 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="text-white text-center">
                <div className="flex items-center justify-center space-x-4">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    {post.likes}
                  </span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2h-2.5a2 2 0 0 0-1.5.7l-1.7 2.6a1 1 0 0 1-1.7 0l-1.7-2.6a2 2 0 0 0-1.5-.7H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10z" />
                    </svg>
                    {post.comments}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button asChild className="btn-outline">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Instagram className="mr-2 h-4 w-4" /> Follow on Instagram
          </a>
        </Button>
      </div>
    </section>
  );
};

export default InstagramFeed;
