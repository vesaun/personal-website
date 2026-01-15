'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SketchTree, SketchMountainIcon, SketchCompass, SketchCampfire } from './OutdoorDecorations';
import { Code2, Cpu, Wrench, Mountain } from 'lucide-react';

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
      className="bg-sketch-ash-100/70 rounded-lg p-4 shadow-lg border-2 border-sketch-olive-300 relative overflow-hidden sketch-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Subtle background effect on hover */}
      <motion.div
        className="absolute inset-0 bg-sketch-sage-100/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="flex justify-between items-center mb-2 relative">
        <h4 className="font-semibold text-sketch-charcoal-800 font-cabin">{skill.name}</h4>
        <motion.span 
          className="text-sm font-medium text-sketch-olive-600 font-pt-sans"
          animate={{ 
            color: isHovered ? '#6C541E' : '#9D7B2B',
          }}
          transition={{ duration: 0.3 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="w-full bg-sketch-ash-200/80 rounded-full h-2.5 relative overflow-hidden border-2 border-sketch-sage-300">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-2.5 rounded-full relative"
          style={{
            background: 'linear-gradient(90deg, #7BA05B, #91B075, #568203)'
          }}
        />
        
        {/* Sketch-style progress indicator */}
        <motion.div
          className="absolute top-0 h-full w-8 bg-sketch-moss-400/30 blur-sm"
          initial={{ left: '-10%' }}
          animate={{ left: isHovered ? '120%' : '-10%' }}
          transition={{ duration: isHovered ? 1.5 : 0, ease: 'easeInOut' }}
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
    
    // Generate subtle rocky nodes
    const generatedNodes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.06 + 0.02,
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
    <section id="skills" className="py-20 bg-gradient-to-b from-sketch-charcoal-50 via-sketch-ash-100 to-sketch-charcoal-100 relative overflow-hidden paper-bg">
      {/* Decorative sketch elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Outdoor decorative elements */}
        <SketchTree className="absolute top-32 right-16 opacity-20" delay={0} />
        <SketchTree className="absolute bottom-40 left-12 opacity-15" delay={0.4} />
        <SketchMountainIcon className="absolute top-20 left-24 opacity-15 hidden lg:block" delay={0.2} />
        <SketchCompass className="absolute bottom-20 right-20 opacity-20 hidden md:block" size={55} />
        <SketchCampfire className="absolute top-1/2 right-32 opacity-25 hidden lg:block" animate={true} />
        
        {/* Hand-drawn connecting lines between sections */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <motion.path
            d="M100,100 Q300,150 500,100 T900,100"
            stroke="#B2BEB5"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,12"
            className="sketch-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.path
            d="M200,700 Q400,650 600,700 T1000,700"
            stroke="#A7C091"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,12"
            className="sketch-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
          />
        </svg>
        
        {/* Only render animations on client side to prevent hydration mismatch */}
        {isClient && (
          <>
            {/* Subtle rocky nodes */}
            {nodes.map((node) => (
              <motion.div
                key={`node-${node.id}`}
                className="absolute"
                style={{
                  width: `${node.size}px`,
                  height: `${node.size}px`,
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  opacity: node.opacity,
                  borderRadius: `${Math.random() * 40 + 20}%`,
                  background: `rgba(120, 113, 108, 0.4)`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [node.opacity, node.opacity * 1.5, node.opacity],
                  x: [0, Math.random() * 20 - 10, 0],
                  y: [0, Math.random() * 20 - 10, 0],
                }}
                transition={{
                  duration: node.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: node.delay,
                }}
              />
            ))}

            {/* Subtle connection lines */}
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
                    stroke={`rgba(120, 113, 108, ${connection.opacity * 0.3})`}
                    strokeWidth="0.5"
                    strokeDasharray="3,3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0], 
                      opacity: [0, connection.opacity * 0.4, 0] 
                    }}
                    transition={{
                      duration: 15 + Math.random() * 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 5,
                    }}
                  />
                );
              })}
            </svg>

            {/* Subtle background glow */}
            <motion.div
              className="absolute rounded-full bg-stone-600/5 blur-3xl"
              style={{
                width: '40vw',
                height: '40vw',
                bottom: '-10%',
                right: '-10%',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
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
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sketch-charcoal-800 font-cabin">
            Technical <span className="text-sketch-sage-600">Skills</span>
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
                <div className="flex items-center gap-3 mb-4">
                  {/* Category-specific outdoor icons */}
                  <div className="w-8 h-8 flex items-center justify-center opacity-50">
                    {index === 0 && <Code2 size={24} style={{ color: '#7BA05B' }} />}
                    {index === 1 && <Cpu size={24} style={{ color: '#6C541E' }} />}
                    {index === 2 && <Mountain size={24} style={{ color: '#568203' }} />}
                    {index === 3 && <Wrench size={24} style={{ color: '#9D7B2B' }} />}
                    {index === 4 && <Mountain size={24} style={{ color: '#7BA05B' }} />}
                  </div>
                  <h3 className="text-xl font-semibold text-sketch-olive-700 relative inline-block font-cabin">
                    {category.category}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-sketch-sage-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </h3>
                </div>
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