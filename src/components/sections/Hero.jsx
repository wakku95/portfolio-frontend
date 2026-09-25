import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = ({ settings }) => {
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform values for the character (moving opposite to mouse for depth)
  const xOffset = useTransform(mouseX, [-500, 500], [25, -25]);
  const yOffset = useTransform(mouseY, [-500, 500], [25, -25]);

  const handleMouseMove = (e) => {
    // Calculate distance from center of window
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  // SVG patterns for background
  const stripesPattern = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.93 22.93'%3E%3Cpolygon fill='%23aadcec' points='0 8.18 14.75 22.93 22.74 22.93 0 0.19 0 8.18'/%3E%3Cpolygon fill='%23aadcec' points='22.93 8.37 22.93 0.38 22.56 0 14.56 0 22.93 8.37'/%3E%3C/svg%3E`;
  const dotsPattern = `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 22.9 22.9' style='enable-background:new 0 0 22.9 22.9;' xml:space='preserve'%3E%3Ccircle fill='%23aadcec' class='st0' cx='5.7' cy='5.9' r='3'/%3E%3Ccircle fill='%23aadcec' class='st0' cx='17.2' cy='17.2' r='3'/%3E%3C/svg%3E`;

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#f4f9fc]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }} // Reset on leave
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Typography */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 relative z-20"
        >
          {/* Decorative striped background box behind text */}
          <div 
            className="absolute -inset-8 -z-10 opacity-40 mix-blend-multiply hidden md:block" 
            style={{ backgroundImage: `url("${stripesPattern}")`, backgroundSize: '11px' }}
          ></div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0f1b61] leading-tight">
            Hi, my<br/>
            name is <span className="text-[#0f1b61]">{settings?.full_name?.split(' ')[0] || 'Robb'}</span><span className="text-[#aadcec]">.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#0f1b61] font-serif leading-relaxed max-w-lg">
            I'm an <b className="font-bold">{settings?.profession || 'independent creative developer'}</b> based in Pakistan.
          </p>

          {/* Simple scroll indicator line */}
          <div className="pt-12">
            <p className="text-[#0f1b61] uppercase tracking-widest text-xs font-bold mb-4 opacity-50">Scroll</p>
            <div className="w-[1px] h-16 bg-[#0f1b61] opacity-20"></div>
          </div>
        </motion.div>

        {/* Right Side: Parallax Character / Image */}
        <div className="relative w-full max-w-lg mx-auto lg:ml-auto h-[600px] flex items-center justify-center">
          
          {/* Decorative dots behind image */}
          <motion.div 
            style={{ x: useTransform(mouseX, [-500, 500], [-15, 15]), y: useTransform(mouseY, [-500, 500], [-15, 15]) }}
            className="absolute inset-0 opacity-60 mix-blend-multiply rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full h-full rounded-full" style={{ backgroundImage: `url("${dotsPattern}")`, backgroundSize: '12px' }}></div>
          </motion.div>

          {/* The Parallax Image */}
          <motion.div
            style={{ x: xOffset, y: yOffset }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full aspect-square"
          >
            {/* Outline / Shadow layer */}
            <div className="absolute inset-4 rounded-full border-4 border-[#7f00e0] opacity-50 translate-x-4 translate-y-4"></div>
            
            {/* Main image wrapped in a circle to mimic avatar */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white">
              <img 
                src="/anime-avatar.jpg" 
                alt={settings?.full_name || "Profile"} 
                className="w-full h-full object-cover"
              />
              {/* Duotone tint overlay to match the theme */}
              <div className="absolute inset-0 bg-[#aadcec] mix-blend-multiply opacity-30 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
