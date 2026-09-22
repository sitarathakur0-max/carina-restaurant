import React, { useState } from 'react';
import { Phone, MapPin, Menu as MenuIcon, X, Clock, ArrowRight } from 'lucide-react';
import { NavPage } from '../types';
import { BUSINESS_INFO } from '../data/restaurantData';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavPage; label: string; deLabel: string }[] = [
    { id: 'home', label: 'Home', deLabel: 'Startseite' },
    { id: 'about', label: 'Über uns', deLabel: 'Über uns' },
    { id: 'menu', label: 'Angebot & Menü', deLabel: 'Angebot' },
    { id: 'gallery', label: 'Impressionen', deLabel: 'Galerie' },
    { id: 'contact', label: 'Kontakt & Anfahrt', deLabel: 'Kontakt' },
  ];

  const handleNav = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E6DDD3] transition-colors">
      {/* Top micro-bar for direct contact & location */}
      <div className="bg-[#241814] text-[#FAF6F0] text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-4 text-[#D8C7B8]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#BC5434]" />
              {BUSINESS_INFO.street}, {BUSINESS_INFO.zipCode} {BUSINESS_INFO.city}
            </span>
            <span className="hidden md:inline-block text-[#55623B]">•</span>
            <span className="hidden md:flex items-center gap-1 text-[#E6DDD3]">
              <Clock className="w-3.5 h-3.5 text-[#55623B]" />
              Auskunft & Reservation per Telefon
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a
              id="header-top-phone"
              href={BUSINESS_INFO.phoneRaw}
              className="flex items-center gap-1.5 font-semibold text-[#FAF6F0] hover:text-[#BC5434] transition-colors"
              title="Carina direkt anrufen"
            >
              <Phone className="w-3.5 h-3.5 text-[#BC5434]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 md:py-4 flex items-center justify-between">
        {/* Brand identity */}
        <button
          id="nav-brand-logo"
          onClick={() => handleNav('home')}
          className="text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#BC5434] rounded-md p-1"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-serif-display text-2xl md:text-3xl tracking-tight text-[#241814] font-bold group-hover:text-[#BC5434] transition-colors">
              Carina
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#55623B] px-1.5 py-0.5 bg-[#EAE3D6] rounded">
              Luzern
            </span>
          </div>
          <p className="text-[11px] text-[#715A4F] tracking-wide font-medium">
            Restaurant & Café • Quartiertreffpunkt
          </p>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#EFE8DD]/70 p-1.5 rounded-full border border-[#E0D5C7]">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`desktop-nav-${item.id}`}
                onClick={() => handleNav(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#241814] text-[#FAF6F0] shadow-sm'
                    : 'text-[#523E34] hover:text-[#241814] hover:bg-[#E4D9CA]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu trigger */}
        <div className="flex items-center gap-3">
          <a
            id="header-cta-phone"
            href={BUSINESS_INFO.phoneRaw}
            className="hidden sm:inline-flex items-center gap-2 bg-[#BC5434] hover:bg-[#A34527] text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold shadow-sm transition-transform active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>041 240 81 25</span>
          </a>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-[#241814] bg-[#EFE8DD] hover:bg-[#E4D9CA] focus:outline-none focus:ring-2 focus:ring-[#BC5434]"
            aria-label={mobileMenuOpen ? 'Menü schliessen' : 'Menü öffnen'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-[#E0D5C7] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#241814] text-white'
                      : 'text-[#3E2D25] hover:bg-[#EFE8DD]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#BC5434]' : 'text-[#8C7B71]'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E6DDD3] space-y-2">
            <a
              id="mobile-drawer-call-btn"
              href={BUSINESS_INFO.phoneRaw}
              className="w-full flex items-center justify-center gap-2 bg-[#BC5434] text-white py-3 rounded-xl font-medium text-sm shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Anrufen: {BUSINESS_INFO.phone}</span>
            </a>
            <div className="text-center text-xs text-[#715A4F] pt-1">
              Hauptstrasse 9, 6015 Luzern
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
