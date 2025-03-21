'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const About = () => {
  // Use state for animations to prevent hydration errors
  const [particles, setParticles] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Generate animations only on the client side
  useEffect(() => {
    setIsClient(true);
    
    // Generate floating particles for background
    const generatedParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.07 + 0.03,
    }));
    
    setParticles(generatedParticles);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Only render animations on client side to prevent hydration mismatch */}
        {isClient && (
          <>
            {/* Floating particles */}
            {particles.map((particle) => (
              <motion.div
                key={`particle-${particle.id}`}
                className="absolute rounded-full bg-purple-500"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  opacity: particle.opacity,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: particle.delay,
                }}
              />
            ))}
            
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M0,0 L100,0 L100,100 L0,100 Z"
                fill="none"
                stroke="rgba(139, 92, 246, 0.1)"
                strokeWidth="0.5"
                initial={{}}
                animate={{
                  d: [
                    "M0,0 L100,0 L100,100 L0,100 Z",
                    "M0,0 L100,0 L90,100 L10,100 Z",
                    "M0,0 L100,0 L100,100 L0,100 Z"
                  ]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                d="M0,20 L100,20"
                fill="none"
                stroke="rgba(139, 92, 246, 0.05)"
                strokeWidth="0.5"
                initial={{}}
                animate={{
                  d: [
                    "M0,20 L100,20",
                    "M0,25 L100,15",
                    "M0,20 L100,20"
                  ]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                d="M0,40 L100,40"
                fill="none"
                stroke="rgba(139, 92, 246, 0.05)"
                strokeWidth="0.5"
                initial={{}}
                animate={{
                  d: [
                    "M0,40 L100,40",
                    "M0,35 L100,45",
                    "M0,40 L100,40"
                  ]
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                d="M0,60 L100,60"
                fill="none"
                stroke="rgba(139, 92, 246, 0.05)"
                strokeWidth="0.5"
                initial={{}}
                animate={{
                  d: [
                    "M0,60 L100,60",
                    "M0,65 L100,55",
                    "M0,60 L100,60"
                  ]
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                d="M0,80 L100,80"
                fill="none"
                stroke="rgba(139, 92, 246, 0.05)"
                strokeWidth="0.5"
                initial={{}}
                animate={{
                  d: [
                    "M0,80 L100,80",
                    "M0,75 L100,85",
                    "M0,80 L100,80"
                  ]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>

            {/* Glowing orb light effect */}
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl"
              style={{
                width: '30vw',
                height: '30vw',
                top: '30%',
                left: '10%',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [-50, 50, -50],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Me</span>
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700 relative overflow-hidden">
            {/* Animated glow */}
            <motion.div 
              className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl"
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <p className="relative text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate developer with a keen interest in building beautiful and functional web applications. 
              With a strong foundation in modern web technologies, I love turning complex problems into simple, 
              beautiful, and intuitive solutions.
            </p>
            <p className="relative text-lg text-gray-300 leading-relaxed mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community.
            </p>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600"
              >
                <h3 className="font-bold text-purple-400 text-xl">2+</h3>
                <p className="text-gray-300">Years Experience</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600"
              >
                <h3 className="font-bold text-purple-400 text-xl">25+</h3>
                <p className="text-gray-300">Projects</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600"
              >
                <h3 className="font-bold text-purple-400 text-xl">15+</h3>
                <p className="text-gray-300">Technologies</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600"
              >
                <h3 className="font-bold text-purple-400 text-xl">50+</h3>
                <p className="text-gray-300">Students Mentored</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 