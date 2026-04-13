import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav h-16' : 'bg-transparent h-20'}`}
        >
            <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
                    <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/40 text-primary">
                        <span className="material-symbols-outlined text-xl">terminal</span>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">HW</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Experience', 'Projects', 'Resume', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                if (item === 'Experience') {
                                    window.location.href = '/experience';
                                } else {
                                    // Verify we are on home page before scrolling, else redirect home first
                                    if (window.location.pathname !== '/') {
                                        window.location.href = `/#${item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase()}`;
                                    } else {
                                        scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())
                                    }
                                }
                            }}
                            className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <a
                    href="https://wa.me/60142386192"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center justify-center h-10 px-5 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded transition-colors duration-200"
                >
                    Let's Talk
                </a>

                <div className="md:hidden text-white cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="material-symbols-outlined">menu</span>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden glass-nav border-t border-white/5"
                >
                    <div className="flex flex-col p-4 gap-4">
                        {['Home', 'Projects', 'Resume', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                                className="text-slate-300 hover:text-white text-sm font-medium transition-colors text-left"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
