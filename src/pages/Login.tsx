
import { useEffect } from 'react';
import AuthForm from '@/components/AuthForm';
import { BookOpen } from "lucide-react";

const Login = () => {
  useEffect(() => {
    document.title = "Login | CourseCompass";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center mb-8 animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold gradient-heading">CourseCompass</h1>
        </div>
        <p className="text-lg text-center text-muted-foreground">
          AI-powered course recommendations tailored for you
        </p>
      </div>
      
      <AuthForm />
      
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};

export default Login;
