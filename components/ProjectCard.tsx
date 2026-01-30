import React from 'react';
import { ProjectIdea, Difficulty } from '../types';

interface ProjectCardProps {
  project: ProjectIdea;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getDifficultyColor = (diff: Difficulty) => {
    switch (diff) {
      case Difficulty.EASY: return 'text-green-400 border-green-400/30 bg-green-400/10';
      case Difficulty.MEDIUM: return 'text-amber-500 border-amber-500/30 bg-amber-500/10';
      case Difficulty.HARD: return 'text-red-500 border-red-500/30 bg-red-500/10';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-[#1e293b] rounded-xl border border-slate-700/50 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30 group">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors leading-tight max-w-[80%]">
          {project.title}
        </h3>
        <span className={`px-3 py-1 rounded text-xs font-bold border uppercase tracking-wide ${getDifficultyColor(project.difficulty)}`}>
          {project.difficulty}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-300 text-sm mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Why Section */}
      <div className="mb-6">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
          NEDEN YAPMALISIN?
        </p>
        <div className="border-l-2 border-slate-600 pl-4 py-1">
          <p className="text-slate-400 italic text-sm">
            "{project.why}"
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1.5 bg-[#0f172a] text-slate-300 text-xs font-medium rounded-lg border border-slate-700/50 shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;