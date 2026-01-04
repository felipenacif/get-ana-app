
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
          Your thoughts, <br />
          <span className="gradient-text">truly yours.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          The privacy-first Notion alternative. Self-host your notes, own your data, and write with a powerful WYSIWYG editor.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
            Get Started for Free
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
            View on GitHub
          </button>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 h-32 bottom-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=600" 
            alt="Team collaborating in a modern office" 
            className="rounded-2xl shadow-2xl border border-slate-200 mx-auto transform hover:scale-[1.01] transition-transform duration-700 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
