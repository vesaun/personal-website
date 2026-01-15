'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SketchTree, SketchMountainIcon, SketchTent, SketchFootprints } from './OutdoorDecorations';

const projectsData = [
  {
    title: "Happy Crew Coffee Shop App",
    description: "A React Native app for a coffee shop built with Expo, Firebase, and Google Cloud. Features include user authentication, order management, and a social media feed.",
    image: "/project2.jpg",
    tags: ["React Native", "Firebase", "Tailwind CSS", "Stripe"],
    liveLink: "https://project2.com",
    githubLink: "https://github.com/vesaun"
  },
  {
    title: "(Upcoming) Physics Engine",
    description: "A real-time physics engine built with C++17 and OpenGL. Features include collision detection, rigid body dynamics, and a particle system.",
    image: "/project3.jpg",
    tags: ["C++", "OpenGL"],
    liveLink: "https://project2.com",
    githubLink: "https://github.com/vesaun"
  },
  {
    title: "Nate project",
    description: "A project built with React, Node.js, and MongoDB. Features include user authentication, event management, and a social media feed.",
    image: "/project4.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    liveLink: "https://project2.com",
    githubLink: "https://github.com/vesaun"
  }
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-sketch-ash-100/80 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 border-2 border-sketch-olive-400 sketch-border"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 25px -5px rgba(74, 65, 42, 0.3), 0 10px 10px -5px rgba(108, 84, 30, 0.2)',
        borderColor: '#7BA05B'
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-sketch-ash-200/70 flex items-center justify-center">
          <span className="text-sketch-charcoal-600 font-cabin">Project Image</span>
        </div>
        <motion.div
          className="absolute inset-0 bg-sketch-sage-600/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-sketch-charcoal-800 to-transparent"
          animate={{ 
            height: isHovered ? '100%' : '64px',
            opacity: isHovered ? 0.7 : 0.5
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6 relative">
        {/* Small decorative corner element */}
        <svg className="absolute top-2 right-2 w-8 h-8 opacity-20" viewBox="0 0 40 40">
          <path d="M35,5 L35,35 L5,35" stroke="#7BA05B" strokeWidth="2" fill="none" className="sketch-stroke" />
        </svg>
        
        <motion.h3 
          className="text-xl font-bold text-sketch-charcoal-800 mb-3 font-cabin"
          animate={{ 
            color: isHovered ? '#4A412A' : '#292524'
          }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-sketch-charcoal-600 mb-4 font-pt-sans">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-sketch-sage-200/60 text-sketch-olive-700 rounded-full text-sm border border-sketch-sage-400 font-pt-sans"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-sketch-sage-600 hover:bg-sketch-sage-700 text-sketch-charcoal-50 rounded-lg shadow-lg border-2 border-sketch-olive-600 font-cabin"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-sketch-olive-400 text-sketch-olive-700 hover:text-sketch-olive-800 rounded-lg font-cabin"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(123, 160, 91, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  // Use state for animations to prevent hydration errors
  const [particles, setParticles] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Generate animations only on the client side
  useEffect(() => {
    setIsClient(true);
    
    // Generate subtle rocky particles
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.06 + 0.02,
      rotation: Math.random() * 360,
    }));
    
    setParticles(generatedParticles);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-sketch-charcoal-100 via-sketch-ash-50 to-sketch-charcoal-50 relative overflow-hidden paper-bg">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Outdoor decorative elements */}
        <SketchTree className="absolute top-24 left-16 opacity-20" delay={0} />
        <SketchTree className="absolute bottom-32 right-20 opacity-18" delay={0.6} />
        <SketchMountainIcon className="absolute top-40 right-32 opacity-15 hidden lg:block" delay={0.3} />
        <SketchTent className="absolute bottom-24 left-24 opacity-25 hidden md:block" />
        <SketchFootprints className="absolute top-1/2 left-12 opacity-20" />
        
        {/* Trail markers scattered around */}
        <svg className="absolute top-20 left-1/3 w-16 h-16 opacity-15" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#7BA05B" strokeWidth="3" fill="none" className="sketch-stroke" />
          <path d="M30,50 L70,50 M50,30 L50,70" stroke="#6C541E" strokeWidth="2" className="sketch-stroke" />
        </svg>
        
        {/* Hand-drawn mountain ridges */}
        <svg className="absolute bottom-0 left-0 w-full h-48 opacity-8" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice">
          <path
            d="M0,200 L60,150 Q100,120 140,145 L200,110 Q240,85 280,105 L340,80 Q380,60 420,75 L480,60 Q520,45 560,55 L620,45 Q660,35 700,42 L760,38 Q800,32 840,38 L900,35 Q940,30 980,35 L1040,32 L1200,40 L1200,200 Z"
            fill="#B2BEB5"
            className="sketch-stroke"
          />
        </svg>
        
        {/* Only render animations on client side to prevent hydration mismatch */}
        {isClient && (
          <>
            {/* Subtle rocky particles */}
            {particles.map((particle) => (
              <motion.div
                key={`particle-${particle.id}`}
                className="absolute"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  opacity: particle.opacity,
                  borderRadius: `${Math.random() * 40 + 20}%`,
                  background: 'rgba(120, 113, 108, 0.3)',
                }}
                animate={{
                  y: [0, Math.random() * 30 - 15, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [particle.opacity, particle.opacity * 1.4, particle.opacity],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: particle.delay,
                }}
              />
            ))}

            {/* Subtle rocky shapes */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`shape-${i}`}
                className="absolute opacity-10"
                style={{
                  width: Math.random() * 60 + 30 + 'px',
                  height: Math.random() * 50 + 25 + 'px',
                  borderRadius: `${Math.random() * 40 + 20}%`,
                  background: `rgba(120, 113, 108, 0.2)`,
                  border: `1px solid rgba(68, 64, 60, ${Math.random() * 0.2 + 0.1})`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  rotate: [0, Math.random() * 10 - 5],
                  x: [0, Math.random() * 20 - 10],
                  y: [0, Math.random() * 20 - 10],
                }}
                transition={{
                  duration: Math.random() * 25 + 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
              />
            ))}

            {/* Subtle background glow */}
            <motion.div
              className="absolute rounded-full bg-stone-600/5 blur-3xl"
              style={{
                width: '40vw',
                height: '40vw',
                top: '50%',
                left: '20%',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.08, 0.15, 0.08],
                x: [-30, 30, -30],
              }}
              transition={{
                duration: 35,
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
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sketch-charcoal-800 font-cabin">
            Featured <span className="text-sketch-sage-600">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 