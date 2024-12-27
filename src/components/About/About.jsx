import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AboutTitle from './AboutTitle';
import AboutContent from './AboutContent';
import SkillsGrid from './SkillsGrid';

export default function About() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  const skills = ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Git'];

  return (
    <section className="py-20 bg-gray-800" id="about">
      <motion.div 
        style={{ scale, opacity }}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          <AboutTitle />
          <AboutContent />
          <SkillsGrid skills={skills} />
        </div>
      </motion.div>
    </section>
  );
}