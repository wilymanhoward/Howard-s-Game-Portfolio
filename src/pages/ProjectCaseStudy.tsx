import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export default function ProjectCaseStudy() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/" className="text-primary hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background-dark text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">

                {/* Back Button */}
                <Link to="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group">
                    <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Back to Projects
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Case Study</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">{project.title}</h1>
                    <p className="text-2xl text-slate-400 font-light">{project.headline || project.role}</p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-8">

                    {/* Left Column: Video/Media */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        {/* Video Player */}
                        <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group mb-8">
                            {project.gameplayVideo ? (
                                project.gameplayVideo.includes('drive.google.com') ? (
                                    <iframe
                                        src={project.gameplayVideo.replace('/view', '/preview')}
                                        className="w-full h-full"
                                        allow="autoplay"
                                        title="Project Gameplay"
                                    ></iframe>
                                ) : (
                                    <video
                                        src={project.gameplayVideo}
                                        className="w-full h-full object-cover"
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                    />
                                )
                            ) : (
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url('${project.image}')` }}
                                >
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <p className="text-white/50 italic">Gameplay Video Coming Soon</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Technologies - Moved under Video */}
                        <div className="bg-[#131a26] p-6 rounded-2xl border border-white/5">
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-xl">token</span>
                                Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                                        <span className="material-symbols-outlined text-sm text-primary">{tag.icon}</span>
                                        <span>{tag.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Overview & Meta */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="bg-[#131a26] p-8 rounded-2xl border border-white/5 h-full">
                            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Project Overview</h3>
                            <div className="prose prose-invert">
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    {project.fullDescription || project.description}
                                </p>

                                {project.team && (
                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-xl">groups</span>
                                            Team Members
                                        </h4>
                                        <div className="flex flex-col gap-3">
                                            {project.team.map((member, i) => (
                                                <div key={i} className="flex items-center gap-2 text-slate-400">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                                                    <span>{member}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section: Detailed Content Panels */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {project.contentSections ? (
                        project.contentSections.map((section, idx) => (
                            <div key={idx} className="bg-[#131a26] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4 text-primary">{section.title}</h3>
                                <ul className="space-y-4 text-slate-300">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0 text-sm">arrow_forward_ios</span>
                                            <div>
                                                {item.title && <strong className="text-white block mb-1">{item.title}</strong>}
                                                <span className="text-slate-400 text-sm leading-relaxed">{item.description}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        // Fallback Content
                        <div className="lg:col-span-3 bg-[#131a26] p-8 rounded-2xl border border-white/5">
                            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Key Features</h3>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span>Advanced Physics Interactions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span>High Fidelity Rendering Pipeline</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span>Optimized Performance</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
