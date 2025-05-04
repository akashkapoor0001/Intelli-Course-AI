"use client";
import { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import BrainNeuron from "@/components/BrainNeuron";
import { Loader2 } from "lucide-react";
import aiGif from "@/assets/AILoading.gif";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RoadMap from "@/assets/RoadMap.png";
import resumeBuilderImg from "@/assets/ResumeBuilder.jpeg";
import { link } from "fs";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Personalized Learning Roadmaps",
    description:
      "Get a customized 3-6 month plan to reach your dream career faster with AI.",
    image: RoadMap,
    link: "/roadmap",
  },
  {
    title: "Smart Resume Builder",
    description:
      "Instantly generate a professional resume and LinkedIn summary.",
    image: resumeBuilderImg,
    link: "/resume-builder",
  },
];

const IntelliCourseAI = () => {
  const [loading, setLoading] = useState(true);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ✅ Move these refs inside the component
  const brainRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const triggers: ScrollTrigger[] = [];

      // ✅ Animate the feature blocks
      featureRefs.current.forEach((el, index) => {
        if (el) {
          const animation = gsap.fromTo(
            el,
            { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
            {
              opacity: 1,
              x: 0,
              duration: 1.2,
              ease: "power3.out",
              overwrite: "auto",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
                markers: false,
              },
            }
          );
          triggers.push(animation.scrollTrigger!);
        }
      });

      // ✅ Animate BrainNeuron and text
      if (brainRef.current && textRef.current) {
        gsap.fromTo(
          brainRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: brainRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
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
          <div
            className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0"
            ref={brainRef}
          >
            <BrainNeuron />
          </div>

          {/* Right side (Text) */}
          <div
            className="w-full md:w-1/2 text-center md:text-left"
            ref={textRef}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-t from-[#B22222] to-[#FF6347] bg-clip-text text-transparent mb-6 leading-tight">
              Welcome to IntelliCourse AI+
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-xl mx-auto md:mx-0">
              Powering your learning journey with AI-driven personalized
              roadmaps, skill analysis, career coaching, and more.
            </p>
          </div>
        </section>

        {/* Feature Cards */}
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-5">
                  {feature.title}
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xs sm:max-w-sm md:max-w-sm break-words mx-auto md:mx-0 mb-4">
                  {feature.description}
                </p>

                {/* Button with white border and red hover */}
                <Link to={feature.link} className="border-2 border-white hover:bg-red-600 hover:border-red-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300">
                  Access Feature
                </Link>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-60 h-60 mt-9 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl object-cover"
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
