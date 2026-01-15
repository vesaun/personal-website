'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackgroundMountains = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* SVG Filters for pencil texture */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="pencil-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="1" />
            <feDisplacementMap in="SourceGraphic" scale="2" />
          </filter>
          <filter id="sketch-filter">
            <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" />
            <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-40" 
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(120, 113, 108, 0.04) 2px, rgba(120, 113, 108, 0.04) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(120, 113, 108, 0.04) 2px, rgba(120, 113, 108, 0.04) 4px)
          `
        }}
      />

      {/* Hand-drawn mountain layers - back to front */}
      {isClient && (
        <>
          {/* Distant mountains - lightest */}
          <svg className="absolute bottom-0 left-0 w-full h-2/3" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMax slice">
            <motion.path
              d="M0,800 L50,650 Q100,580 150,620 L200,550 Q250,480 300,520 L350,450 Q400,380 450,430 L500,370 Q550,320 600,360 L650,310 Q700,260 750,300 L800,250 Q850,200 900,240 L950,200 Q1000,160 1050,190 L1100,170 L1200,180 L1200,800 Z"
              fill="none"
              stroke="#B2BEB5"
              strokeWidth="3"
              className="sketch-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, delay: 0.2 }}
            />
          </svg>

          {/* Mid-range mountains */}
          <svg className="absolute bottom-0 left-0 w-full h-3/5" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice">
            <motion.path
              d="M0,600 L80,480 Q120,430 160,470 L220,380 Q270,310 320,360 L380,280 Q430,220 480,270 L540,200 Q590,150 640,190 L700,140 Q750,90 800,130 L860,90 Q910,50 960,85 L1020,60 Q1070,30 1120,55 L1200,45 L1200,600 Z"
              fill="none"
              stroke="#A7C091"
              strokeWidth="4"
              className="sketch-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, delay: 0.5 }}
            />
          </svg>

          {/* Foreground mountains - darkest and most detailed */}
          <svg className="absolute bottom-0 left-0 w-full h-1/2" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice">
            <motion.path
              d="M0,400 L60,320 Q90,280 120,310 L150,250 Q180,200 210,235 L240,180 Q270,130 300,165 L330,120 Q360,75 390,105 L420,70 Q450,35 480,60 L510,35 Q540,10 570,30 L600,15 Q630,5 660,20 L690,10 Q720,0 750,12 L780,8 Q810,5 840,15 L870,12 Q900,10 930,18 L960,15 Q990,12 1020,20 L1050,18 Q1080,16 1110,22 L1140,20 L1200,25 L1200,400 Z"
              fill="none"
              stroke="#6C541E"
              strokeWidth="5"
              className="sketch-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 3, delay: 0.8 }}
            />
            
            {/* Add shading strokes */}
            <motion.path
              d="M150,250 Q140,270 130,290 M240,180 Q230,200 220,220 M330,120 Q320,140 310,160 M420,70 Q410,90 400,110"
              fill="none"
              stroke="#4A412A"
              strokeWidth="2"
              opacity="0.3"
              className="sketch-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
          </svg>

          {/* Floating sketch particles (dust, leaves) */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: '#B2BEB5',
                opacity: 0.15,
              }}
              animate={{
                y: [0, Math.random() * -50 - 20, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.15, 0.05, 0.15],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Subtle cloud sketches */}
          {[1, 2, 3].map((i) => (
            <motion.svg
              key={`cloud-${i}`}
              className="absolute"
              style={{
                width: `${Math.random() * 80 + 60}px`,
                height: `${Math.random() * 30 + 20}px`,
                left: `${i * 30 + Math.random() * 10}%`,
                top: `${i * 15 + Math.random() * 10}%`,
              }}
              viewBox="0 0 100 40"
              initial={{ x: -100, opacity: 0 }}
              animate={{ 
                x: [0, 20, 0],
                opacity: [0, 0.1, 0.1, 0],
              }}
              transition={{
                duration: 30 + i * 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 5,
              }}
            >
              <path
                d="M20,30 Q15,25 15,20 Q15,15 20,13 Q25,5 35,10 Q45,8 50,15 Q60,13 65,20 Q70,25 65,30 Z"
                fill="none"
                stroke="#D8DEDA"
                strokeWidth="1.5"
                className="sketch-stroke"
                opacity="0.3"
              />
            </motion.svg>
          ))}
        </>
      )}
    </div>
  );
};

export default BackgroundMountains;