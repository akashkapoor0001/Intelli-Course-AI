
import { useEffect } from 'react';
import Header from '@/components/Header';
import { Users, MessageSquare, Globe, Trophy } from 'lucide-react';
import NeuralNetworkAnimation from '@/components/NeuralNetworkAnimation';

const Community = () => {
  useEffect(() => {
    document.title = "Community | IntelliCourse";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <NeuralNetworkAnimation />
      <Header />
      
      <main className="pt-28 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">Our Learning Community</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with fellow learners, share insights, and accelerate your learning journey together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Users className="h-12 w-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">10K+ Members</h3>
              <p className="text-muted-foreground">Join a thriving community of passionate learners from around the world</p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <MessageSquare className="h-12 w-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Active Forums</h3>
              <p className="text-muted-foreground">Engage in discussions, ask questions, and share your knowledge</p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Globe className="h-12 w-12 mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-muted-foreground">Connect with learners and professionals from diverse backgrounds</p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Trophy className="h-12 w-12 mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">Challenges & Events</h3>
              <p className="text-muted-foreground">Participate in coding challenges, hackathons, and virtual meetups</p>
            </div>
          </div>
          
          <div className="glass-card p-10 mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 gradient-heading">Featured Community Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="text-lg mb-4">"The IntelliCourse community helped me transition from a non-tech background to becoming a full-stack developer in just 8 months."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 mr-3"></div>
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Web Developer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="text-lg mb-4">"I found my study group through the community forums, and we've been supporting each other through our data science journey."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500 mr-3"></div>
                  <div>
                    <h4 className="font-medium">David Lee</h4>
                    <p className="text-sm text-muted-foreground">Data Scientist</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="text-lg mb-4">"The mentorship program connected me with industry experts who provided invaluable guidance for my UX design portfolio."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500 mr-3"></div>
                  <div>
                    <h4 className="font-medium">Maya Patel</h4>
                    <p className="text-sm text-muted-foreground">UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 gradient-heading">Ready to Join Our Community?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Create an account to access forums, study groups, events, and more resources to enhance your learning journey.
            </p>
            <button className="btn-primary" onClick={() => location.href = '/login'}>
              Join the Community
            </button>
          </div>
        </div>
      </main>
      
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};

export default Community;
