'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
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
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
      
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Title rotation effect
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(titleInterval);
    };
  }, [titles.length]);

  // Generate random lines
  const lines = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x1: Math.random() * 100,
    y1: Math.random() * 100,
    length: Math.random() * 30 + 10,
    angle: Math.random() * 360,
    speed: Math.random() * 5 + 2,
    delay: Math.random() * 5,
    thickness: Math.random() * 1.5 + 0.5,
    color: Math.random() > 0.7 ? 'rgba(217, 70, 239, 0.2)' : 'rgba(139, 92, 246, 0.2)'
  }));

  // Generate particles for cursor effect
  const cursorParticles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 3,
    delay: i * 0.05,
    duration: Math.random() * 1.5 + 1,
    distance: Math.random() * 50 + 30,
    opacity: Math.random() * 0.4 + 0.1,
    angle: Math.random() * 360
  }));

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 transition-all duration-500">
      {/* Cursor-following particles effect */}
      {cursorParticles.map((particle) => (
        <motion.div
          key={`cursor-${particle.id}`}
          className="fixed rounded-full pointer-events-none z-50"
          style={{
            width: particle.size,
            height: particle.size,
            top: 0,
            left: 0,
            backgroundColor: `rgba(139, 92, 246, ${particle.opacity})`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(139, 92, 246, ${particle.opacity})`,
          }}
          animate={{
            opacity: [0, particle.opacity, 0],
            scale: [0.2, 1, 0.2],
            x: [
              cursorPosition.x - particle.size / 2,
              cursorPosition.x + Math.cos(particle.angle * (Math.PI / 180)) * particle.distance - particle.size / 2,
            ],
            y: [
              cursorPosition.y - particle.size / 2,
              cursorPosition.y + Math.sin(particle.angle * (Math.PI / 180)) * particle.distance - particle.size / 2,
            ]
          }}
          transition={{
            duration: particle.duration,
            ease: "easeOut",
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        />
      ))}
      
      {/* Main cursor glow */}
      <motion.div 
        className="fixed rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          width: 30,
          height: 30,
          top: 0,
          left: 0,
          background: 'radial-gradient(circle, rgba(217, 70, 239, 0.5) 0%, rgba(139, 92, 246, 0.3) 50%, rgba(139, 92, 246, 0) 100%)',
        }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          x: cursorPosition.x - 15,
          y: cursorPosition.y - 15,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          scale: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          },
          x: {
            duration: 0.1, 
            ease: "linear"
          },
          y: {
            duration: 0.1,
            ease: "linear"
          }
        }}
      />
      
      {/* Animated line-based background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Random animated lines */}
        {lines.map((line) => (
          <motion.div 
            key={line.id}
            className="absolute bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            style={{
              height: `${line.thickness}px`,
              width: `${line.length}vw`,
              opacity: 0.15,
              top: `${line.y1}%`,
              left: `${line.x1}%`,
              background: line.color,
              transformOrigin: 'left center',
              rotate: `${line.angle}deg`,
            }}
            animate={{
              x: [0, 50, -30, 20, 0],
              y: [0, 30, -20, 10, 0],
              rotate: [`${line.angle}deg`, `${line.angle + 20}deg`, `${line.angle - 10}deg`, `${line.angle + 5}deg`, `${line.angle}deg`],
              opacity: [0.1, 0.2, 0.15, 0.1],
            }}
            transition={{
              duration: line.speed * 10,
              repeat: Infinity,
              ease: "linear",
              delay: line.delay,
            }}
          />
        ))}
        
        {/* Intersecting grid lines */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px), 
                             linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Diagonal lines */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(217, 70, 239, 0.03) 25%, transparent 25%, transparent 75%, rgba(217, 70, 239, 0.03) 75%, rgba(217, 70, 239, 0.03)), 
                             linear-gradient(-45deg, rgba(139, 92, 246, 0.03) 25%, transparent 25%, transparent 75%, rgba(139, 92, 246, 0.03) 75%, rgba(139, 92, 246, 0.03))`,
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Moving connecting lines with nodes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute rounded-full bg-purple-500"
            style={{
              width: '4px',
              height: '4px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.15,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
              y: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Moving grid lines with mouse movement */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '8vw 8vw',
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
        }}
      />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Vesaun</span>
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
                  <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500 font-semibold">
                    I'm a <span className="text-white">{titles[currentTitleIndex]}</span>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-10 flex gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 border-2 border-pink-500 text-white rounded-full font-semibold hover:bg-pink-500/20 transition-all transform hover:scale-105"
              >
                View Work
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="rounded-full relative z-10 border-4 border-purple-500 shadow-xl w-full h-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <Image
                  src="/headshot.jpg" 
                  alt="Vesaun Shrestha"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                  priority
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full"
                  animate={{ 
                    x: ["0%", "100%", "0%"],
                  }}
                  transition={{ 
                    duration: 8,
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