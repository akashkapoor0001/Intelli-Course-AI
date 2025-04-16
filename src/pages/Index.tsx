import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, FileText, Wand2, Settings, Github } from "lucide-react";
import NeuralNetworkAnimation from '@/components/NeuralNetworkAnimation';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "CourseCompass | AI-Powered Course Recommendations";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-heading leading-tight">
            Find Your Perfect Academic Path
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Get personalized course recommendations powered by AI based on your interests and goals.
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
      
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold gradient-heading mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build high quality software without writing code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="step-number">1</div>
              <div className="h-12 w-12 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Describe what you want to build</h3>
            </div>
            
            <div className="hidden md:block absolute left-1/4 top-6 w-full">
              <div className="step-line" />
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="step-number">2</div>
              <div className="h-12 w-12 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                <Wand2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Lovable creates your first version</h3>
            </div>
            
            <div className="hidden md:block absolute left-2/4 top-6 w-full">
              <div className="step-line" />
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="step-number">3</div>
              <div className="h-12 w-12 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Improve it by asking for changes</h3>
            </div>
            
            <div className="hidden md:block absolute left-3/4 top-6 w-full">
              <div className="step-line" />
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="step-number">4</div>
              <div className="h-12 w-12 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                <Github className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Publish your project or sync your code via GitHub</h3>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-8 px-4 border-t border-white/10">
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
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
    </div>
  );
};

export default Index;
