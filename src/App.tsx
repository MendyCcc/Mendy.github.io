import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

type PageType = 'home' | 'work' | 'project' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [projectSlug, setProjectSlug] = useState<string>('');

  const handleNavigate = (page: string, slug?: string) => {
    setCurrentPage(page as PageType);
    if (slug) {
      setProjectSlug(slug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage + projectSlug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'work' && <WorkPage onNavigate={handleNavigate} />}
          {currentPage === 'project' && (
            <ProjectDetailPage projectSlug={projectSlug} onNavigate={handleNavigate} />
          )}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'contact' && <ContactPage />}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
