import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import aboutme from '../aboutme.jpg';

export default function ProfilePicture() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const yPos = useTransform(scrollY, [0, 300], [0, 100]);
  
  return (
    <motion.div
      style={{ y: yPos, scale }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-xl"
      >
        <img
          src={aboutme}
          alt="Profile"
          className="w-full  h-full object-cover "
        />
      </motion.div>
      <motion.div
        className="absolute -z-10 w-full h-full rounded-full bg-blue-500/30 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
}