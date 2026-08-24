import { motion } from 'framer-motion';
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

                        {/* Core Skills Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2"
                        >
                            {[
                                { title: 'Unity 3D', desc: 'Game Engine' },
                                { title: 'C#', desc: 'Core Architecture' },
                                { title: 'HLSL / Shaders', desc: 'Technical Art' },
                                { title: 'Gameplay', desc: 'Systems & Logic' }
                            ].map((skill, i) => (
                                <div key={i} className="p-3.5 rounded-xl bg-[#1a2333]/70 border border-white/5 flex flex-col hover:border-primary/40 transition-colors">
                                    <span className="text-white font-semibold text-sm">{skill.title}</span>
                                    <span className="text-slate-400 text-xs mt-0.5">{skill.desc}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="pt-2">
                                <Link to="/story" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors group text-sm">
                                    Read full journey & story
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Portrait Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative order-1 lg:order-2 h-[420px] lg:h-[560px] w-full flex items-center justify-center"
                    >
                        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0f141e]">
                            <div
                                className="w-full h-full bg-cover bg-top"
                                style={{ backgroundImage: `url(${profileImage})` }}
                            >
                                {/* Gradient overlays for seamless blending */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#131a26] via-transparent to-transparent opacity-80"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Smooth Transition Gradient to Next Section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        </section>
    );
}
