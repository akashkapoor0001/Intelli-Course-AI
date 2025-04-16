// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowRight, GraduationCap, Zap, Users, BookOpen, Folder } from "lucide-react";
// import { useUserCount } from '@/contexts/UserCountContext';
// import NeuralNetworkAnimation from '@/components/NeuralNetworkAnimation';
// import ModernNavbar from '@/components/ModernNavbar';

// const Index = () => {
//   const navigate = useNavigate();
//   const { userCount } = useUserCount();
  
//   useEffect(() => {
//     document.title = "CourseCompass | AI-Powered Course Recommendations";
//   }, []);

//   return (
//     <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
//       <NeuralNetworkAnimation />
//       <ModernNavbar />
      
//       <main className="mt-24 pt-12 flex-1">
//         {/* Hero Section */}
//         <section className="px-6 pb-20">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
//               <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
//                 DIVE INTO<br />
//                 THE DIGITAL<br />
//                 <span className="text-gradient">WORLD</span>
//               </h1>
              
//               <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
//                 <button 
//                   onClick={() => navigate('/dashboard')}
//                   type="button"
//                   className="btn-rounded w-full sm:w-auto text-left flex items-center justify-between"
//                 >
//                   Explore Courses
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </button>

//                 <button 
//                   onClick={() => navigate('/learn-more')} 
//                   className="btn-rounded mt-4 sm:mt-0"
//                 >
//                   <BookOpen className="h-5 w-5 mr-2" />
//                   Learn More about us
//                 </button>
//               </div>
//             </div>
            
//             <div className="relative animate-fade-in glass-card overflow-hidden" style={{ animationDelay: "0.4s" }}>
//               <img 
//                 src="/lovable-uploads/2f36433c-568b-4f51-bf02-8c7a447545d9.png" 
//                 alt="Student learning"
//                 className="w-full h-auto object-cover rounded-3xl"
//               />
//             </div>
//           </div>
//         </section>
        
//         {/* Feature Pills */}
//         <section className="px-6 py-12">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
//               <button className="feature-pill">DESIGN</button>
//               <button className="feature-pill">WEB DEVELOPMENT</button>
//               <button className="feature-pill">UI/UX</button>
//             </div>
//           </div>
//         </section>
        
//         {/* Feature Cards */}
//         <section className="px-6 py-12">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div 
//               className="folder-card card-purple animate-fade-in cursor-pointer" 
//               style={{ animationDelay: "0.8s" }}
//               onClick={() => navigate('/learn-more')}
//             >
//               <div className="mb-8">
//                 <span className="text-xs uppercase tracking-wider opacity-70">ALUMNI 21 PROGRAM</span>
//               </div>
//               <h3 className="text-2xl font-bold mb-4">EMPLOYMENT ASSISTANCE</h3>
//               <Folder className="text-white/30 h-12 w-12 absolute bottom-4 right-4" />
//             </div>
            
//             <div 
//               className="folder-card card-gray animate-fade-in cursor-pointer" 
//               style={{ animationDelay: "1s" }}
//               onClick={() => navigate('/learn-more')}
//             >
//               <div className="mb-8 flex justify-between">
//                 <span className="text-xs uppercase tracking-wider opacity-70">LEARNING PLATFORM WALKTHROUGH</span>
//                 <ArrowRight className="h-5 w-5" />
//               </div>
//               <div className="w-20 h-20">
//                 <GraduationCap className="w-full h-full" />
//               </div>
//               <Folder className="text-white/30 h-12 w-12 absolute bottom-4 right-4" />
//             </div>
            
//             <div className="folder-card card-yellow animate-fade-in" style={{ animationDelay: "1.2s" }}>
//               <div className="mb-8 flex justify-between">
//                 <span className="text-xs uppercase tracking-wider opacity-70">USERS ENROLLED</span>
//                 <Users className="h-5 w-5" />
//               </div>
//               <span className="text-6xl font-bold">{userCount}</span>
//               <Folder className="text-black/30 h-12 w-12 absolute bottom-4 right-4" />
//             </div>
//           </div>
//         </section>
        
//         {/* How It Works Section */}
//         <section className="py-24 px-6 bg-black/20">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-5xl font-bold gradient-heading mb-6">
//                 How It Works
//               </h2>
//               <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//                 Your journey to mastering digital skills starts here
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
//               <div className="flex flex-col items-center text-center space-y-4">
//                 <div className="step-number">1</div>
//                 <div className="h-12 w-12 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
//                   <BookOpen className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white">Discover your interests</h3>
//                 <p className="text-white/70">Share your goals and we'll match you with the perfect courses</p>
//               </div>
              
//               <div className="hidden md:block absolute left-1/4 top-6 w-full">
//                 <div className="step-line" />
//               </div>
              
//               <div className="flex flex-col items-center text-center space-y-4">
//                 <div className="step-number">2</div>
//                 <div className="h-12 w-12 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
//                   <GraduationCap className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white">AI-Powered recommendations</h3>
//                 <p className="text-white/70">Our AI analyzes thousands of courses to find your perfect match</p>
//               </div>
              
//               <div className="hidden md:block absolute left-2/4 top-6 w-full">
//                 <div className="step-line" />
//               </div>
              
//               <div className="flex flex-col items-center text-center space-y-4">
//                 <div className="step-number">3</div>
//                 <div className="h-12 w-12 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
//                   <Zap className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white">Learn at your own pace</h3>
//                 <p className="text-white/70">Access high-quality courses with personalized learning paths</p>
//               </div>
              
//               <div className="hidden md:block absolute left-3/4 top-6 w-full">
//                 <div className="step-line" />
//               </div>
              
//               <div className="flex flex-col items-center text-center space-y-4">
//                 <div className="step-number">4</div>
//                 <div className="h-12 w-12 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
//                   <Users className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white">Join our community</h3>
//                 <p className="text-white/70">Connect with peers and mentors to enhance your learning experience</p>
//               </div>
//             </div>
            
//             <div className="mt-16 text-center">
//               <blockquote className="text-2xl italic text-white/90 max-w-3xl mx-auto mb-6">
//                 "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
//               </blockquote>
//               <p className="text-muted-foreground">— Malcolm X</p>
//             </div>
//           </div>
//         </section>
//       </main>
      
//       <footer className="py-12 px-6 border-t border-white/10">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="flex items-center gap-2 mb-6 md:mb-0">
//             <BookOpen className="h-5 w-5 text-primary" />
//             <span className="font-medium gradient-heading">CourseCompass</span>
//           </div>
          
//           <div className="flex gap-8">
//             <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a>
//             <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</a>
//             <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact Us</a>
//           </div>
          
//           <p className="text-sm text-muted-foreground mt-6 md:mt-0">
//             © {new Date().getFullYear()} CourseCompass. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Index;






import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, GraduationCap, Zap, Users, BookOpen, Folder } from "lucide-react";
import { useUserCount } from '@/contexts/UserCountContext';
import NeuralNetworkAnimation from '@/components/NeuralNetworkAnimation';
import ModernNavbar from '@/components/ModernNavbar';

const Index = () => {
  const navigate = useNavigate();
  const { userCount } = useUserCount();

  useEffect(() => {
    document.title = "CourseCompass | AI-Powered Course Recommendations";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      <NeuralNetworkAnimation />
      <ModernNavbar />

      <main className="mt-24 pt-12 flex-1">
        {/* Hero Section */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                DIVE INTO<br />
                THE DIGITAL<br />
                <span className="text-gradient">WORLD</span>
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <button
                  onClick={() => navigate('/dashboard')}
                  type="button"
                  className="btn-rounded w-full sm:w-auto text-left flex items-center justify-between"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>

                <button
                  onClick={() => navigate('/learn-more')}
                  className="btn-rounded mt-4 sm:mt-0 flex items-center justify-center"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Learn More about us
                </button>
              </div>
            </div>

            <div className="relative glass-card overflow-hidden">
              <img
                src="/lovable-uploads/2f36433c-568b-4f51-bf02-8c7a447545d9.png"
                alt="Student learning"
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </section>

        {/* Feature Pills */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="feature-pill">DESIGN</button>
              <button className="feature-pill">WEB DEVELOPMENT</button>
              <button className="feature-pill">UI/UX</button>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="folder-card card-purple cursor-pointer"
              onClick={() => navigate('/learn-more')}
            >
              <div className="mb-8">
                <span className="text-xs uppercase tracking-wider opacity-70">ALUMNI 21 PROGRAM</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">EMPLOYMENT ASSISTANCE</h3>
              <Folder className="text-white/30 h-12 w-12 absolute bottom-4 right-4" />
            </div>

            <div
              className="folder-card card-gray cursor-pointer"
              onClick={() => navigate('/learn-more')}
            >
              <div className="mb-8 flex justify-between">
                <span className="text-xs uppercase tracking-wider opacity-70">LEARNING PLATFORM WALKTHROUGH</span>
                <ArrowRight className="h-5 w-5" />
              </div>
              <div className="w-20 h-20">
                <GraduationCap className="w-full h-full" />
              </div>
              <Folder className="text-white/30 h-12 w-12 absolute bottom-4 right-4" />
            </div>

            <div className="folder-card card-yellow">
              <div className="mb-8 flex justify-between">
                <span className="text-xs uppercase tracking-wider opacity-70">USERS ENROLLED</span>
                <Users className="h-5 w-5" />
              </div>
              <span className="text-6xl font-bold">{userCount}</span>
              <Folder className="text-black/30 h-12 w-12 absolute bottom-4 right-4" />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold gradient-heading mb-6">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your journey to mastering digital skills starts here
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[{
                step: 1, icon: BookOpen, title: 'Discover your interests',
                desc: "Share your goals and we'll match you with the perfect courses"
              }, {
                step: 2, icon: GraduationCap, title: 'AI-Powered recommendations',
                desc: "Our AI analyzes thousands of courses to find your perfect match"
              }, {
                step: 3, icon: Zap, title: 'Learn at your own pace',
                desc: "Access high-quality courses with personalized learning paths"
              }, {
                step: 4, icon: Users, title: 'Join our community',
                desc: "Connect with peers and mentors to enhance your learning experience"
              }].map(({ step, icon: Icon, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center space-y-4">
                  <div className="step-number">{step}</div>
                  <div className="h-12 w-12 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="text-white/70">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <blockquote className="text-2xl italic text-white/90 max-w-3xl mx-auto mb-6">
                "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
              </blockquote>
              <p className="text-muted-foreground">— Malcolm X</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-medium gradient-heading">CourseCompass</span>
          </div>

          <div className="flex gap-8 flex-wrap justify-center">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact Us</a>
          </div>

          <p className="text-sm text-muted-foreground mt-6 md:mt-0">
            © {new Date().getFullYear()} CourseCompass. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
