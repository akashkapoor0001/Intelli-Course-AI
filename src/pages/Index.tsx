
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, Sparkles, GraduationCap, BarChart } from "lucide-react";
import NeuralNetworkAnimation from '@/components/NeuralNetworkAnimation';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "CourseCompass | AI-Powered Course Recommendations";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col">
      <NeuralNetworkAnimation />
      
      <header className="w-full py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold gradient-heading">CourseCompass</h1>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/login')}
          >
            Log In
          </Button>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl flex flex-col items-center text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-heading leading-tight">
            Find Your Perfect Academic Path
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Get personalized course recommendations powered by AI based on your interests, academic history, and goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg" 
              onClick={() => navigate('/login')}
              className="group"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/learn-more')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </main>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-heading">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border shadow-sm flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Profile</h3>
              <p className="text-muted-foreground">
                Enter your academic interests, degree program, and current GPA.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border shadow-sm flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our AI engine analyzes your profile to find the best course matches.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border shadow-sm flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
              <p className="text-muted-foreground">
                Receive tailored course suggestions that align with your goals and background.
              </p>
            </div>
          </div>
        </div>
      </section>
      
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
      
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};

export default Index;
