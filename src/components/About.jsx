import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-gray-800" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-gray-300 text-lg mb-6">
            I'm a passionate web developer with a keen eye for creating beautiful and functional websites. 
            My journey in web development started with curiosity and has evolved into a professional pursuit 
            of crafting exceptional digital experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Git'].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 p-4 rounded-lg"
              >
                <p className="text-white font-semibold">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}