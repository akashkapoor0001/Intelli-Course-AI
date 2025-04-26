
import { useEffect } from 'react';
import Header from '@/components/Header';
import { Building2, Award, Target, Clock, Users } from 'lucide-react';
import NeuralNetworkAnimation from '@/components/NeuralNetworkAnimation';

const Company = () => {
  useEffect(() => {
    document.title = "Company | IntelliCourse";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <NeuralNetworkAnimation />
      <Header />
      
      <main className="pt-28 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">About IntelliCourse</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to revolutionize education with AI-powered course recommendations
              that help students discover their perfect learning path.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="glass-card p-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl font-bold mb-6 gradient-heading">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                IntelliCourse was founded in 2025 by a team of education enthusiasts and AI specialists 
                who recognized a fundamental problem in online education: the overwhelming number of 
                courses available makes it difficult for learners to find the right resources for their 
                specific needs.
              </p>
              <p className="text-lg text-muted-foreground">
                Our AI-powered platform analyzes thousands of courses across multiple platforms to 
                provide personalized recommendations based on your goals, interests, and learning style. 
                We're committed to making education more accessible and effective for everyone.
              </p>
            </div>
            
            <div className="glass-card overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                src="/lovable-uploads/2f36433c-568b-4f51-bf02-8c7a447545d9.png" 
                alt="IntelliCourse Team" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="mb-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-3xl font-bold mb-10 text-center gradient-heading">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalization</h3>
                <p className="text-muted-foreground">We believe that learning should be tailored to individual needs and goals</p>
              </div>
              
              <div className="glass-card p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-muted-foreground">We focus on recommending only high-quality courses with proven results</p>
              </div>
              
              <div className="glass-card p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">We foster connections between learners to enhance the educational experience</p>
              </div>
              
              <div className="glass-card p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Efficiency</h3>
                <p className="text-muted-foreground">We help learners save time by finding the right courses quickly</p>
              </div>
            </div>
          </div>
          
          <div className="mb-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl font-bold mb-10 text-center gradient-heading">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6">
                <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-muted-foreground mb-4">Co-Founder & CEO</p>
                <p className="text-muted-foreground">Former education technology executive with a passion for accessible learning</p>
              </div>
              
              <div className="glass-card p-6">
                <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-muted-foreground mb-4">Co-Founder & CTO</p>
                <p className="text-muted-foreground">AI specialist with background in recommendation systems and machine learning</p>
              </div>
              
              <div className="glass-card p-6">
                <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-red-500/20 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-1">Elena Rodriguez</h3>
                <p className="text-muted-foreground mb-4">Chief Product Officer</p>
                <p className="text-muted-foreground">Product strategist focused on creating intuitive educational experiences</p>
              </div>
            </div>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-3xl font-bold mb-6 gradient-heading">Join Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're always looking for passionate individuals to join our team and help shape the future of education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary" onClick={() => location.href = '/contact'}>
                Contact Us
              </button>
              <button className="btn-secondary" onClick={() => location.href = '/learn-more'}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};

export default Company;
