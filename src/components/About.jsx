'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SketchTree, SketchFootprints, SketchCampfire, SketchCompass, SketchMountainIcon, SketchTrail } from './OutdoorDecorations';
import { TreePine, Mountain } from 'lucide-react';

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-sketch-charcoal-100 via-sketch-ash-50 to-sketch-charcoal-50 relative overflow-hidden paper-bg">
      {/* Decorative outdoor elements - scattered throughout */}
      <SketchTree className="absolute top-20 left-10 opacity-20" delay={0} />
      <SketchTree className="absolute top-60 left-32 opacity-15 hidden lg:block" delay={0.3} />
      <SketchCampfire className="absolute top-40 right-20 opacity-30" animate={true} />
      <SketchFootprints className="absolute bottom-20 right-10 opacity-20" />
      <SketchMountainIcon className="absolute top-32 right-40 opacity-15 hidden md:block" delay={0.5} />
      <SketchCompass className="absolute bottom-32 left-20 opacity-20 hidden lg:block" size={50} />
      
      {/* Hand-drawn trail path */}
      <svg className="absolute top-1/2 left-0 w-full h-32 opacity-15 hidden md:block" viewBox="0 0 1200 100">
        <motion.path
          d="M0,50 Q200,30 400,50 T800,50 Q1000,70 1200,50"
          stroke="#B2BEB5"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,10"
          className="sketch-stroke"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
        />
      </svg>
      
      {/* Sketch mountain silhouettes - layered */}
      <svg className="absolute bottom-0 left-0 w-full h-64 opacity-10" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMax slice">
        <path
          d="M0,300 L100,200 Q150,160 200,190 L300,140 Q350,100 400,130 L500,90 Q550,60 600,85 L700,60 Q750,40 800,55 L900,45 Q950,35 1000,45 L1100,40 L1200,50 L1200,300 Z"
          fill="#B2BEB5"
          className="sketch-stroke"
        />
      </svg>
      <svg className="absolute bottom-0 right-0 w-2/3 h-48 opacity-8" viewBox="0 0 800 200" preserveAspectRatio="xMidYMax slice">
        <path
          d="M0,200 L80,140 Q120,110 160,130 L220,100 Q260,80 300,95 L400,200 Z"
          fill="#A7C091"
          className="sketch-stroke"
        />
      </svg>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-sketch-charcoal-800 font-cabin">
            About <span className="text-sketch-sage-600">Me</span>
          </h2>
          <div className="bg-sketch-ash-100/80 backdrop-blur-sm rounded-lg shadow-2xl p-8 border-2 border-sketch-olive-400 relative overflow-hidden sketch-border">
            {/* Hand-drawn corner decorations */}
            <TreePine className="absolute top-4 right-4 opacity-20" size={30} style={{ color: '#7BA05B' }} />
            <Mountain className="absolute bottom-4 left-4 opacity-15" size={28} style={{ color: '#6C541E' }} />
            
            {/* Decorative sketch lines in corners */}
            <svg className="absolute top-0 left-0 w-20 h-20 opacity-20" viewBox="0 0 100 100">
              <path d="M0,20 L80,0 M0,40 L60,0 M0,60 L40,0" stroke="#7BA05B" strokeWidth="2" className="sketch-stroke" />
            </svg>
            <svg className="absolute bottom-0 right-0 w-20 h-20 opacity-20" viewBox="0 0 100 100">
              <path d="M100,80 L20,100 M100,60 L40,100 M100,40 L60,100" stroke="#7BA05B" strokeWidth="2" className="sketch-stroke" />
            </svg>
            
            <p className="relative text-lg text-sketch-charcoal-700 leading-relaxed mb-6 font-pt-sans">
              I'm a passionate developer with a keen interest in building beautiful and functional web applications. 
              With a strong foundation in modern web technologies, I love turning complex problems into simple, 
              beautiful, and intuitive solutions.
            </p>
            <p className="relative text-lg text-sketch-charcoal-700 leading-relaxed mb-6 font-pt-sans">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community.
            </p>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 bg-sketch-sage-100/50 rounded-lg border-2 border-sketch-sage-400 shadow-lg sketch-border"
              >
                <h3 className="font-bold text-sketch-olive-700 text-xl font-cabin">2+</h3>
                <p className="text-sketch-charcoal-600 font-pt-sans">Years Experience</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 bg-sketch-sage-100/50 rounded-lg border-2 border-sketch-sage-400 shadow-lg sketch-border"
              >
                <h3 className="font-bold text-sketch-olive-700 text-xl font-cabin">25+</h3>
                <p className="text-sketch-charcoal-600 font-pt-sans">Projects</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 bg-sketch-sage-100/50 rounded-lg border-2 border-sketch-sage-400 shadow-lg sketch-border"
              >
                <h3 className="font-bold text-sketch-olive-700 text-xl font-cabin">15+</h3>
                <p className="text-sketch-charcoal-600 font-pt-sans">Technologies</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 bg-sketch-sage-100/50 rounded-lg border-2 border-sketch-sage-400 shadow-lg sketch-border"
              >
                <h3 className="font-bold text-sketch-olive-700 text-xl font-cabin">50+</h3>
                <p className="text-sketch-charcoal-600 font-pt-sans">Students Mentored</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 