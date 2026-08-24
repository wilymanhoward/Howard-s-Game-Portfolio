import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectData } from './ProjectCard';
import { useNavigate } from 'react-router-dom';

interface ProjectDetailsModalProps {
    project: ProjectData | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
    const navigate = useNavigate();
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                            className="bg-[#131a26] border border-white/10 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative cursor-default max-h-[90vh] flex flex-col md:flex-row"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors backdrop-blur-md"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            {/* Image Section */}
                            <div className="md:w-1/2 h-64 md:h-auto relative bg-black">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${project.image}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#131a26] md:from-transparent to-transparent md:bg-gradient-to-r md:via-[#131a26]/20 md:to-[#131a26]"></div>
                            </div>

                            {/* Content Section */}
                            <div className="md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2">Selected Work</span>
                                <h2 className="text-4xl text-white font-bold mb-1">{project.title}</h2>
                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-xl text-slate-400 font-light">{project.role}</h3>
                                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                        <span className="text-xs text-slate-300 font-medium">
                                            {project.team ? `${project.team.length} People` : 'Solo Project'}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-6 text-slate-300 font-light leading-relaxed mb-8">
                                    {project.headline && (
                                        <h4 className="text-lg text-white font-medium italic mb-2">{project.headline}</h4>
                                    )}

                                    {project.fullDescription ? (
                                        <p>{project.fullDescription}</p>
                                    ) : (
                                        <>
                                            <p>{project.description}</p>
                                            <p>
                                                This project focuses on real-time rendering, interactive systems, and intuitive gameplay feel.
                                            </p>
                                        </>
                                    )}
                                </div>

                                {/* Tech Stack */}
                                <div className="mt-auto">
                                    <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3 text-slate-400">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200">
                                                {tag.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
                                    <button
                                        onClick={() => {
                                            if (project.id) {
                                                navigate(`/project/${project.id}`);
                                            }
                                        }}
                                        className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                    >
                                        View Case Study
                                        <span>→</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
