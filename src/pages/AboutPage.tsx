import React from 'react';
import { MapPin, Phone, Coffee, Heart, CheckCircle2, ChevronRight, Users, Sparkles } from 'lucide-react';
import { NavPage } from '../types';
import { BUSINESS_INFO } from '../data/restaurantData';
import { RatingBadge } from '../components/RatingBadge';

interface AboutPageProps {
  onNavigate: (page: NavPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 md:space-y-20 pb-20 max-w-7xl mx-auto px-4 sm:px-8 pt-6 md:pt-10">
      {/* 1. EDITORIAL INTRO HEADER */}
      <section className="max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D4] border border-[#D9CEBF] text-xs font-semibold text-[#55623B]">
          <span>Über Carina</span>
          <span>•</span>
          <span>Luzern</span>
        </div>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#241814] leading-tight">
          Ein Stück Luzerner Quartierkultur an der Hauptstrasse 9.
        </h1>
        <p className="text-base sm:text-lg text-[#523E34] leading-relaxed">
          Das Restaurant &amp; Café Carina steht für bodenständige Gastfreundschaft ohne Allüren.
          Als traditionsbewusster Treffpunkt im Quartier verbinden wir den morgendlichen Kaffee
          mit herzhaften Mittagsmenüs und einer entspannten Atmosphäre für Jung und Alt.
        </p>
      </section>

      {/* 2. OFFSET VISUAL & STORY SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden border-2 border-[#D9CEBF] shadow-md bg-[#FAF6F0]">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
              alt="Helle, einladende Gaststube im Restaurant Carina"
              className="w-full h-80 sm:h-96 object-cover object-center"
            />
          </div>
          <div className="mt-4 p-4 bg-[#F2ECE2] rounded-2xl border border-[#E0D5C7] text-xs text-[#6B5A51] flex items-center gap-3">
            <MapPin className="w-4 h-4 text-[#BC5434] shrink-0" />
            <span>Hauptstrasse 9, 6015 Luzern — Gut erreichbar im Westen von Luzern.</span>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#BC5434]">
            Unsere Philosophie
          </span>
          <h2 className="font-serif-display text-3xl font-bold text-[#241814]">
            Unkompliziert, herzlich und nah am Gast.
          </h2>
          <p className="text-sm text-[#523E34] leading-relaxed">
            In einer immer hektischeren Welt sind Quartier-Lokale wichtige Ankerpunkte des sozialen Zusammenlebens.
            Im Carina pflegen wir den persönlichen Austausch: Ob auf einen schnellen Ristretto an der Theke, ein
            ausgiebiges Tagesmenü mit Arbeitskollegen oder einen gemütlichen Nachmittagskaffee mit Zeitung.
          </p>
          <p className="text-sm text-[#523E34] leading-relaxed">
            Wir verzichten bewusst auf gekünstelte Trends und konzentrieren uns auf das Wesentliche: frische Zutaten,
            sorgfältige Zubereitung und ein ehrliches Lächeln im Service.
          </p>

          <div className="pt-2">
            <a
              id="about-call-inquiry-btn"
              href={BUSINESS_INFO.phoneRaw}
              className="inline-flex items-center gap-2 bg-[#BC5434] hover:bg-[#A34527] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Fragen? 041 240 81 25 anrufen</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. FOUR PILLARS OF CARINA */}
      <section className="bg-[#FAF6F0] border border-[#E0D5C7] rounded-3xl p-6 sm:p-10">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#55623B]">
            Was uns auszeichnet
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#241814] mt-1">
            Werte, die unser Haus prägen
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#F2ECE2] p-6 rounded-2xl border border-[#E0D5C7] space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#E4D9C9] flex items-center justify-center text-[#BC5434]">
              <Users className="w-4 h-4" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#241814]">
              Quartierverbundenheit
            </h3>
            <p className="text-xs text-[#6B5A51] leading-relaxed">
              Verwurzelt im Stadtteil 6015 Luzern sind wir ein Treffpunkt für Anwohner, Gewerbetreibende und Vorbeigehende.
            </p>
          </div>

          <div className="bg-[#F2ECE2] p-6 rounded-2xl border border-[#E0D5C7] space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#E4D9C9] flex items-center justify-center text-[#55623B]">
              <Coffee className="w-4 h-4" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#241814]">
              Ehrliche Kaffeekultur
            </h3>
            <p className="text-xs text-[#6B5A51] leading-relaxed">
              Vom kräftigen Espresso bis zur traditionellen Schweizer Schale bereiten wir jede Tasse mit Sorgfalt zu.
            </p>
          </div>

          <div className="bg-[#F2ECE2] p-6 rounded-2xl border border-[#E0D5C7] space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#E4D9C9] flex items-center justify-center text-[#BC5434]">
              <Heart className="w-4 h-4" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#241814]">
              Persönliche Betreuung
            </h3>
            <p className="text-xs text-[#6B5A51] leading-relaxed">
              Bei uns sind Sie Gast, keine Nummer. Wir stehen Ihnen gerne persönlich mit Rat und Tat zur Seite.
            </p>
          </div>
        </div>
      </section>

      {/* 4. REPUTATION & REAL RATINGS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#55623B]">
            Transparenz &amp; Gästestimmen
          </span>
          <h2 className="font-serif-display text-3xl font-bold text-[#241814]">
            Ehrliche Bewertungen, ehrliche Gastronomie
          </h2>
          <p className="text-sm text-[#523E34] leading-relaxed">
            Auf Bewertungsportalen verzeichnet das Carina aktuell <strong>3.0 von 5 Sternen bei 14 Bewertungen</strong>.
            Wir betrachten Rückmeldungen als wertvolle Impulse für unsere tägliche Arbeit. Kommen Sie vorbei,
            trinken Sie einen Kaffee und erleben Sie unser Quartierlokal unverstellt vor Ort.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#BC5434] hover:text-[#8E3218] transition-colors cursor-pointer"
            >
              <span>Wegbeschreibung und Kontakt ansehen</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <RatingBadge variant="card" />
        </div>
      </section>
    </div>
  );
};
