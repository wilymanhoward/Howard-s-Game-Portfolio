import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StoryPage from './pages/StoryPage';
import TechnicalExperiencePage from './pages/TechnicalExperiencePage';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import ScrollToTop from './components/ScrollToTop'; // We need this to reset scroll on route change

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/experience" element={<TechnicalExperiencePage />} />
        <Route path="/project/:id" element={<ProjectCaseStudy />} />
      </Routes>
    </>
  )
}

export default App
