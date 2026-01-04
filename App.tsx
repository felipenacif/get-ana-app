
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import EditorPreview from './components/EditorPreview';
import SelfHostingSection from './components/SelfHostingSection';
import MigrationSection from './components/MigrationSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation scrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <section id="features" className="py-24 bg-white">
          <Features />
        </section>
        <section id="editor" className="py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Focus on your ideas</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A minimal, distraction-free environment that lets you organize your life without the bloat.
              </p>
            </div>
            <EditorPreview />
          </div>
        </section>
        <section id="hosting" className="py-24 bg-white">
          <SelfHostingSection />
        </section>
        <section id="migration" className="py-24 bg-slate-900 text-white">
          <MigrationSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
