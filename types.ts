export enum Difficulty {
  EASY = 'KOLAY',
  MEDIUM = 'ORTA',
  HARD = 'ZOR'
}

export interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  why: string; // The "Neden Yapmalısın?" section
  tags: string[];
  difficulty: Difficulty;
}

export interface GeneratorParams {
  role: string; // e.g., Backend, Frontend, DevOps
  techStack?: string; // e.g., .NET, React, Go
  difficulty: string;
}