
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">ANA</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
              Another Notion Clone. Built for speed, privacy, and control.
              The last notes app you'll ever need.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Editor</a></li>
              <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Self-Hosting Guide</a></li>
              <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">API Reference</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} ANA - Another Notion Clone. All rights reserved.</p>
          <div className="flex gap-6">
            {/* Social Icons Mockup */}
            <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
            <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
            <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
