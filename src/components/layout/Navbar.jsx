import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ settings }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-6">
            {/* Logo placeholder - using initials */}
            <a href="#hero" className="flex items-center justify-center w-12 h-12 border-2 border-[#7f00e0] text-[#7f00e0] font-bold text-xl hover:bg-[#7f00e0] hover:text-white transition-colors duration-300">
              {settings?.full_name?.charAt(0) || 'D'}
            </a>

            {/* Menu Trigger */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="hidden md:flex items-center gap-2 text-[#0f1b61] font-bold tracking-widest text-sm hover:text-[#7f00e0] transition-colors"
            >
              MENU
            </button>
          </div>

          {/* Hire Me Button */}
          <a 
            href={`mailto:${settings?.contact_email || 'saeedmuhammadwaqar@gmail.com'}?subject=Hi, I'd like to hire you`} 
            className="flex items-center gap-2 text-[#0f1b61] font-bold tracking-widest text-sm hover:text-[#7f00e0] transition-colors"
          >
            <div className="w-8 h-8 rounded-full border-2 border-[#7f00e0] flex items-center justify-center">
              <Mail size={16} className="text-[#7f00e0]" />
            </div>
            HIRE ME
          </a>

          {/* Mobile Menu Trigger */}
          <button 
            className="md:hidden text-[#0f1b61]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 bg-[#0f1b61] text-white z-[60] flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-[#aadcec] hover:text-white transition-colors flex items-center gap-2 font-bold tracking-widest text-sm"
            >
              CLOSE <X size={24} />
            </button>

            <nav className="flex flex-col items-center gap-8 text-3xl font-serif">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="hover:text-[#aadcec] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href={settings?.cv_link || '#'}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1 }}
                className="hover:text-[#aadcec] transition-colors"
              >
                Resume
              </motion.a>
            </nav>

            <div className="absolute bottom-12 flex gap-6">
              <a href={settings?.github_url || '#'} target="_blank" rel="noreferrer" className="text-[#aadcec] hover:text-white transition-colors"><FaGithub size={28}/></a>
              <a href={settings?.linkedin_url || '#'} target="_blank" rel="noreferrer" className="text-[#aadcec] hover:text-white transition-colors"><FaLinkedin size={28}/></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
