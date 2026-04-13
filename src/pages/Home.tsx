import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BioSection from '../components/BioSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import ScrollExpansionDemo from '../components/ScrollExpansionDemo';

export default function Home() {
    return (
        <div className="bg-background-dark min-h-screen text-white font-display">
            <Navbar />
            <HeroSection />
            <BioSection />
            <ScrollExpansionDemo />
            <ProjectsSection />
            <ContactSection />
        </div>
    )
}
