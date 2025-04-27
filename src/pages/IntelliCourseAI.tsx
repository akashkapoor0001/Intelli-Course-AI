// // src/pages/IntelliCourseAI+.tsx
// import { useEffect, useState } from "react";
// import Header from "@/components/Header";
// import { Loader2 } from "lucide-react"; // Optional spinner
// import aiGif from "@/assets/AILoading.gif"; // Place your AI animation/gif here

// const IntelliCourseAI = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // 3-second loading

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-black text-white flex-col">
//         <img src={aiGif} alt="AI Animation" className="w-40 h-40 mb-6 animate-pulse" />
//         <h2 className="text-xl font-bold">Activating AI+ Premium Features...</h2>
//         <Loader2 className="animate-spin mt-4 text-blue-500" size={32} />
//       </div>
//     );
//   }

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen mt-14 bg-black text-white p-8">
//   <h1 className="text-3xl font-bold mb-6">
//     Welcome to IntelliCourse AI+
//   </h1>
//   <p className="text-lg text-gray-300">
//     This premium feature is currently <span className="text-blue-500 font-semibold">under development</span>. 🚧
//     <br />
//     Stay tuned for personalized course recommendations, intelligent insights, and more powered by AI!
//   </p>
// </div>
//       <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 text-center">
//         <p className="text-sm">© 2025 IntelliCourse. All rights reserved.</p>
//       </div>
//     </>
//   );
// };

// export default IntelliCourseAI;

"use client";

import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import { Loader2 } from "lucide-react";
import aiGif from "@/assets/AILoading.gif";
import AI from "@/assets/AI.png"; // Placeholder for AI image
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "🎯 Personalized Learning Roadmaps",
    description:
      "Get a customized 3-6 month plan to reach your dream career faster with AI.",
  },
  {
    title: "📊 Skill Gap Analyzer",
    description:
      "Understand your skills vs industry demands and plan your next moves smartly.",
  },
  {
    title: "🧑‍🏫 AI Career Coach",
    description:
      "Chat with AI to discover the best job opportunities based on your skills.",
  },
  {
    title: "📄 Smart Resume Builder",
    description:
      "Instantly generate a professional resume and LinkedIn summary.",
  },
  {
    title: "🌍 Dynamic Industry Insights",
    description:
      "Stay updated with trending skills, salaries, and companies hiring!",
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
      <div className="flex items-center justify-center h-screen bg-black text-white flex-col">
        <img
          src={aiGif}
          alt="AI Animation"
          className="w-40 h-40 mb-6 animate-pulse"
        />
        <h2 className="text-xl font-bold">
          Activating AI+ Premium Features...
        </h2>
        <Loader2 className="animate-spin mt-4 text-blue-500" size={32} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div
        className="min-h-screen pt-20 px-6 md:px-20 text-white relative"
        style={{
          background: "linear-gradient(135deg, #000000, #0f0f0f, #1a1a1a)",
        }}
      >
        <section className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 pt-20 mb-32">
          {/* Left side (AI Image) */}
          <div className="md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
            <img
              src={AI}
              alt="AI"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl opacity-80 shadow-2xl"
            />
          </div>

          {/* Right side (Text) */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-t from-orange-600 to-blue-500 bg-clip-text text-transparent mb-6">
              Welcome to IntelliCourse AI+
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 max-w-lg">
              Powering your learning journey with AI-driven personalized
              roadmaps, skill analysis, career coaching, and more.
            </p>
          </div>
        </section>

        <section className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                {/* Placeholder for future graphics or animations */}
                <div className="w-60 h-60 bg-gradient-to-r from-orange-600 to-blue-500 rounded-2xl shadow-lg"></div>
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-32 text-center text-gray-500 text-sm">
          © 2025 IntelliCourse. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default IntelliCourseAI;
