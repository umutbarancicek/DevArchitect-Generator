import React from 'react';

const LoadingCard: React.FC = () => {
  return (
    <div className="bg-[#1e293b] rounded-xl border border-slate-700/50 p-6 shadow-xl animate-pulse h-full min-h-[300px] flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="h-6 bg-slate-700 rounded w-3/4"></div>
        <div className="h-6 bg-slate-700 rounded w-16"></div>
      </div>
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-slate-700 rounded w-full"></div>
        <div className="h-4 bg-slate-700 rounded w-5/6"></div>
        <div className="h-4 bg-slate-700 rounded w-4/6"></div>
      </div>
      <div className="mb-6 mt-auto">
        <div className="h-3 bg-slate-700 rounded w-32 mb-3"></div>
        <div className="border-l-2 border-slate-700 pl-4 py-1">
          <div className="h-12 bg-slate-700 rounded w-full"></div>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <div className="h-8 bg-slate-700 rounded w-20"></div>
        <div className="h-8 bg-slate-700 rounded w-24"></div>
        <div className="h-8 bg-slate-700 rounded w-16"></div>
      </div>
    </div>
  );
};

export default LoadingCard;