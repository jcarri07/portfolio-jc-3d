import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold tracking-tighter"
                >
                    JC<span className="text-neon-blue">.</span>
                </motion.div>

                <div className="hidden md:flex items-center gap-8">
                    {['Portafolio', 'Sobre-Mi', 'Contacto'].map((item) => (
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
                >
                    <a
                        href="mailto:carrizalesj5@gmail.com"
                        className="px-5 py-2 rounded-full bg-border-gradient text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                    >
                        ¡Contrátame!
                    </a>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
