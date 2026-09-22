import React, { useState } from 'react';
import { MapPin, Phone, Clock, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { NavPage } from '../types';
import { BUSINESS_INFO } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showImprint, setShowImprint] = useState(false);

  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241814] text-[#EFE8DD] pt-16 pb-12 border-t-4 border-[#BC5434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Grid: Asymmetrical European layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3D2C24]">
          {/* Brand & Introduction (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif-display text-3xl font-bold text-[#FAF6F0] tracking-tight">
                Carina
              </span>
              <span className="text-xs uppercase tracking-wider text-[#BC5434] font-semibold bg-[#36241D] px-2 py-0.5 rounded">
                Luzern
              </span>
            </div>
            <p className="text-sm text-[#C9B8A9] leading-relaxed max-w-md">
              Ihr lokales Quartier-Restaurant und Café an der Hauptstrasse 9 in 6015 Luzern.
              Tagesfrische Küche, ehrlicher Kaffeegenuss und unkomplizierte Gastfreundschaft im Kanton Luzern.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#34241C] border border-[#483328] text-xs text-[#D8C7B8]">
                <ShieldCheck className="w-4 h-4 text-[#55623B]" />
                <span>Öffentliche Bewertung: 3.0 / 5 (14 Rezensionen)</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#9E8B7E]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => handleNav('home')}
                  className="text-[#D8C7B8] hover:text-[#FAF6F0] transition-colors cursor-pointer text-left"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => handleNav('about')}
                  className="text-[#D8C7B8] hover:text-[#FAF6F0] transition-colors cursor-pointer text-left"
                >
                  Über das Carina
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-menu"
                  onClick={() => handleNav('menu')}
                  className="text-[#D8C7B8] hover:text-[#FAF6F0] transition-colors cursor-pointer text-left"
                >
                  Speise- & Getränkeangebot
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-gallery"
                  onClick={() => handleNav('gallery')}
                  className="text-[#D8C7B8] hover:text-[#FAF6F0] transition-colors cursor-pointer text-left"
                >
                  Impressionen & Galerie
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => handleNav('contact')}
                  className="text-[#D8C7B8] hover:text-[#FAF6F0] transition-colors cursor-pointer text-left"
                >
                  Kontakt & Anreise
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#9E8B7E]">
              Standort & Telefon
            </h4>
            <div className="space-y-3 text-sm text-[#D8C7B8]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#BC5434] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#FAF6F0]">{BUSINESS_INFO.name}</p>
                  <p>{BUSINESS_INFO.street}</p>
                  <p>{BUSINESS_INFO.zipCode} {BUSINESS_INFO.city}, Schweiz</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#BC5434] shrink-0" />
                <div>
                  <a
                    id="footer-phone-link"
                    href={BUSINESS_INFO.phoneRaw}
                    className="font-bold text-[#FAF6F0] hover:text-[#BC5434] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{BUSINESS_INFO.phone}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </a>
                  <p className="text-xs text-[#9E8B7E]">Direkte telefonische Auskunft</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-4 h-4 text-[#55623B] shrink-0 mt-0.5" />
                <p className="text-xs text-[#A89689] leading-relaxed">
                  Für tagesaktuelle Öffnungszeiten, Speiseangebote oder Platzreservationen freuen wir uns über Ihren kurzen Anruf.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8A796E]">
          <p>© {new Date().getFullYear()} Carina Restaurant & Café • Hauptstrasse 9, 6015 Luzern</p>

          <div className="flex items-center gap-4">
            <button
              id="footer-imprint-btn"
              onClick={() => setShowImprint(true)}
              className="hover:text-[#FAF6F0] underline underline-offset-4 cursor-pointer"
            >
              Impressum & Angaben
            </button>
            <span>•</span>
            <span className="flex items-center gap-1">
              Gastlichkeit in Luzern <Heart className="w-3 h-3 text-[#BC5434] inline" />
            </span>
          </div>
        </div>
      </div>

      {/* Imprint Modal */}
      {showImprint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-[#FAF6F0] text-[#241814] rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#E0D5C7] space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif-display text-2xl font-bold">Impressum & Angaben</h3>
                <p className="text-xs text-[#6B5A51]">Angaben gemäss Schweizer Bundesgesetz</p>
              </div>
              <button
                onClick={() => setShowImprint(false)}
                className="text-xs bg-[#EAE2D5] px-2.5 py-1 rounded-md hover:bg-[#D9CEBF] font-semibold"
              >
                Schliessen
              </button>
            </div>

            <div className="space-y-3 text-sm text-[#4A3930] leading-relaxed border-t border-[#E0D5C7] pt-3">
              <p>
                <strong>Betrieb:</strong> Carina (Restaurant / Café)
              </p>
              <p>
                <strong>Adresse:</strong> Hauptstrasse 9, 6015 Luzern, Schweiz
              </p>
              <p>
                <strong>Telefon:</strong>{' '}
                <a href={BUSINESS_INFO.phoneRaw} className="text-[#BC5434] font-semibold underline">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p>
                <strong>Öffentliche Bewertung:</strong> 3.0 / 5 Sterne (14 Rezensionen)
              </p>
              <p className="text-xs text-[#7A695F] pt-2">
                Haftungshinweis: Alle Inhalte dieser Website dienen der Information über das Restaurant und Café Carina in Luzern. Für tagesaktuelle Angebote und Reservierungen gilt der direkte telefonische Kontakt.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
