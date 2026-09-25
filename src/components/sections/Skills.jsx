import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  const safeSkills = Array.isArray(skills) ? skills : [];
  const categories = [...new Set(safeSkills.map(s => s.metadata?.category || 'Other'))];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Technical Skills</h2>
          <div className="h-px bg-slate-300 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((category, catIdx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6">{category}</h3>
              <div className="space-y-6">
                {(Array.isArray(skills) ? skills : [])
                  .filter(s => (s.metadata?.category || 'Other') === category)
                  .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
                  .map((skill, idx) => (
                    <div key={skill.id} className="relative">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-700">{skill.title}</span>
                        <span className="text-slate-500 text-sm">{skill.metadata?.proficiency}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.metadata?.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
