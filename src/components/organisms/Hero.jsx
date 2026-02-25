import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from '../molecules/Scene3D';
import WavingMesh from '../molecules/WavingMesh';
import GlowButton from '../atoms/GlowButton';
import { ArrowDown } from 'lucide-react';
import ErrorBoundary from '../atoms/ErrorBoundary';

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-neon-blue font-bold tracking-widest uppercase mb-4 text-sm sm:text-base">
                        Modelador 3D • Diseñador Gráfico • Ilustrador
                    </h2>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                        JOSÉ <span className="text-transparent bg-clip-text bg-border-gradient">CARRIZALES</span>
                    </h1>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Creando experiencias digitales inmersivas a través del modelado 3D de alta fidelidad y el diseño gráfico de vanguardia.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <GlowButton onClick={() => document.getElementById('portafolio').scrollIntoView({ behavior: 'smooth' })}>
                            Ver Portafolio
                        </GlowButton>
                        <GlowButton
                            className="border-white/20"
                            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contáctame
                        </GlowButton>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Desliza para explorar</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown size={20} className="text-neon-blue" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
