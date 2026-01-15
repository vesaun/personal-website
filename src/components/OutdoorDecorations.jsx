'use client';

import { motion } from 'framer-motion';
import { Mountain, TreePine, Compass, Footprints, Tent } from 'lucide-react';
import { GiCampfire, GiPineTree, GiMountains } from 'react-icons/gi';

export const SketchCompass = ({ className = "", size = 60 }) => (
  <motion.div
    className={`${className}`}
    initial={{ rotate: -10, opacity: 0 }}
    animate={{ rotate: 0, opacity: 0.6 }}
    transition={{ duration: 1.5 }}
  >
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="#6C541E"
        strokeWidth="2"
        className="sketch-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.path
        d="M50,10 L55,48 L50,50 L45,48 Z"
        fill="#7BA05B"
        stroke="#6C541E"
        strokeWidth="1.5"
        className="sketch-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.path
        d="M50,90 L55,52 L50,50 L45,52 Z"
        fill="#B2BEB5"
        stroke="#6C541E"
        strokeWidth="1.5"
        className="sketch-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <text x="50" y="18" fontSize="8" fill="#4A412A" textAnchor="middle" fontFamily="Cabin">N</text>
      <text x="50" y="95" fontSize="8" fill="#4A412A" textAnchor="middle" fontFamily="Cabin">S</text>
      <text x="15" y="55" fontSize="8" fill="#4A412A" textAnchor="middle" fontFamily="Cabin">W</text>
      <text x="85" y="55" fontSize="8" fill="#4A412A" textAnchor="middle" fontFamily="Cabin">E</text>
    </svg>
  </motion.div>
);

export const SketchTree = ({ className = "", delay = 0 }) => (
  <motion.div
    className={`${className}`}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 0.4 }}
    transition={{ duration: 1, delay }}
  >
    <GiPineTree 
      size={40} 
      style={{ 
        color: '#7BA05B',
        filter: 'url(#sketch-filter)',
      }} 
    />
  </motion.div>
);

export const SketchMountainIcon = ({ className = "", delay = 0 }) => (
  <motion.div
    className={`${className}`}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 0.5 }}
    transition={{ duration: 1, delay }}
  >
    <GiMountains 
      size={45} 
      style={{ 
        color: '#B2BEB5',
        filter: 'url(#sketch-filter)',
      }} 
    />
  </motion.div>
);

export const SketchFootprints = ({ className = "" }) => (
  <motion.div
    className={`${className}`}
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.3 }}
    transition={{ duration: 2 }}
  >
    <Footprints 
      size={35} 
      style={{ 
        color: '#6C541E',
        strokeWidth: 2,
      }} 
    />
  </motion.div>
);

export const SketchCampfire = ({ className = "", animate: shouldAnimate = true }) => (
  <motion.div
    className={`${className}`}
    animate={shouldAnimate ? {
      scale: [1, 1.05, 1],
      opacity: [0.4, 0.5, 0.4],
    } : {}}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <GiCampfire 
      size={40} 
      style={{ 
        color: '#CA9F3C',
        filter: 'url(#sketch-filter)',
      }} 
    />
  </motion.div>
);

export const SketchTent = ({ className = "" }) => (
  <motion.div
    className={`${className}`}
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 0.4 }}
    transition={{ duration: 1.2 }}
  >
    <Tent 
      size={38} 
      style={{ 
        color: '#9D7B2B',
        strokeWidth: 2,
      }} 
    />
  </motion.div>
);

// Decorative trail path
export const SketchTrail = ({ className = "" }) => (
  <svg className={`${className}`} width="200" height="100" viewBox="0 0 200 100" fill="none">
    <motion.path
      d="M10,50 Q50,30 90,50 T170,50"
      stroke="#B2BEB5"
      strokeWidth="2"
      strokeDasharray="5,5"
      className="sketch-stroke"
      opacity="0.3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, delay: 0.5 }}
    />
  </svg>
);