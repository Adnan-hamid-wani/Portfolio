import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="text-blue-500">
              <TypeAnimation
                sequence={[
                  'a Developer',
                  2000,
                  'a Creator',
                  2000,
                  'an Innovator',
                  2000
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Turning ideas into interactive realities through code
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}