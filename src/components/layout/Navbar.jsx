import { useState } from 'react';
import { Menu, X, Mail, Home, User, FileText, Layers, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = ({ settings }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Layers size={20} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={20} /> },
    { name: 'Experience', href: '#experience', icon: <FileText size={20} /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="xl:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-indigo-600 text-white p-2 rounded-full shadow-lg"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar overlay for mobile */}
      {mobileMenuOpen && (
        <div 
          className="xl:hidden fixed inset-0 bg-black/50 z-40" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <header
        className={`fixed top-0 left-0 bottom-0 w-[300px] bg-[#040b14] text-white z-50 transition-transform duration-300 overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'
        }`}
      >
        <div className="flex flex-col items-center p-8">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-8 border-[#2c2f3f] mb-4">
            <img 
              src={settings?.profile_image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"} 
              alt={settings?.full_name || "Profile"} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-2xl font-bold mb-4 text-center">
            <a href="#hero" className="text-white hover:text-indigo-400 transition-colors">
              {settings?.full_name || 'Alex Smith'}
            </a>
          </h1>

          <div className="flex gap-2 mb-8">
            <a href={settings?.github_url || '#'} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#212431] flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors">
              <FaGithub size={16}/>
            </a>
            <a href={settings?.linkedin_url || '#'} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#212431] flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors">
              <FaLinkedin size={16}/>
            </a>
            <a href={`mailto:${settings?.contact_email || 'saeedmuhammadwaqar@gmail.com'}`} className="w-9 h-9 rounded-full bg-[#212431] flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors">
              <Mail size={16}/>
            </a>
          </div>

          <nav className="w-full">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#a8a9b4] hover:text-white hover:bg-[#14151a] transition-all group"
                  >
                    <span className="text-[#a8a9b4] group-hover:text-indigo-400 transition-colors">
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
