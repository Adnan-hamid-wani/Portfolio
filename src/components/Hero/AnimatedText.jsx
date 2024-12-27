import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedText({ children, delay = 0 }) {
  const { scrollY } = useScroll();
  const fontSize = useTransform(scrollY, [0, 300], [1, 1.3]);
  
  return (
    <motion.div
      style={{ scale: fontSize }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
      className="heading-font"
    >
      {children}
    </motion.div>
  );
}