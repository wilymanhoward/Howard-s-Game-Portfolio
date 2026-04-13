import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Skill {
    name: string;
    icon: string;
    description: string;
    level: number; // 0 to 100
}

const skills: Skill[] = [
    { name: "Unity", icon: "view_in_ar", description: "Advanced game logic, physics, and shader graph.", level: 95 },
    { name: "C#", icon: "code", description: "Scripting architecture, optimization, and editor tools.", level: 95 },
    { name: "C++", icon: "memory", description: "Engine systems and performance-critical subsystems.", level: 80 },
    { name: "C", icon: "terminal", description: "Low-level memory management and hardware interaction.", level: 75 },
    { name: "Javascript", icon: "javascript", description: "Web interactivity and logic.", level: 85 },
    { name: "React.js", icon: "html", description: "Modern UI development and component state management.", level: 80 },
    { name: "Python", icon: "data_object", description: "Automation, pipeline tools, and data processing.", level: 70 },
    { name: "Autodesk Maya", icon: "3d_rotation", description: "3D modeling, rigging, and animation pipelines.", level: 75 },
    { name: "Adobe Animate", icon: "animation", description: "2D vector animation and motion graphics.", level: 70 },
];

export default function TechnicalExperiencePage() {
    return (
        <div className="bg-background-dark min-h-screen text-white font-display overflow-x-hidden">
            {/* Navigation Overlay */}
            <div className="fixed top-0 left-0 p-6 z-50">
                <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
                    <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Back
                </Link>
            </div>

            <div className="container mx-auto px-6 py-20 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6">
                        TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">ARSENAL</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A breakdown of my proficiency across various languages, engines, and creative tools.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-[#131a26] border border-white/5 p-6 rounded-2xl group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                                        <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">{skill.icon}</span>
                                    </div>
                                    <span className="text-2xl font-bold opacity-10 font-mono absolute top-4 right-4">{String(index + 1).padStart(2, '0')}</span>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{skill.name}</h3>
                                    <p className="text-slate-400 text-sm h-10">{skill.description}</p>
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-2">
                                    <div className="flex justify-between text-xs text-slate-500 mb-1 font-mono uppercase">
                                        <span>Proficiency</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + (index * 0.1), duration: 1, ease: "easeOut" }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
            </div>
        </div>
    );
}
