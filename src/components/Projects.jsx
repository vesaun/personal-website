'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const projectsData = [
  {
    title: "Interfraternity Council Website",
    description: "A full-stack fraternity social media website built with Next.js, Python, Firebase, Google Cloud, and PostgreSQL. Features include user authentication, event management, and a social media feed.",
    image: "/project1.jpg",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://project2.com",
    githubLink: "https://github.com/vesaun"
  },
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
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 border border-gray-700"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
        borderColor: '#8b5cf6'
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400">Project Image</span>
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"
          animate={{ 
            height: isHovered ? '100%' : '16',
            opacity: isHovered ? 0.7 : 0.5 
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6 relative">
        <motion.h3 
          className="text-xl font-bold text-gray-200 mb-3"
          animate={{ 
            color: isHovered ? '#d946ef' : '#f3f4f6'
          }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm"
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
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-purple-500 text-purple-400 rounded-lg"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(139, 92, 246, 0.1)'
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
    
    // Generate floating particles
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.08 + 0.02,
    }));
    
    setParticles(generatedParticles);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
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
                  y: [0, Math.random() * 50 - 25, 0],
                  x: [0, Math.random() * 50 - 25, 0],
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

            {/* Animated geometric shapes */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`shape-${i}`}
                className="absolute opacity-10"
                style={{
                  width: Math.random() * 100 + 50 + 'px',
                  height: Math.random() * 100 + 50 + 'px',
                  borderRadius: Math.random() > 0.7 ? '50%' : `${Math.random() * 30}%`,
                  border: `1px solid rgba(139, 92, 246, ${Math.random() * 0.3 + 0.1})`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                }}
                transition={{
                  duration: Math.random() * 30 + 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "reverse"
                }}
              />
            ))}

            {/* Large glowing background orb */}
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl"
              style={{
                width: '40vw',
                height: '40vw',
                top: '50%',
                left: '20%',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [-50, 50, -50],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Animated lines */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
                style={{
                  width: Math.random() * 40 + 20 + '%',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 60}%`,
                  rotate: `${Math.random() * 180}deg`,
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  x: [-20, 20, -20],
                }}
                transition={{
                  duration: Math.random() * 15 + 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Projects</span>
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