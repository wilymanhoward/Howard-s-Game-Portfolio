import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function StoryPage() {
    return (
        <div className="bg-background-dark min-h-screen text-white font-display overflow-x-hidden">
            <div className="container mx-auto px-6 py-20 max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors mb-8 group">
                        <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Portfolio
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">ORIGIN</span><br />STORY
                    </h1>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="space-y-12 text-slate-300 text-lg md:text-xl font-light leading-relaxed"
                >
                    {/* The Origin Story */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">THE ORIGIN STORY</h3>
                        <p>
                            It started with a single line of code and a pixel moving across a screen. My journey into game development wasn’t just about playing games; it was about understanding the magic behind them. As a student at <span className="text-primary font-medium">Xiamen University Malaysia</span>, majoring in Digital Media Technology, I have dedicated my academic career to deconstructing that magic and rebuilding it through code and design.
                        </p>
                    </div>

                    <div className="h-px w-24 bg-primary/30"></div>

                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                        <div className="space-y-8">
                            <div className="border-l-2 border-primary/30 pl-6 relative">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background-dark"></div>
                                <h4 className="text-xl text-white font-bold">Xiamen University Malaysia</h4>
                                <p className="text-primary font-medium mb-1">Major: Digital Media Technology</p>
                                <p className="text-sm text-slate-400">Expected Graduation: 2027</p>
                            </div>
                            <div className="border-l-2 border-primary/30 pl-6 relative">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600 border-4 border-background-dark"></div>
                                <h4 className="text-xl text-white font-bold">Chandra Kumala Highschool</h4>
                                <p className="text-sm text-slate-400">Graduated: 2023</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-24 bg-primary/30"></div>

                    {/* The Technical Artist */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">The Technical Artist</h3>
                        <p className="mb-6">
                            I realized early on that the most compelling games exist where rigorous engineering meets unbridled creativity. I have spent years mastering <span className="text-primary font-medium">Unity 3D</span> and <span className="text-primary font-medium">C#</span>, not just to build mechanics, but to build worlds. My fascination with shaders began when I wanted to render water that felt wet and light that felt alive—a pursuit that led me deep into the technical side of visual fidelity.
                        </p>
                        <p>
                            Whether I am developing a VR simulation of a traditional Indonesian "warteg" food stall or engineering the core gameplay for a pirate-themed adventure like <span className="text-white italic">Sea Vagabond</span>, my focus remains on creating seamless, immersive interactions.
                        </p>
                    </div>

                    <div className="h-px w-24 bg-primary/30"></div>

                    {/* Beyond the Screen */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Beyond the Screen</h3>
                        <p>
                            My passion for digital media extends into the real world. At XMUM, I serve as the <span className="text-primary font-medium">Head of Photography and Videography</span> for the PPI club. Leading a team to document university milestones and revitalizing our digital presence has taught me that every frame tells a story—a principle I bring into my game architecture. From non-linear editing to complex 3D modeling in Autodesk Maya, I view every tool as a way to enhance the narrative experience.
                        </p>
                    </div>

                    <div className="h-px w-24 bg-primary/30"></div>

                    {/* The Mission */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">The Mission</h3>
                        <p>
                            Today, I operate at the intersection of technical engineering and artistic vision. I don’t just write scripts; I <span className="text-white font-medium">engineer feelings, moments, and cinematic gameplay loops</span>. My goal is to continue pushing the boundaries of what is possible in digital media, creating experiences that are as technically robust as they are emotionally resonant.
                        </p>
                    </div>

                    <div className="mt-16 p-8 rounded-2xl bg-[#131a26] border border-white/5">
                        <h4 className="text-xl font-bold text-white mb-2">Let's Build Something Legendary</h4>
                        <p className="mb-6 text-sm">Open for collaboration on ambitious Unity projects.</p>
                        <a href="https://wa.me/60142386192" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 transition-colors">
                            Contact Me on WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[100px] rounded-full mix-blend-screen"></div>
            </div>
        </div>
    );
}
