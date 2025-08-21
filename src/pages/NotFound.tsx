import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="heading-script text-6xl mb-4">Oops!</h1>
        <h2 className="heading-serif text-3xl mb-6">Page Not Found</h2>
        <p className="text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="btn-accent">
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
