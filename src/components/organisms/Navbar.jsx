import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-lg sm:text-xl font-bold tracking-tighter"
                >
                    JC<span className="text-neon-blue">.</span>
                </motion.div>

                <div className="hidden md:flex items-center gap-8">
                    {['Portafolio', 'Experiencia', 'Sobre-Mi', 'Contacto'].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm font-medium text-gray-400 hover:text-neon-blue transition-colors"
                        >
                            {item.replace('-', ' ')}
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-shrink-0"
                >
                    <a
                        href="mailto:carrizalesj5@gmail.com"
                        className="px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full bg-border-gradient text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all inline-block whitespace-nowrap shadow-lg shadow-neon-blue/10"
                    >
                        ¡Contrátame!
                    </a>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
