import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-slate-300 flex-1"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h2>
        </div>

        <div className="space-y-24">
          {(() => {
            let safeProjects = Array.isArray(projects) ? projects : [];
            // Handle Laravel pagination (if backend returns { current_page, data: [...] })
            if (!Array.isArray(projects) && projects && Array.isArray(projects.data)) {
              safeProjects = projects.data;
            }
            return safeProjects;
          })()
            .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
            .map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-7/12 relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                    {/* Use backend image, with fallback to Unsplash if empty */}
                    <img 
                      src={project.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'} 
                      alt={project.title} 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${idx % 2 !== 0 ? 'md:text-left' : 'md:text-right'} relative z-20`}>
                  <p className="text-indigo-600 font-mono text-sm mb-2">{project.metadata?.featured ? 'Featured Project' : 'Project'}</p>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">{project.title}</h3>
                  
                  <div className={`bg-slate-50 p-6 rounded-xl shadow-md mb-6 ${idx % 2 !== 0 ? 'mr-auto md:-mr-12' : 'ml-auto md:-ml-12'}`}>
                    <p className="text-slate-600 leading-relaxed text-left">
                      {project.description}
                    </p>
                  </div>

                  <ul className={`flex flex-wrap gap-4 mb-8 text-sm font-mono text-slate-500 ${idx % 2 !== 0 ? 'justify-start' : 'md:justify-end'}`}>
                    {project.metadata?.tech_stack?.map(tech => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  <div className={`flex items-center gap-4 ${idx % 2 !== 0 ? 'justify-start' : 'md:justify-end'}`}>
                    {project.secondary_link && (
                      <a href={project.secondary_link} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-600 transition-colors">
                        <FaGithub size={24} />
                      </a>
                    )}
                    {project.primary_link && (
                      <a href={project.primary_link} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-600 transition-colors">
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
