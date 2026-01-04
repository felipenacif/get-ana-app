
import React from 'react';

const SelfHostingSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Self-Host Anywhere
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Deploy on your own terms.
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Stop worrying about cloud outages or privacy policy changes. With ANA, you own the infrastructure. Docker, Kubernetes, or just a simple Node.js process—we support it all.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Single Docker command to get started",
              "Low resource footprint (runs on RPi 4)",
              "Easy Postgres/S3 integration",
              "Automated backup workflows"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <button className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Read self-hosting guide <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed text-indigo-300">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-1">
              <p><span className="text-slate-500"># docker-compose.yml</span></p>
              <p><span className="text-indigo-500">version:</span> '3.8'</p>
              <p><span className="text-indigo-500">services:</span></p>
              <p className="pl-4"><span className="text-indigo-500">ana:</span></p>
              <p className="pl-8"><span className="text-indigo-500">image:</span> ana/server:latest</p>
              <p className="pl-8"><span className="text-indigo-500">ports:</span></p>
              <p className="pl-12 text-slate-300">- "3000:3000"</p>
              <p className="pl-8"><span className="text-indigo-500">environment:</span></p>
              <p className="pl-12 text-slate-300">- DATABASE_URL=postgres://...</p>
              <p className="pl-12 text-slate-300">- ENCRYPTION_KEY=••••••••</p>
              <p className="pl-8"><span className="text-indigo-500">restart:</span> always</p>
              <p className="mt-4 text-emerald-400">$ docker-compose up -d</p>
              <p className="text-slate-400">Creating ana_db_1  ... <span className="text-emerald-500">done</span></p>
              <p className="text-slate-400">Creating ana_web_1 ... <span className="text-emerald-500">done</span></p>
              <p className="text-white mt-4 font-bold">ANA is running at http://localhost:3000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfHostingSection;
