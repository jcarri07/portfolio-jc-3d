import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Target, Layers } from 'lucide-react';

const ExperienceCard = ({ project, company, year, role, tech, impact, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative flex flex-col h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 sm:p-10 hover:border-white/20 transition-all duration-500"
        >
            {/* Background Glow */}
            <div className={`absolute -inset-2 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-[2.5rem]`} />

            {/* Header */}
            <div className="relative mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase leading-none">
                        {project}
                    </h3>
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full border border-white/10 w-fit">
                        <Calendar size={14} className="text-neon-blue" />
                        <span className="text-[10px] sm:text-xs font-black tracking-widest text-white/70">{year}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-neon-blue font-bold tracking-widest text-xs uppercase">
                    <Briefcase size={14} />
                    <span>{company}</span>
                </div>
            </div>

            {/* Content Body */}
            <div className="relative space-y-8 flex-1">
                {/* Role */}
                <div className="grid grid-cols-[1rem_1fr] gap-4">
                    <div className="h-full w-[1px] bg-gradient-to-b from-neon-blue to-transparent mt-2" />
                    <div>
                        <span className="block text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-2">Rol</span>
                        <p className="text-white text-lg font-medium">{role}</p>
                    </div>
                </div>

                {/* Tech */}
                <div className="grid grid-cols-[1rem_1fr] gap-4">
                    <div className="h-full w-[1px] bg-gradient-to-b from-neon-purple to-transparent mt-2" />
                    <div>
                        <span className="block text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-2">Tecnologías</span>
                        <div className="flex flex-wrap gap-2">
                            {tech.split(',').map((t) => (
                                <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300">
                                    {t.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Impact */}
                <div className="grid grid-cols-[1rem_1fr] gap-4">
                    <div className="h-full w-[1px] bg-gradient-to-b from-white/20 to-transparent mt-2" />
                    <div>
                        <span className="block text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-2 text-neon-blue">Impacto & Logros</span>
                        <p className="text-gray-400 text-sm leading-relaxed sm:text-base">
                            {impact}
                        </p>
                    </div>
                </div>
            </div>

            {/* Floating Decorative Icon */}
            <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={120} />
            </div>
        </motion.div>
    );
};

const ExperienceSection = () => {
    const experiences = [
        {
            project: "Simulador Naval ABAE",
            company: "Agencia Bolivariana para Actividades Espaciales",
            year: "2019",
            role: "Programador Unity & Modelador 3D",
            tech: "Unity, C#, Blender",
            impact: "Desarrollo técnico y visual de un simulador de alta precisión para la Agencia Bolivariana para Actividades Espaciales, integrando mecánicas navales complejas.",
            color: "from-neon-blue to-transparent"
        },
        {
            project: "Yuky: Fábrica de la Alegría",
            company: "Quantic Solutions & Polar",
            year: "2025",
            role: "Modelador y Diseñador 3D",
            tech: "Unity, Roblox, Blender",
            impact: "Creación integral de personajes y entornos (environments) para una plataforma de juegos en Roblox, enfocada en branding interactivo.",
            color: "from-neon-purple to-transparent"
        }
    ];

    return (
        <section id="experiencia" className="py-32 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-neon-blue font-black tracking-[0.3em] uppercase text-xs mb-4"
                    >
                        Trayectoria Profesional
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-6xl font-black text-white uppercase leading-none"
                    >
                        EXPERIENCIA <span className="text-neon-purple">DESTACADA</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={exp.project} {...exp} />
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default ExperienceSection;
