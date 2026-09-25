import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}<span className="animate-pulse border-r-2 border-white ml-1"></span></span>;
};

const Hero = ({ settings }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={settings?.profile_image || "/hero-bench.jpg"} 
          alt="Hero Background" 
          className="w-full h-full object-cover grayscale"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            {settings?.full_name || 'Alex Smith'}
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 font-medium">
            I'm <span className="text-white border-b-4 border-indigo-500 pb-1"><Typewriter text={settings?.profession || 'Developer'} delay={100} /></span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
