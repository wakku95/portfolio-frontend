import { useEffect, useState } from 'react';
import { fetchPortfolioData } from './services/api';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const portfolioData = await fetchPortfolioData();
      setData(portfolioData);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Helper to extract array from Laravel pagination or normal array
  const getArray = (item) => {
    if (Array.isArray(item)) return item;
    if (item && Array.isArray(item.data)) return item.data;
    return [];
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar settings={data.settings || data.Settings || {}} />
      <main>
        <Hero settings={data.settings || data.Settings || {}} />
        <About settings={data.settings || data.Settings || {}} />
        <Skills skills={[...getArray(data.skills), ...getArray(data.Skills)]} />
        <Projects projects={[...getArray(data.projects), ...getArray(data.Projects)]} />
        <Experience 
          experience={[...getArray(data.experience), ...getArray(data.Experience)]} 
          education={[...getArray(data.education), ...getArray(data.Education)]} 
        />
      </main>
      <Footer settings={data.settings || data.Settings || {}} />
    </div>
  );
}

export default App;
