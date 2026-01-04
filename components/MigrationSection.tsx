
import React from 'react';

const MigrationSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Move from anywhere.</h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Coming from Notion, Obsidian, or Evernote? Our one-click importer converts your Markdown files into ANA pages seamlessly.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex flex-col items-center gap-4 group">
          <div className="w-24 h-24 rounded-3xl bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors border border-slate-700">
             <span className="text-2xl font-bold opacity-50">.md</span>
          </div>
          <span className="text-slate-500 font-medium">Your Files</span>
        </div>

        <div className="hidden md:flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-12 bg-indigo-500/30"></div>
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
            <div className="h-0.5 w-12 bg-indigo-500/30"></div>
          </div>
          <span className="text-indigo-400 text-xs font-mono uppercase tracking-widest mt-2">Conversion</span>
        </div>

        <div className="flex flex-col items-center gap-4 group">
          <div className="w-24 h-24 rounded-3xl overflow-hidden bg-white flex items-center justify-center group-hover:scale-105 transition-all shadow-2xl shadow-indigo-500/40 border-4 border-indigo-500/10">
            <img 
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&q=80&w=200&h=200" 
              alt="ANA Destination" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-medium">ANA Pages</span>
        </div>
      </div>
      
      <div className="mt-20 text-center">
        <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center gap-2">
             <span className="text-3xl font-bold text-white">1s</span>
             <span className="text-sm text-slate-500">Import Speed</span>
          </div>
          <div className="flex flex-col items-center gap-2">
             <span className="text-3xl font-bold text-white">100%</span>
             <span className="text-sm text-slate-500">Asset Recovery</span>
          </div>
          <div className="flex flex-col items-center gap-2">
             <span className="text-3xl font-bold text-white">0</span>
             <span className="text-sm text-slate-500">Data Loss</span>
          </div>
          <div className="flex flex-col items-center gap-2">
             <span className="text-3xl font-bold text-white">Free</span>
             <span className="text-sm text-slate-500">Forever</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationSection;
