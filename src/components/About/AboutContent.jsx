import React from 'react';
import { motion } from 'framer-motion';

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700/50"
    >
      <p className="text-gray-300 text-lg leading-relaxed">
        I'm a passionate web developer with a keen eye for creating beautiful and functional websites. 
        My journey in web development started with curiosity and has evolved into a professional pursuit 
        of crafting exceptional digital experiences.
      </p>
    </motion.div>
  );
}