import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Box as CubeIcon } from 'lucide-react';
import Scene3D from './Scene3D';
import ModelLoader from './ModelLoader';
import ErrorBoundary from '../atoms/ErrorBoundary';

const ProjectCard = ({ title, category, image, description, links = {}, model, modelScale = 1.5, modelPosition = [0, 0, 0], modelRotation = [0, 0, 0] }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-neon-blue/50 transition-all duration-500 shadow-2xl"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Image/Model Container */}
            <div className="relative h-64 overflow-hidden">
                {model ? (
                    <div className="w-full h-full bg-black">
                        <ErrorBoundary>
                            <Scene3D>
                                <ModelLoader url={model} scale={modelScale} position={modelPosition} rotation={modelRotation} />
                            </Scene3D>
                        </ErrorBoundary>
                    </div>
                ) : (
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                )}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-xs font-medium text-neon-blue rounded-full flex items-center gap-1">
                        {model && <CubeIcon size={12} />}
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center gap-4">
                    {links.github && (
                        <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    )}
                    {links.demo && (
                        <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            {/* Border Gradient Overlay */}
            <div className="absolute inset-0 border-2 border-transparent bg-border-gradient opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
        </motion.div>
    );
};

export default ProjectCard;
