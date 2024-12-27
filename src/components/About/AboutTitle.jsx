import React from 'react';
import { motion } from 'framer-motion';

export default function AboutTitle() {
  return (
    <motion.h2 
      className="text-4xl font-bold text-white mb-12 text-center heading-font"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
    >
      About Me
    </motion.h2>
  );
}