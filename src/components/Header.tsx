
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { BookOpen, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const isLoggedIn = location.pathname !== '/login' && location.pathname !== '/';
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };
  
  return (
    <header className="w-full py-4 px-6 border-b bg-white/80 backdrop-blur-sm fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold gradient-heading">CourseCompass</h1>
        </div>
        
        {isLoggedIn && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
