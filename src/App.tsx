import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PolicyModal } from './components/PolicyModal';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReservationsPage } from './pages/ReservationsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [policyModal, setPolicyModal] = useState<'privacy' | 'terms' | null>(null);

  // Initialize and listen to URL hash changes for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'menu', 'about', 'gallery', 'reservations', 'contact'].includes(hash)) {
        setCurrentPage(hash as Page);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update page title and hash on navigation
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;

    // Page title sync for SEO
    const titles: Record<Page, string> = {
      home: 'OneTen | Contemporary Indian Restaurant in Ahmedabad',
      menu: 'Menu | OneTen – Contemporary Indian Cuisine & Tandoor',
      about: 'Our Story & Philosophy | OneTen Ahmedabad',
      gallery: 'Visual Gallery | OneTen Contemporary Dining',
      reservations: 'Reserve a Table | OneTen Ahmedabad',
      contact: 'Contact & Location | OneTen Ahmedabad',
    };
    document.title = titles[page];
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'menu':
        return <MenuPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage />;
      case 'reservations':
        return <ReservationsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#f4efe4] flex flex-col font-sans selection:bg-[#e05326] selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main View Area */}
      <main id="main-content" className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Premium Dark Footer */}
      <Footer onNavigate={handleNavigate} onOpenPolicy={(type) => setPolicyModal(type)} />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />

      {/* Policy Modal */}
      <PolicyModal type={policyModal} onClose={() => setPolicyModal(null)} />
    </div>
  );
}
