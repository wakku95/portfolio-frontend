import { motion } from 'framer-motion';

const About = ({ settings }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-12 items-center"
        >
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-indigo-600/20 mix-blend-multiply z-10 hover:opacity-0 transition-opacity duration-300"></div>
              {/* Fallback image if no portrait provided */}
              <img 
                src={settings?.profile_image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                alt={settings?.full_name || "Workspace"} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600 -z-10 rounded-2xl hidden md:block"></div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About Me</h2>
              <div className="h-px bg-slate-300 flex-1"></div>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              {settings?.about_me || 'Passionate developer.'}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              My journey in web development started back when I was trying to build custom forums, and it has evolved into creating complex, scalable applications that live on the web today.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-semibold text-slate-900">Name:</h4>
                <p className="text-slate-600">{settings?.full_name}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Email:</h4>
                <p className="text-slate-600"><a href={`mailto:${settings?.contact_email || 'saeedmuhammadwaqar@gmail.com'}`} className="text-indigo-600 hover:underline">{settings?.contact_email || 'saeedmuhammadwaqar@gmail.com'}</a></p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Phone:</h4>
                <p className="text-slate-600">{settings?.contact_phone || '+923032404609'}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Location:</h4>
                <p className="text-slate-600">Pakistan</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
