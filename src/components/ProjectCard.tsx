import { motion } from 'framer-motion';

export interface ProjectData {
    id?: string;
    title: string;
    role: string;
    description: string;
    image: string;
    tags: { icon: string; label: string }[];
    headline?: string;
    modalDescription?: string;
    fullDescription?: string;
    team?: string[];
    contentSections?: {
        title: string;
        items: {
            title?: string;
            description: string;
        }[];
    }[];
}

interface ProjectCardProps {
    project: ProjectData;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer bg-[#1a2333] border border-[#222f49] hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10"
        >
            {/* Team Size Badge */}
            <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg">
                <span className="material-symbols-outlined text-xs text-primary">groups</span>
                <span className="text-[10px] uppercase font-bold text-white tracking-wider">
                    {project.team ? `${project.team.length} People` : 'Solo'}
                </span>
            </div>

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
            >
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
                <div className="flex flex-col gap-2">
                    <h3 className="text-white text-2xl font-bold leading-tight">{project.title}</h3>
                    <p className="text-primary font-bold text-sm uppercase tracking-wider">{project.role}</p>
                    <p className="text-gray-400 text-xs font-body line-clamp-2 mb-3">{project.description}</p>

                    <div className="flex gap-3 mt-2 border-t border-white/10 pt-3">
                        {project.tags.map((tag, i) => (
                            <div key={i} className="flex items-center gap-1 text-white/80" title={tag.label}>
                                <span className="material-symbols-outlined text-[20px]">{tag.icon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Default Title Label (Visible when not hovered on mobile, or hints content) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 lg:hidden">
                <p className="text-white font-bold">{project.title}</p>
            </div>
        </motion.div>
    );
}
