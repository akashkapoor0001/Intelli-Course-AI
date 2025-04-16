
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { BookOpen, Users, Building2, PhoneCall } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";

// const ModernNavbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [scrolled, setScrolled] = useState(false);
  
//   const isLoggedIn = location.pathname === '/dashboard';
  
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   return (
//     <header className={`modern-nav ${scrolled ? 'bg-black/80' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <Link to="/" className="flex items-center gap-2 animate-slide-in">
//             <BookOpen className="h-6 w-6 text-primary" />
//             <h1 className="text-2xl font-bold gradient-heading">CourseCompass</h1>
//           </Link>
          
//           <nav className="hidden md:flex ml-12 space-x-1">
//             <Link to="/learn-more" className="nav-item animate-slide-in" style={{ animationDelay: "0.1s" }}>Learning</Link>
//             <Link to="/community" className="nav-item animate-slide-in" style={{ animationDelay: "0.2s" }}>Community</Link>
//             <Link to="/company" className="nav-item animate-slide-in" style={{ animationDelay: "0.3s" }}>Company</Link>
//             <Link to="/contact" className="nav-item animate-slide-in" style={{ animationDelay: "0.4s" }}>Contact</Link>
//           </nav>
//         </div>
        
//         <div className="flex items-center gap-3">
//           {isLoggedIn ? (
//             <Button 
//               variant="outline" 
//               size="sm" 
//               onClick={() => navigate('/login')}
//               className="border-white/20 hover:bg-white/10 animate-fade-in"
//             >
//               Logout
//             </Button>
//           ) : (
//             <>
//               <Button 
//                 variant="ghost" 
//                 size="sm" 
//                 onClick={() => navigate('/login')}
//                 className="text-white hover:bg-white/10 animate-fade-in"
//                 style={{ animationDelay: "0.1s" }}
//               >
//                 Log in
//               </Button>
//               <Button 
//                 variant="default" 
//                 size="sm" 
//                 onClick={() => navigate('/login')}
//                 className="bg-white text-black hover:bg-white/90 animate-fade-in"
//                 style={{ animationDelay: "0.2s" }}
//               >
//                 Sign up
//               </Button>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default ModernNavbar;








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
    <header className={`modern-nav fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? "bg-black/80" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold gradient-heading">CourseCompass</h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 ml-8">
          <Link to="/learn-more" className="nav-item">Learning</Link>
          <Link to="/community" className="nav-item">Community</Link>
          <Link to="/company" className="nav-item">Company</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <Button variant="outline" size="sm" onClick={() => navigate("/login")} className="border-white/20 hover:bg-white/10">
              Logout
            </Button>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")} className="text-white hover:bg-white/10">
                Log in
              </Button>
              <Button variant="default" size="sm" onClick={() => navigate("/login")} className="bg-white text-black hover:bg-white/90">
                Sign up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-black/90 backdrop-blur-sm">
          <Link to="/learn-more" onClick={closeMobileMenu} className="block text-white">Learning</Link>
          <Link to="/community" onClick={closeMobileMenu} className="block text-white">Community</Link>
          <Link to="/company" onClick={closeMobileMenu} className="block text-white">Company</Link>
          <Link to="/contact" onClick={closeMobileMenu} className="block text-white">Contact</Link>

          <div className="pt-2 flex flex-col gap-2">
            {isLoggedIn ? (
              <Button variant="outline" size="sm" onClick={() => { navigate("/login"); closeMobileMenu(); }}>
                Logout
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => { navigate("/login"); closeMobileMenu(); }} className="text-white">
                  Log in
                </Button>
                <Button variant="default" size="sm" onClick={() => { navigate("/login"); closeMobileMenu(); }} className="bg-white text-black">
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default ModernNavbar;
