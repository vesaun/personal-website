'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import BackgroundMountains from './BackgroundMountains';
import { SketchCompass, SketchTree, SketchMountainIcon } from './OutdoorDecorations';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  const titles = [
    "Programmer",
    "AI Enthusiast",
    "Full Stack Developer",
    "Hiker",
    "Runner",
    "Climber",
    "Skier",
    "Pianist",
    "Creative"
  ];
  
  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    
    return () => {
      clearInterval(titleInterval);
    };
  }, [titles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-sketch-charcoal-50 via-sketch-ash-100 to-sketch-charcoal-100 paper-bg">
      {/* Pencil-drawn mountain background */}
      <BackgroundMountains />
      
      {/* Decorative outdoor elements */}
      <SketchCompass className="absolute top-20 right-10 opacity-20 hidden lg:block" size={80} />
      <SketchTree className="absolute bottom-32 left-10 opacity-30" delay={0.5} />
      <SketchTree className="absolute bottom-40 left-28 opacity-25" delay={0.8} />
      <SketchMountainIcon className="absolute top-40 left-20 opacity-20 hidden md:block" delay={0.3} />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-sketch-charcoal-800 mb-6 drop-shadow-sm">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sketch-sage-600 via-sketch-olive-500 to-sketch-moss-600">Vesaun</span>
            </h1>
            <div className="h-12 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTitleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute w-full"
                >
                  <p className="text-xl md:text-2xl text-sketch-charcoal-700 font-semibold font-cabin">
                    I'm a <span className="text-sketch-olive-600 relative inline-block">
                      {titles[currentTitleIndex]}
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-sketch-sage-500"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </span>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-10 flex gap-4 justify-center md:justify-start">
              <motion.a 
                href="#contact" 
                className="px-8 py-3 bg-sketch-sage-600 hover:bg-sketch-sage-700 text-sketch-charcoal-50 rounded-lg font-semibold transition-all transform hover:scale-105 border-2 border-sketch-olive-600 shadow-lg relative overflow-hidden font-cabin"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Contact Me</span>
                <motion.div
                  className="absolute inset-0 bg-sketch-moss-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: 0 }}
                />
              </motion.a>
              <motion.a 
                href="#projects" 
                className="px-8 py-3 border-2 border-sketch-olive-500 text-sketch-olive-700 rounded-lg font-semibold hover:bg-sketch-sage-50 transition-all transform hover:scale-105 shadow-lg sketch-border font-cabin"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
              {/* Hand-drawn circle border effect */}
              <svg className="absolute inset-0 w-full h-full -rotate-2" viewBox="0 0 200 200">
                <motion.circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="#7BA05B"
                  strokeWidth="4"
                  className="sketch-stroke"
                  initial={{ pathLength: 0, rotate: -10 }}
                  animate={{ pathLength: 1, rotate: 0 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  opacity="0.6"
                />
              </svg>
              
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-sketch-sage-300/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="rounded-full relative z-10 border-4 border-sketch-olive-600 shadow-2xl shadow-sketch-charcoal-900/30 w-full h-full bg-sketch-ash-200 flex items-center justify-center overflow-hidden">
                <Image
                  src="/headshot.jpg" 
                  alt="Vesaun Shrestha"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                  priority
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-sketch-sage-700/5 via-sketch-olive-600/5 to-sketch-sage-700/5 rounded-full"
                  animate={{ 
                    x: ["0%", "100%", "0%"],
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;