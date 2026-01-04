
import React from 'react';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">ANA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
          <a href="#editor" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Editor</a>
          <a href="#hosting" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Self-Hosting</a>
          <a href="#migration" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Migration</a>
        </div>

        <div>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-indigo-500/20">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
