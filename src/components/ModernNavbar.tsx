import { useNavigate, useLocation, Link } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ModernNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLoggedIn = location.pathname === "/dashboard";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`modern-nav fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-black/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2"
          >
            <BookOpen className="h-8 w-8 mt-1 text-primary" />
            <h1 className="text-2xl font-bold gradient-heading">
              IntelliCourse
            </h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 ml-8">
          <Link to="/learn-more" className="nav-item">
            Learning
          </Link>
          <Link to="/community" className="nav-item">
            Community
          </Link>
          <Link to="/company" className="nav-item">
            Company
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
          <Link to="/ai-plus">
            <Button
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md 
               hover:shadow-[0_0_24px_rgba(150,150,255,0.6)] 
               transition-all duration-300 ease-in-out"
            >
              IntelliCourse AI+
            </Button>
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/login")}
              className="border-white/20 hover:bg-white/10"
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/login")}
                className="text-white hover:bg-white/10"
              >
                Log in
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => navigate("/login")}
                className="bg-white text-black hover:bg-white/90"
              >
                Sign up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50 fixed top-7 right-5">
          <button
            onClick={toggleMobileMenu}
            className={`text-white transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Animated Mobile Menu */}
        <div
          className={`md:hidden bg-black/90 backdrop-blur-sm px-4 pt-4 pb-6 rounded-b-xl shadow-xl transition-all duration-500 ease-in-out origin-top fixed top-0 left-0 right-0 ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-y-75 overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-4">
            <Link
              to="/learn-more"
              onClick={closeMobileMenu}
              className="text-white text-base hover:text-indigo-300 transition"
            >
              Learning
            </Link>
            <Link
              to="/community"
              onClick={closeMobileMenu}
              className="text-white text-base hover:text-indigo-300 transition"
            >
              Community
            </Link>
            <Link
              to="/company"
              onClick={closeMobileMenu}
              className="text-white text-base hover:text-indigo-300 transition"
            >
              Company
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="text-white text-base hover:text-indigo-300 transition"
            >
              Contact
            </Link>

            <Link to="/ai-plus">
              <Button
                variant="default"
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md 
                   hover:shadow-[0_0_24px_rgba(150,150,255,0.6)] 
                   transition-all duration-300 ease-in-out w-full"
              >
                IntelliCourse AI+
              </Button>
            </Link>

            <div className="pt-4 flex flex-col gap-2">
              {isLoggedIn ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    navigate("/login");
                    closeMobileMenu();
                  }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      navigate("/login");
                      closeMobileMenu();
                    }}
                    className="text-white"
                  >
                    Log in
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => {
                      navigate("/login");
                      closeMobileMenu();
                    }}
                    className="bg-white text-black"
                  >
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ModernNavbar;
