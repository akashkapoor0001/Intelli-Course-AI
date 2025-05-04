import { ArrowLeft, BookOpen } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ModernNavbar from "./ModernNavbar";

const IntelliCourseAIHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = location.pathname !== '/login' && location.pathname !== '/';

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  return isLoggedIn ? (
    <header className="w-full py-4 px-6 border-b border-white/10 bg-black/80 backdrop-blur-sm fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
        <BookOpen className="h-8 w-8 mt-1 text-primary" />
          <h1 className="text-2xl font-bold gradient-heading">IntelliCourse AI+</h1>
        </div>

        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      </div>
    </header>
  ) : (
    <ModernNavbar />
  );
};

export default IntelliCourseAIHeader;