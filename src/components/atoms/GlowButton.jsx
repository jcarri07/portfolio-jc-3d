import React from 'react';
import { motion } from 'framer-motion';

const GlowButton = ({ children, onClick, className = "" }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`relative group px-6 py-3 font-semibold text-white transition-all duration-300 ${className}`}
        >
            <div className="absolute inset-0 bg-border-gradient rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative px-6 py-3 bg-black rounded-lg border border-neon-blue group-hover:border-neon-purple transition-all duration-300">
                {children}
            </div>
        </motion.button>
    );
};

export default GlowButton;
