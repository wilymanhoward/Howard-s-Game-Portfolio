import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
    return (
        <footer id="contact" className="bg-[#0a0e17] text-white border-t border-white/5 py-12">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-500 text-sm">
                    © 2024 Howard Wilyman. Crafted with <span className="text-primary">Unity</span> & Passion.
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://www.instagram.com/howardd_wilymann" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Instagram">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://wa.me/60142386192" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="WhatsApp">
                        <FaWhatsapp size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/howard-wilyman-595833297" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="LinkedIn">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="mailto:contact@example.com" className="text-slate-400 hover:text-white transition-colors" title="Email">
                        <FaEnvelope size={24} />
                    </a>
                    <a href="https://github.com/wilymanhoward" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
