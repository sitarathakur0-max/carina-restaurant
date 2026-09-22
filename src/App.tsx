/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { NavPage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { BUSINESS_INFO } from './data/restaurantData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavPage;
      if (['home', 'about', 'menu', 'gallery', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title dynamically based on page
  useEffect(() => {
    const titles: Record<NavPage, string> = {
      home: 'Carina — Restaurant & Café Luzern | Hauptstrasse 9',
      about: 'Über uns — Carina Restaurant & Café Luzern',
      menu: 'Speise- & Getränkeangebot — Carina Luzern',
      gallery: 'Impressionen — Carina Restaurant & Café Luzern',
      contact: 'Kontakt & Anreise — Carina Luzern | Tel: 041 240 81 25',
    };
    document.title = titles[currentPage] || 'Carina — Restaurant & Café Luzern';
  }, [currentPage]);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5F0] text-[#241814] font-sans selection:bg-[#BC5434] selection:text-white">
      {/* Primary Navigation Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'menu' && <MenuPage onNavigate={handleNavigate} />}
        {currentPage === 'gallery' && <GalleryPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer Component */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick-Call Button */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40">
        <a
          id="sticky-mobile-phone-btn"
          href={BUSINESS_INFO.phoneRaw}
          className="w-full flex items-center justify-center gap-2.5 bg-[#BC5434] text-white py-3 px-4 rounded-full font-bold shadow-xl active:scale-98 transition-transform border border-white/20"
        >
          <Phone className="w-4 h-4" />
          <span>Anrufen: {BUSINESS_INFO.phone}</span>
        </a>
      </div>

      {/* Floating Scroll-to-Top Button (Desktop) */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="hidden sm:flex fixed bottom-6 right-6 z-40 bg-[#241814] hover:bg-[#BC5434] text-white p-3 rounded-full shadow-lg transition-all items-center justify-center cursor-pointer"
          aria-label="Nach oben scrollen"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
