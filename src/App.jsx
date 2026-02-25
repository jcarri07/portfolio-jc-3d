import React from 'react';
import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import PortfolioGrid from './components/organisms/PortfolioGrid';
import ContactSection from './components/organisms/ContactSection';
import ExperienceSection from './components/organisms/ExperienceSection';
import Scene3D from './components/molecules/Scene3D';
import ModelLoader from './components/molecules/ModelLoader';
import WavingMesh from './components/molecules/WavingMesh';
import ErrorBoundary from './components/atoms/ErrorBoundary';
import { Cpu, Box, Gamepad2, PenTool } from 'lucide-react';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-neon-blue selection:text-black relative overflow-x-hidden">
      <Navbar />

      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ErrorBoundary>
          <Scene3D>
            <WavingMesh />
          </Scene3D>
        </ErrorBoundary>
      </div>

      <main className="relative z-10">
        <Hero />

        {/* Technologies Section */}
        <section className="py-24 bg-transparent relative">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-16 tracking-widest uppercase">
              Tecnologías <span className="text-neon-blue">&</span> Herramientas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'Unity 3D', icon: <Cpu className="text-neon-blue" /> },
                { name: 'Blender', icon: <Box className="text-neon-purple" /> },
                { name: 'Roblox Studio', icon: <Gamepad2 className="text-neon-blue" /> },
                { name: 'Adobe Illustrator', icon: <PenTool className="text-neon-purple" /> }
              ].map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-6 group p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl hover:border-neon-blue/50 transition-all duration-500">
                  <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(tech.icon, { size: 40 })}
                  </div>
                  <span className="text-gray-400 text-sm font-bold tracking-widest uppercase group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre-mi" className="py-24 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 uppercase">Un poco <span className="text-neon-purple">Sobre Mí</span></h2>
              <div className="space-y-6 text-gray-400 text-lg sm:text-xl leading-relaxed">
                <p>
                  Soy José Carrizales, un creador versátil que fusiona los mundos del modelado 3D, el diseño gráfico y la ilustración. Mi trabajo es impulsado por una pasión por la estética futurista y la precisión técnica.
                </p>
                <p>
                  Con años de experiencia en Blender y herramientas de diseño, creo assets que no solo son visualmente impactantes, sino también optimizados para el rendimiento en tiempo real en aplicaciones web y móviles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection />

        <PortfolioGrid />
        <ContactSection />
      </main>

      <footer className="py-10 border-t border-white/5 text-center text-gray-600 text-sm">
        Construido con React, Three.js & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
