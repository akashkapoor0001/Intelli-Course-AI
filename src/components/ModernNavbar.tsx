
import { useNavigate, useLocation, Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ModernNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  const isLoggedIn = location.pathname === '/dashboard';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`modern-nav ${scrolled ? 'bg-black/80' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold gradient-heading">CourseCompass</h1>
          </Link>
          
          <nav className="hidden md:flex ml-12 space-x-1">
            <Link to="/learn-more" className="nav-item">Learning</Link>
            <Link to="#" className="nav-item">Community</Link>
            <Link to="#" className="nav-item">Company</Link>
            <Link to="#" className="nav-item">Contact</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate('/login')}
              className="border-white/20 hover:bg-white/10"
            >
              Logout
            </Button>
          ) : (
            <>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/login')}
                className="text-white hover:bg-white/10"
              >
                Log in
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                onClick={() => navigate('/login')}
                className="bg-white text-black hover:bg-white/90"
              >
                Sign up
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default ModernNavbar;
