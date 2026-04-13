import { useRef } from 'react';
import { DotScreenShader } from './ui/dot-shader-background';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const heroRef = useRef<any>(null);

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cinematic-gradient">
            {/* Shader Background */}
            <div className="absolute inset-0 z-0">
                <DotScreenShader eventSource={heroRef} />
            </div>
            {/* Atmospheric Effects */}
            <div className="absolute inset-0 bg-glow-radial pointer-events-none z-0"></div>
            <motion.div
                initial={{ opacity: 0, rotate: 20, x: -50 }}
                animate={{ opacity: 1, rotate: 25, x: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="light-ray"
            ></motion.div>
            <motion.div
                initial={{ opacity: 0, rotate: 20 }}
                animate={{ opacity: 0.5, rotate: 25 }}
                transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
                className="light-ray"
                style={{ left: '60%', width: '100px' }}
            ></motion.div>

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative z-10 container mx-auto px-6 pt-20 flex flex-col items-center text-center pointer-events-none">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm pointer-events-auto"
                >
                    <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Available for hire</span>
                </motion.div>

                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter mb-4 hero-glow-text pointer-events-auto"
                >
                    HOWARD<br />WILYMAN
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-2xl text-slate-400 font-light tracking-widest uppercase mb-10 flex items-center gap-4 pointer-events-auto"
                >
                    <span className="h-[1px] w-8 md:w-12 bg-primary/50"></span>
                    Game Developer | Unity Specialist
                    <span className="h-[1px] w-8 md:w-12 bg-primary/50"></span>
                </motion.h2>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
                >
                    <button
                        onClick={scrollToProjects}
                        className="cta-glass h-14 px-8 rounded-lg text-white font-bold text-lg tracking-wide flex items-center gap-2 group"
                    >
                        <span className="material-symbols-outlined group-hover:animate-bounce">arrow_downward</span>
                        View Projects
                    </button>

                    <button className="h-14 px-8 rounded-lg text-slate-300 hover:text-white font-medium text-lg tracking-wide border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined">description</span>
                        Resume
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 z-20"
            >
                <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
            </motion.div>

            {/* Smooth Fade to Next Section */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-[#131a26] pointer-events-none z-5"></div>
        </section>
    );
}
