import { motion } from 'framer-motion';
import { GlowingEffect } from './ui/glowing-effect';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.png';

export default function BioSection() {
    return (
        <section id="about" className="relative py-24 bg-[#131a26] border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Column */}
                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col gap-2"
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Biography</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Technical Artist &<br />DMT Student at<br />Xiamen University Malaysia</h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="space-y-6 text-slate-300 text-lg font-light leading-relaxed"
                        >
                            <p>
                                Currently pursuing a degree in <span className="text-primary font-medium">Digital Media Technology</span> at XMUM, I operate at the intersection of technical engineering and artistic vision. As a developer specializing in Unity 3D and C#, I focus on building robust game architectures that empower creative storytelling.
                            </p>
                            <p>
                                From intricate shader development to scalable gameplay systems, I aim to bridge the gap between code and canvas to create immersive digital experiences that resonate with players.
                            </p>
                        </motion.div>

                        {/* Skills Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4"
                        >
                            <div className="p-4 rounded-lg bg-[#1a2333] border border-white/5 flex flex-col items-center text-center gap-2 group hover:border-primary/50 transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">view_in_ar</span>
                                <span className="text-white font-bold text-sm">Unity 3D</span>
                            </div>
                            <div className="p-4 rounded-lg bg-[#1a2333] border border-white/5 flex flex-col items-center text-center gap-2 group hover:border-primary/50 transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">code</span>
                                <span className="text-white font-bold text-sm">C# Expert</span>
                            </div>
                            <div className="p-4 rounded-lg bg-[#1a2333] border border-white/5 flex flex-col items-center text-center gap-2 group hover:border-primary/50 transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">gradient</span>
                                <span className="text-white font-bold text-sm">Shaders</span>
                            </div>
                            <div className="p-4 rounded-lg bg-[#1a2333] border border-white/5 flex flex-col items-center text-center gap-2 group hover:border-primary/50 transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">sports_esports</span>
                                <span className="text-white font-bold text-sm">Gameplay</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        > {/* Added closing '>' for motion.div */}
                            <div className="pt-4">
                                <Link to="/story" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group">
                                    Read full story
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                        </motion.div> {/* Added closing tag for motion.div */}
                    </div>

                    {/* Abstract Visual Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1 lg:order-2 h-[400px] lg:h-[600px] w-full flex items-center justify-center"
                    >
                        {/* Background Glow for Image */}
                        <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full transform scale-75"></div>

                        {/* 3D Wireframe Abstract Representation */}
                        <div className="relative z-10 w-full h-full rounded-2xl">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={5}
                            />
                            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-[#0f141e]" style={{ backgroundImage: `url(${profileImage})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
                                {/* Gradient overlays for seamless blending */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#131a26] via-transparent to-transparent opacity-90"></div>
                                <div className="absolute inset-0 bg-gradient-to-b from-[#131a26]/50 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#131a26]/50 via-transparent to-[#131a26]/50 opacity-60"></div>

                                {/* Overlay UI elements mimicking a game engine editor - Dots only */}
                                <div className="absolute top-4 left-4 right-4 flex justify-between opacity-70">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Smooth Transition Gradient to Next Section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        </section>
    );
}
