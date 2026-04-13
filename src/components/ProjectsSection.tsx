import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard, { type ProjectData } from './ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';
import { projects } from '../data/projects';

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [filter, setFilter] = useState('All');
    const [visibleCount, setVisibleCount] = useState(6);
    const filters = ['All', 'PC', 'Console', 'Mobile', 'VR'];

    // Reset visible count when filter changes
    // eslint-disable-next-line
    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.tags.some(tag => tag.label === filter);
    });

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMore = visibleCount < filteredProjects.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    return (
        <section id="projects" className="py-24 bg-background-dark min-h-screen relative">
            {/* Smooth Transition from Previous Section */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
            <div className="max-w-[1100px] mx-auto px-6 flex flex-col gap-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4"
                >
                    <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">Selected Works</h2>
                    <p className="text-[#90a4cb] text-lg max-w-2xl font-body font-light">
                        A curated collection of professional projects, technical demos, and game jams showcasing expertise in gameplay programming and engine architecture.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="border-b border-[#222f49]">
                    <div className="flex overflow-x-auto gap-8 no-scrollbar">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => {
                                    setFilter(f);
                                    setVisibleCount(6);
                                }}
                                className={`group flex flex-col items-center justify-center border-b-[3px] pb-3 min-w-fit px-1 transition-colors ${filter === f ? 'border-primary' : 'border-transparent hover:border-[#314368]'}`}
                            >
                                <span className={`${filter === f ? 'text-white' : 'text-[#90a4cb] group-hover:text-white'} text-sm font-bold tracking-wide transition-colors`}>{f}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleProjects.map((project, index) => (
                        <div key={index} onClick={() => setSelectedProject(project)}>
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>

                <ProjectDetailsModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />

                {/* Load More Button */}
                {hasMore && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-center py-8"
                    >
                        <button
                            onClick={handleLoadMore}
                            className="bg-[#222f49] hover:bg-primary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2"
                        >
                            <span>Load More Projects</span>
                            <span className="material-symbols-outlined text-sm">expand_more</span>
                        </button>
                    </motion.div>
                )}

            </div>
        </section>
    );
}
