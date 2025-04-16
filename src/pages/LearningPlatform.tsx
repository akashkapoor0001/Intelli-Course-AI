import React from 'react';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const LearningPlatform = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#0e0e0e] text-white px-6 py-12 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl font-bold mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            Learning Platform Walkthrough
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg mb-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            Explore the intuitive interface, interactive modules, and smart progress tracking
            designed to make your learning journey seamless.
          </motion.p>

          <div className="space-y-6 text-left">
            {[
              {
                title: '🎯 Dashboard Overview',
                description: 'Track your course progress, upcoming deadlines, and achievements at a glance.',
              },
              {
                title: '📚 Interactive Learning Modules',
                description: 'Hands-on coding environments, quizzes, and guided video tutorials to keep you engaged.',
              },
              {
                title: '📈 Smart Progress Tracking',
                description: 'AI-powered recommendations based on your learning behavior and course interactions.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-[#1a1a1a] rounded-xl shadow-xl border border-gray-700"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              >
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LearningPlatform;
