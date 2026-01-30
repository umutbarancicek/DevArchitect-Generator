import React, { useState } from 'react';
import { ProjectIdea, Difficulty } from './types';
import { INITIAL_PROJECTS } from './constants';
import ProjectCard from './components/ProjectCard';
import LoadingCard from './components/LoadingCard';
import { generateProjectIdea } from './services/geminiService';
import { Sparkles, Terminal, Code2, RefreshCw } from 'lucide-react';

const App: React.FC = () => {
  const [projects, setProjects] = useState<ProjectIdea[]>(INITIAL_PROJECTS);
  const [loading, setLoading] = useState(false);
  
  // Form States
  const [role, setRole] = useState('Full Stack');
  const [techStack, setTechStack] = useState('');
  const [difficulty, setDifficulty] = useState<string>('ORTA');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newProject = await generateProjectIdea({
        role,
        techStack: techStack || undefined,
        difficulty
      });
      // Add new project to the start of the list
      setProjects(prev => [newProject, ...prev]);
    } catch (err) {
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 pb-20">
      {/* Header / Navbar */}
      <header className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-500/20">
              <Terminal size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">DevArchitect</h1>
              <p className="text-xs text-slate-400">Yazılım Mimari Şablon Oluşturucu</p>
            </div>
          </div>
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            Hakkında
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Generator Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-900/20 to-slate-900/50 rounded-2xl p-1 border border-blue-500/20">
            <div className="bg-[#1e293b]/50 backdrop-blur rounded-xl p-6 md:p-8">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Bir Sonraki Projeni Keşfet
                </h2>
                <p className="text-slate-400">
                  Yapay zeka ile seviyene ve ilgine uygun, modern mimari prensiplerini içeren proje fikirleri üret.
                </p>
              </div>

              <form onSubmit={handleGenerate} className="max-w-4xl mx-auto bg-[#0f172a] p-4 rounded-xl border border-slate-700 shadow-lg flex flex-col md:flex-row gap-4 items-center">
                
                <div className="flex-1 w-full">
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1 ml-1">Alan / Rol</label>
                  <select 
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-[#1e293b] text-white border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none"
                  >
                    <option>Full Stack Developer</option>
                    <option>Backend Developer</option>
                    <option>Frontend Developer</option>
                    <option>DevOps Engineer</option>
                    <option>Mobile Developer</option>
                  </select>
                </div>

                <div className="flex-1 w-full">
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1 ml-1">Teknoloji (Opsiyonel)</label>
                  <input 
                    type="text" 
                    placeholder="Örn: React, Go, Kafka..."
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    className="w-full bg-[#1e293b] text-white border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div className="w-full md:w-40">
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1 ml-1">Zorluk</label>
                  <select 
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full bg-[#1e293b] text-white border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none"
                  >
                    <option value="KOLAY">KOLAY</option>
                    <option value="ORTA">ORTA</option>
                    <option value="ZOR">ZOR</option>
                  </select>
                </div>

                <div className="w-full md:w-auto mt-5 md:mt-0">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full md:w-auto h-[42px] bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {loading ? <RefreshCw className="animate-spin" size={20} /> : <Sparkles size={20} />}
                    <span>Üret</span>
                  </button>
                </div>

              </form>
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <section>
          <div className="flex items-center gap-2 mb-6 text-slate-300">
            <Code2 size={20} />
            <h3 className="font-semibold text-lg">Mimari Blueprintler</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading && <LoadingCard />}
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800 mt-auto py-8 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} DevArchitect. Powered by Gemini AI.</p>
      </footer>
    </div>
  );
};

export default App;