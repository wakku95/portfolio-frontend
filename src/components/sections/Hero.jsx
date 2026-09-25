import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = ({ settings }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-white"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] bg-indigo-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[40rem] h-[40rem] bg-purple-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-indigo-600 font-semibold tracking-wide uppercase text-sm"
            >
              Hi, my name is
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight"
            >
              {settings?.full_name || 'Hello'}.
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold text-slate-500"
            >
              {settings?.profession || 'Developer'}
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-600 max-w-xl leading-relaxed"
          >
            {settings?.hero_tagline} {settings?.about_me?.split('.')[0] || ''}.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Work <ArrowRight size={18} />
            </a>
            <a 
              href={settings?.cv_link || '#'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm hover:shadow-md"
            >
              Resume <Download size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden md:block"
        >
          {/* Abstract geometric representation of a developer or something similar */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl rotate-6 opacity-20 blur-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl -rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100 overflow-hidden">
                <div className="w-full h-full p-8 bg-slate-900 text-slate-300 font-mono text-sm leading-relaxed overflow-hidden">
                  <p className="text-pink-400">const <span className="text-blue-400">developer</span> = {'{'}</p>
                  <p className="ml-4">name: <span className="text-green-400">"{settings?.full_name || 'Anonymous'}"</span>,</p>
                  <p className="ml-4">skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Laravel"</span>, <span className="text-green-400">"Node"</span>],</p>
                  <p className="ml-4">hardWorker: <span className="text-orange-400">true</span>,</p>
                  <p className="ml-4">problemSolver: <span className="text-orange-400">true</span>,</p>
                  <p className="ml-4">hireable: <span className="text-orange-400">true</span></p>
                  <p>{'}'};</p>
                  <br/>
                  <p className="text-pink-400">developer.<span className="text-blue-400">buildAwesomeThings</span>();</p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
