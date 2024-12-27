import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: 2,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-blue-500/20"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className="flex items-center justify-center"
      >
        <p className="text-white font-semibold heading-font text-lg">{skill}</p>
      </motion.div>
    </motion.div>
  );
}