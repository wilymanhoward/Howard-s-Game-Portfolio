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

            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-glow-radial pointer-events-none z-0"></div>

            <div className="relative z-10 container mx-auto px-6 pt-16 flex flex-col items-center text-center">
                <motion.h1
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter mb-4"
                >
                    HOWARD<br />WILYMAN
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-base md:text-xl text-slate-400 font-normal tracking-widest uppercase mb-10 flex items-center gap-4"
                >
                    <span className="h-px w-8 md:w-12 bg-primary/40"></span>
                    Game Developer & Technical Artist
                    <span className="h-px w-8 md:w-12 bg-primary/40"></span>
                </motion.h2>

                <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <button
                        onClick={scrollToProjects}
                        className="h-12 px-8 rounded-lg bg-primary hover:bg-blue-600 text-white font-semibold text-base transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                    >
                        View Projects
                    </button>

                    <a
                        href="/#about"
                        onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('about');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="h-12 px-8 rounded-lg text-slate-300 hover:text-white font-medium text-base border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all flex items-center justify-center"
                    >
                        About Me
                    </a>
                </motion.div>
            </div>

            {/* Smooth Fade to Next Section */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#131a26] pointer-events-none z-5"></div>
        </section>
    );
}
