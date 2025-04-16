import React from 'react';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

const AlumniEmployment = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#0e0e0e] text-white px-6 pt-40 pb-12">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">
              Alumni 21 Program – Employment Assistance
            </h1>
            <p className="text-gray-300 text-lg">
              Reach out to us for personalized support, career coaching, and job placement help.
              Fill out the form below and our team will get in touch with you shortly.
            </p>
          </div>

          {/* Contact / Enquiry Form */}
          <motion.form
            className="bg-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-700 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-md bg-[#0e0e0e] border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-[#0e0e0e] border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Message / Enquiry
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-md bg-[#0e0e0e] border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Submit Enquiry
            </button>
          </motion.form>
        </motion.div>
      </section>
    </>
  );
};

export default AlumniEmployment;
