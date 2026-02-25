import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Linkedin, MapPin } from 'lucide-react';
import GlowButton from '../atoms/GlowButton';

const ContactSection = () => {
    const contacts = [
        {
            icon: <MessageSquare className="text-neon-blue" />,
            label: "WhatsApp",
            value: "+58 414 400 1564",
            link: "https://wa.me/584144001564",
        },
        {
            icon: <Mail className="text-neon-purple" />,
            label: "Email",
            value: "carrizalesj5@gmail.com",
            link: "mailto:carrizalesj5@gmail.com",
        },
        {
            icon: <Linkedin className="text-neon-blue" />,
            label: "LinkedIn",
            value: "josé-carrizales-b31b71186",
            link: "https://www.linkedin.com/in/jos%C3%A9-carrizales-b31b71186",
        }
    ];

    return (
        <section id="contacto" className="py-24 bg-transparent relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Ponte en <span className="text-transparent bg-clip-text bg-border-gradient">CONTACTO</span></h2>
                        <p className="text-gray-400 text-lg">¿Listo para dar vida a tu visión? Colaboremos en tu próximo gran proyecto.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contacts.map((contact, index) => (
                            <motion.a
                                key={contact.label}
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex flex-col items-center text-center hover:border-neon-blue/50 transition-all duration-300"
                            >
                                <div className="mb-6 p-4 bg-black rounded-full border border-white/5 group-hover:scale-110 transition-transform">
                                    {contact.icon}
                                </div>
                                <h3 className="text-white font-bold mb-2">{contact.label}</h3>
                                <p className="text-gray-400 text-sm">{contact.value}</p>
                            </motion.a>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-gray-500 text-sm">© 2026 José Carrizales. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
