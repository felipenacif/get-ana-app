
import React, { useState } from 'react';

const EditorPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('write');

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-w-5xl mx-auto">
      {/* Editor Header/Toolbar */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-slate-400">
          <button className="p-1.5 hover:bg-white hover:text-slate-900 rounded transition-colors"><span className="font-bold">B</span></button>
          <button className="p-1.5 hover:bg-white hover:text-slate-900 rounded transition-colors"><span className="italic">I</span></button>
          <button className="p-1.5 hover:bg-white hover:text-slate-900 rounded transition-colors"><span className="underline">U</span></button>
          <div className="w-px h-6 bg-slate-200 mx-2"></div>
          <button className="p-1.5 hover:bg-white hover:text-slate-900 rounded transition-colors">H1</button>
          <button className="p-1.5 hover:bg-white hover:text-slate-900 rounded transition-colors">H2</button>
          <button className="p-1.5 hover:bg-white hover:text-slate-900 rounded transition-colors">H3</button>
          <div className="w-px h-6 bg-slate-200 mx-2"></div>
          <button className="p-1.5 hover:bg-white hover:text-slate-900 rounded transition-colors">List</button>
          <button className="p-1.5 hover:bg-white hover:text-slate-900 rounded transition-colors">Task</button>
          <button className="p-1.5 hover:bg-white hover:text-slate-900 rounded transition-colors">Code</button>
        </div>
        <div className="flex bg-slate-200 p-1 rounded-lg">
          <button 
            onClick={() => setActiveTab('write')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeTab === 'write' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Editor
          </button>
          <button 
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeTab === 'preview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Markdown
          </button>
        </div>
      </div>

      {/* Editor Content Area */}
      <div className="p-12 min-h-[400px]">
        {activeTab === 'write' ? (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-slate-900">Project: Mars Colonization 🚀</h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              ANA allows you to combine rich text, images, and embedded blocks effortlessly. It is not just a note-taking app; it is your digital brain.
            </p>
            <div className="bg-indigo-50/50 border-l-4 border-indigo-500 p-6 rounded-r-xl italic text-indigo-900">
              "The stars are not the limit; they are the starting point." — ANA Team
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-800">Launch Checklist</h3>
              <div className="flex items-center gap-3 text-slate-700">
                <input type="checkbox" checked readOnly className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <span>Finalize orbital trajectories</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <input type="checkbox" checked readOnly className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <span>Provision self-hosted ANA nodes for the colony</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <span>Select initial landing site on Olympus Mons</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="font-mono text-sm text-slate-600 bg-slate-50 p-6 rounded-xl overflow-x-auto whitespace-pre">
{`# Project: Mars Colonization 🚀

ANA allows you to combine rich text, images, and embedded blocks effortlessly. It is not just a note-taking app; it is your digital brain.

> "The stars are not the limit; they are the starting point." — ANA Team

### Launch Checklist
- [x] Finalize orbital trajectories
- [x] Provision self-hosted ANA nodes for the colony
- [ ] Select initial landing site on Olympus Mons`}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorPreview;
