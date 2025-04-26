
import { useEffect } from 'react';
import { useUserCount } from '@/contexts/UserCountContext';
import AuthForm from '@/components/AuthForm';
import ModernNavbar from '@/components/ModernNavbar';
import NeuralNetworkAnimation from '@/components/NeuralNetworkAnimation';

const Login = () => {
  const { incrementUserCount } = useUserCount();
  
  useEffect(() => {
    document.title = "Login | IntelliCourse";
  }, []);

  // Increment user count when someone completes login
  const handleLogin = () => {
    incrementUserCount();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative">
      <NeuralNetworkAnimation />
      <ModernNavbar />
      
      <div className="w-full max-w-md flex flex-col items-center mb-8 animate-fade-in mt-24">
        <h2 className="text-3xl font-bold gradient-heading mb-2">Welcome Back</h2>
        <p className="text-lg text-center text-muted-foreground">
          Sign in to access your personalized learning journey
        </p>
      </div>
      
      <div className="w-full max-w-md bg-black/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
        <AuthForm />
      </div>
      
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};

export default Login;
