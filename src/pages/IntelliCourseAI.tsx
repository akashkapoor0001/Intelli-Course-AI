"use client";

import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import BrainNeuron from "@/components/BrainNeuron";
import { Loader2 } from "lucide-react";
import aiGif from "@/assets/AILoading.gif";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Roadmap from "@/assets/Roadmap.png"; // Example image import
import skillGapImg from "@/assets/skillGap.jpg"; // Example image import
import aiCareerCoachImg from "@/assets/aiCareerCoach.jpg"; // Example image import
import resumeBuilderImg from "@/assets/resumeBuilder.jpg"; // Example image import
import industryInsightsImg from "@/assets/industryInsights.jpg"; // Example image import

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "🎯 Personalized Learning Roadmaps",
    description:
      "Get a customized 3-6 month plan to reach your dream career faster with AI.",
    image: Roadmap, // Path to image
  },
  {
    title: "📊 Skill Gap Analyzer",
    description:
      "Understand your skills vs industry demands and plan your next moves smartly.",
    // image: skillGapImg, // Path to image
  },
  {
    title: "🧑‍🏫 AI Career Coach",
    description:
      "Chat with AI to discover the best job opportunities based on your skills.",
    // image: aiCareerCoachImg, // Path to image
  },
  {
    title: "📄 Smart Resume Builder",
    description:
      "Instantly generate a professional resume and LinkedIn summary.",
    // image: resumeBuilderImg, // Path to image
  },
  {
    title: "🌍 Dynamic Industry Insights",
    description:
      "Stay updated with trending skills, salaries, and companies hiring!",
    // image: industryInsightsImg, // Path to image
  },
];

const IntelliCourseAI = () => {
  const [loading, setLoading] = useState(true);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      featureRefs.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white flex-col overflow-hidden">
        <img
          src={aiGif}
          alt="AI Animation"
          className="w-32 h-32 mb-6 animate-pulse"
        />
        <h2 className="text-lg font-bold text-center">
          Activating AI+ Premium Features...
        </h2>
        <Loader2 className="animate-spin mt-4 text-blue-500" size={32} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 px-4 sm:px-6 md:px-20 text-white relative overflow-x-hidden bg-black">
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-24 pt-10 md:pt-20 mb-20">
          {/* Left side (AI Image) */}
          <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
            <BrainNeuron />
          </div>

          {/* Right side (Text) */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-t from-[#B22222] to-[#FF6347] bg-clip-text text-transparent mb-6 leading-tight">
              Welcome to IntelliCourse AI+
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-xl mx-auto md:mx-0">
              Powering your learning journey with AI-driven personalized
              roadmaps, skill analysis, career coaching, and more.
            </p>
          </div>
        </section>

        <section className="space-y-28 md:space-y-32 mt-20 md:mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-300 text-base sm:text-lg">
                  {feature.description}
                </p>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                {/* Replace the placeholder div with the image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-52 h-52 mt-7 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-20 md:mt-32 text-center text-gray-500 text-xs sm:text-sm">
          © 2025 IntelliCourse. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default IntelliCourseAI;
