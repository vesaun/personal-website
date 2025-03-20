'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// const skillsData = [
//   {
//     category: "Frontend",
//     skills: [
//       { name: "React", level: 90 },
//       { name: "Next.js", level: 90 },
//       { name: "TypeScript", level: 80 },
//       { name: "Tailwind CSS", level: 90 },
//     ]
//   },
//   {
//     category: "Backend",
//     skills: [
//       { name: "Node.js", level: 85 },
//       { name: "Python", level: 95 },
//       { name: "MongoDB", level: 75 },
//       { name: "PostgreSQL", level: 75 },
//     ]
//   },
//   {
//     category: "Tools & Others",
//     skills: [
//       { name: "Git", level: 85 },
//       { name: "Docker", level: 70 },
//       { name: "AWS", level: 75 },
//       { name: "CI/CD", level: 70 },
//     ]
//   }
// ];

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 95 },
      { name: "PostgreSQL", level: 75 },
    ]
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", level: 95 },
      { name: "C", level: 95 },
    ]
  },
  {
    category: "Cloud & Platforms",
    skills: [
      { name: "Google Cloud", level: 90 },
      { name: "Firebase", level: 90 },
      { name: "AWS", level: 75 },
    ]
  },
  {
    category: "Operating Systems & Tools",
    skills: [
      { name: "Linux", level: 90 },
      { name: "Git", level: 95 },
      { name: "Docker", level: 70 },
    ]
  }
];

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-700 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Gradient background effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="flex justify-between items-center mb-2 relative">
        <h4 className="font-semibold text-gray-200">{skill.name}</h4>
        <motion.span 
          className="text-sm font-medium"
          animate={{ 
            color: isHovered ? '#d946ef' : '#a78bfa',
          }}
          transition={{ duration: 0.3 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-2 rounded-full relative"
          style={{
            background: 'linear-gradient(90deg, #8b5cf6, #d946ef)'
          }}
        />
        
        {/* Animated glow effect */}
        <motion.div
          className="absolute top-0 h-full w-5 bg-white blur-sm"
          initial={{ left: '-10%' }}
          animate={{ left: isHovered ? '120%' : '-10%' }}
          transition={{ duration: isHovered ? 1 : 0, ease: 'easeInOut' }}
          style={{ opacity: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  // Use state for animations to prevent hydration errors
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Generate animations only on the client side
  useEffect(() => {
    setIsClient(true);
    
    // Generate floating nodes for background
    const generatedNodes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.08 + 0.02,
    }));
    
    setNodes(generatedNodes);
    
    // Create connections between nodes
    const generatedConnections = [];
    generatedNodes.forEach((node, i) => {
      // Connect each node to 1-3 other nodes
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numConnections; j++) {
        // Choose a node to connect to
        const targetIndex = (i + j + 1) % generatedNodes.length;
        if (targetIndex !== i) {
          generatedConnections.push({
            id: `${i}-${targetIndex}`,
            from: i,
            to: targetIndex,
            opacity: Math.min(generatedNodes[i].opacity, generatedNodes[targetIndex].opacity) * 1.5,
          });
        }
      }
    });
    
    setConnections(generatedConnections);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated circuit pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Only render animations on client side to prevent hydration mismatch */}
        {isClient && (
          <>
            {/* Floating nodes */}
            {nodes.map((node) => (
              <motion.div
                key={`node-${node.id}`}
                className="absolute rounded-full bg-purple-500"
                style={{
                  width: `${node.size}px`,
                  height: `${node.size}px`,
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  opacity: node.opacity,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [node.opacity, node.opacity * 1.5, node.opacity],
                  x: [0, Math.random() * 50 - 25, 0],
                  y: [0, Math.random() * 50 - 25, 0],
                }}
                transition={{
                  duration: node.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: node.delay,
                }}
              />
            ))}

            {/* Animated circuit connections */}
            <svg className="absolute inset-0 w-full h-full">
              {connections.map((connection) => {
                const fromNode = nodes[connection.from];
                const toNode = nodes[connection.to];
                return (
                  <motion.line
                    key={connection.id}
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke={`rgba(139, 92, 246, ${connection.opacity})`}
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0], 
                      opacity: [0, connection.opacity, 0] 
                    }}
                    transition={{
                      duration: 10 + Math.random() * 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: Math.random() * 5,
                    }}
                  />
                );
              })}
            </svg>

            {/* Background glow effects */}
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl"
              style={{
                width: '40vw',
                height: '40vw',
                bottom: '-10%',
                right: '-10%',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i + 'line'}
                className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
                style={{
                  width: Math.random() * 50 + 20 + '%',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 50}%`,
                  rotate: `${Math.random() * 180}deg`,
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  left: [`${Math.random() * 50}%`, `${Math.random() * 50}%`]
                }}
                transition={{
                  duration: Math.random() * 10 + 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "mirror"
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
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Skills</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillsData.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-200 mb-4 relative inline-block">
                  {category.category}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard key={skill.name} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 