import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({ settings }) => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              {settings?.full_name?.split(' ')[0] || 'Dev'}.
            </a>
            <p className="text-slate-500 mt-2 text-sm max-w-sm">
              {settings?.hero_tagline}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={settings?.github_url || '#'} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href={settings?.linkedin_url || '#'} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href={`mailto:${settings?.contact_email || 'saeedmuhammadwaqar@gmail.com'}`} className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {settings?.full_name || 'Developer'}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
