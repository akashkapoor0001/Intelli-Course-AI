// src/pages/CourseCompassAI+.tsx
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Loader2 } from "lucide-react"; // Optional spinner
import aiGif from "@/assets/AILoading.gif"; // Place your AI animation/gif here

const CourseCompassAI = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3-second loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white flex-col">
        <img src={aiGif} alt="AI Animation" className="w-40 h-40 mb-6 animate-pulse" />
        <h2 className="text-xl font-bold">Activating AI+ Premium Features...</h2>
        <Loader2 className="animate-spin mt-4 text-blue-500" size={32} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen mt-14 bg-black text-white p-8">
        <h1 className="text-3xl font-bold mb-6">
          Welcome to Course Compass AI+
        </h1>
        <p className="text-lg text-gray-300">
          This is your premium AI-powered experience. 🚀 Start exploring
          personalized recommendations, intelligent insights, and more!
        </p>

        {/* Your premium content goes here */}
      </div>
    </>
  );
};

export default CourseCompassAI;
