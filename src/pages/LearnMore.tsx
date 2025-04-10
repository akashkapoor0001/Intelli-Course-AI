
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  BarChart, 
  Trophy, 
  Users, 
  Clock, 
  Star
} from "lucide-react";

const LearnMore = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Learn More | CourseCompass";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center pt-24 px-4 pb-12">
        <div className="w-full max-w-4xl space-y-12">
          {/* Hero section */}
          <section className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading">
              How CourseCompass Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our AI-powered platform finds the perfect courses tailored specifically to your academic journey.
            </p>
          </section>
          
          {/* Process section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold gradient-heading text-center">Our Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border shadow-sm flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Share Your Profile</h3>
                <p className="text-muted-foreground">
                  Enter your academic interests, degree program, and current GPA to help our system understand your background.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border shadow-sm flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our advanced AI engine analyzes your profile and compares it with thousands of courses to find the perfect matches.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border shadow-sm flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Get Recommendations</h3>
                <p className="text-muted-foreground">
                  Receive a curated list of courses that align with your goals, interests, and academic background.
                </p>
              </div>
            </div>
          </section>
          
          {/* Features section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold gradient-heading text-center">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border shadow-sm flex items-start space-x-4 animate-fade-in">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
                  <p className="text-muted-foreground">
                    Get course suggestions that match your unique academic profile and learning goals.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border shadow-sm flex items-start space-x-4 animate-fade-in">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Filtered Content</h3>
                  <p className="text-muted-foreground">
                    We only recommend high-quality courses with positive reviews and proven outcomes.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border shadow-sm flex items-start space-x-4 animate-fade-in">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Time-Efficient Learning</h3>
                  <p className="text-muted-foreground">
                    Save time searching through endless course catalogs with our streamlined recommendation engine.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border shadow-sm flex items-start space-x-4 animate-fade-in">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Insights</h3>
                  <p className="text-muted-foreground">
                    Benefit from the collective wisdom of students who have already taken similar courses.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA section */}
          <section className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border shadow-sm text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold gradient-heading">Ready to Find Your Perfect Courses?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students who have discovered their ideal learning path with CourseCompass.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/')}
                className="group"
              >
                Get Started Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/login')}
              >
                Log In
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="py-8 px-4 border-t bg-white/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-medium gradient-heading">CourseCompass</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CourseCompass. All rights reserved.
          </p>
        </div>
      </footer>
      
      <div className="absolute top-40 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};

export default LearnMore;
