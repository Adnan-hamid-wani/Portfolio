import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SkillsGrid({ skills }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
    >
      {skills.map((skill, index) => (
        <SkillCard key={skill} skill={skill} index={index} />
      ))}
    </motion.div>
  );
}