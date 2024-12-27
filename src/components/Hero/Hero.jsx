import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ProfilePicture from './ProfilePicture';
import AnimatedText from './AnimatedText';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 relative">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <ProfilePicture />
          <AnimatedText delay={0.5}>
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
          </AnimatedText>
          <AnimatedText delay={0.7}>
            <p className="text-xl text-gray-300 mb-8">
              Turning ideas into interactive realities through code
            </p>
          </AnimatedText>
        </motion.div>
      </div>

      {/* Adnan Wani Name - Responsive */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-10 right-6 md:right-16 lg:right-20 text-right"
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold text-white tracking-wide hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"

          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Adnan Wani
        </h2>
        
      </motion.div>
    </section>
  );
}
