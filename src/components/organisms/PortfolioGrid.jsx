import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../molecules/ProjectCard';

const categories = ['Todos', 'Modelado 3D', 'Ilustración', 'Diseño Gráfico'];

const projects = [
    {
        id: 1,
        title: "Escultura de Elfo",
        category: "Modelado 3D",
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800",
        description: "Escultura de personaje elfo con detalles de alta fidelidad.",
        model: "/models/Elfo.glb",
        modelScale: 1.4,
        modelPosition: [0, -0.2, 0],
        links: { demo: "#" }
    },
    {
        id: 2,
        title: "Santa Claus",
        category: "Modelado 3D",
        image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&q=80&w=800",
        description: "Personaje de Santa Claus optimizado para 'La Yuky Fábrica' en Roblox.",
        model: "/models/Santa.glb",
        modelScale: 1.3,
        modelPosition: [0, -0.3, 0],
        links: { demo: "#" }
    },
    {
        id: 3,
        title: "Personaje Yuky",
        category: "Modelado 3D",
        image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=800",
        description: "Modelo del protagonista principal para el juego de Roblox 'La Yuky Fábrica de Alegría'.",
        model: "/models/YukyCharacter.glb",
        modelScale: 1.4,
        modelPosition: [0, -0.4, 0],
        links: { demo: "#" }
    },
    {
        id: 4,
        title: "Assets Yuky Fábrica",
        category: "Modelado 3D",
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
        description: "Assets de entorno y personajes para el diseño de niveles de 'La Yuky Fábrica'.",
        model: "/models/YukyFabrica.glb",
        modelScale: 0.2,
        modelPosition: [0, 0, 0],
        modelRotation: [0, 0, 0],
        links: { demo: "#" }
    },
    {
        id: 5,
        title: "Sueños de Neón",
        category: "Ilustración",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
        description: "Una serie de pinturas digitales que exploran paisajes urbanos cyberpunk.",
        links: { demo: "#" }
    },
    // Add more projects as needed
];

const PortfolioGrid = () => {
    const [activeCategory, setActiveCategory] = useState('Todos');

    const filteredProjects = activeCategory === 'Todos'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portafolio" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">TRABAJOS <span className="text-neon-blue">SELECCIONADOS</span></h2>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-border-gradient border-transparent text-white'
                                    : 'border-white/10 text-gray-400 hover:border-neon-blue/50 hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
