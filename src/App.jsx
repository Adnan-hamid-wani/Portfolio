import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <AnimatePresence>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <About />
          <Projects />
          <Contact />
        </motion.main>
      </div>
    </AnimatePresence>
  );
}

export default App;