import React, { useState } from 'react';
import { Phone, MapPin, Coffee, UtensilsCrossed, ChevronRight, Clock, ChevronDown, Sparkles, Navigation } from 'lucide-react';
import { NavPage } from '../types';
import { BUSINESS_INFO, MENU_CATEGORIES, REASONS_TO_VISIT, FAQ_ITEMS } from '../data/restaurantData';
import { RatingBadge } from '../components/RatingBadge';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. ASYMMETRICAL MAGAZINE HERO SECTION */}
      <section className="relative pt-6 md:pt-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial pill tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE2D4] border border-[#D9CEBF] text-xs font-semibold text-[#55623B]">
              <span className="w-2 h-2 rounded-full bg-[#BC5434] animate-pulse" />
              <span>Quartier-Restaurant & Café • 6015 Luzern</span>
            </div>

            {/* Distinctive European typography */}
            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#241814] font-bold leading-[1.08] tracking-tight">
              Ehrlicher Kaffee, währschafte Küche &amp; Luzerner Gemütlichkeit.
            </h1>

            <p className="text-base sm:text-lg text-[#523E34] leading-relaxed max-w-xl">
              Willkommen im <strong className="text-[#241814] font-semibold">Carina</strong> an der Hauptstrasse 9.
              Ein ungezwungenes Restaurant und Café für Nachbarn, Pendler und Freunde guter Schweizer Quartierkultur.
            </p>

            {/* Factual micro-highlights bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#715A4F] pt-1">
              <span className="flex items-center gap-1.5 bg-[#F2ECE2] px-3 py-1.5 rounded-lg border border-[#E2D7C8]">
                <MapPin className="w-3.5 h-3.5 text-[#BC5434]" />
                Hauptstrasse 9, 6015 Luzern
              </span>
              <span className="flex items-center gap-1.5 bg-[#F2ECE2] px-3 py-1.5 rounded-lg border border-[#E2D7C8]">
                <Coffee className="w-3.5 h-3.5 text-[#55623B]" />
                Café & Mittagstisch
              </span>
            </div>

            {/* CTAs: Direct call and internal navigation */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                id="hero-call-primary-btn"
                href={BUSINESS_INFO.phoneRaw}
                className="inline-flex items-center justify-center gap-2.5 bg-[#BC5434] hover:bg-[#A34527] text-white px-7 py-3.5 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Jetzt anrufen: {BUSINESS_INFO.phone}</span>
              </a>

              <button
                id="hero-view-menu-btn"
                onClick={() => onNavigate('menu')}
                className="inline-flex items-center justify-center gap-2 bg-[#EAE2D4] hover:bg-[#DFD5C4] text-[#241814] px-6 py-3.5 rounded-full text-base font-medium border border-[#D5C7B5] transition-colors cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#55623B]" />
                <span>Angebot einsehen</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Offset Visual & Organic Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background architectural block */}
              <div className="absolute -top-3 -left-3 w-full h-full bg-[#E6DDD1] rounded-[2rem] -rotate-2" />

              {/* Main image container with organic rounded corners */}
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-[#D9CEBF] shadow-lg bg-[#FAF6F0]">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
                  alt="Atmosphäre im Café Restaurant Carina Luzern"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />

                {/* Floating editorial badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#241814]/90 backdrop-blur-md text-[#FAF6F0] p-4 rounded-xl border border-[#483328] flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#BC5434] font-semibold">
                      Quartier Carina
                    </p>
                    <p className="text-sm font-serif-display font-medium text-[#FAF6F0]">
                      Hauptstrasse 9 • 6015 Luzern
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-semibold bg-[#BC5434] text-white px-3 py-1.5 rounded-full hover:bg-[#A34527] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Anreise</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & PHILOSOPHY: OFFSET DUAL-COLUMN BLOCK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#FAF6F0] border border-[#E0D5C7] rounded-3xl p-6 sm:p-10 md:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BC5434]">
                Über das Haus
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#241814] leading-tight">
                Ein fester Treffpunkt im Luzerner Alltag.
              </h2>
              <p className="text-sm sm:text-base text-[#523E34] leading-relaxed">
                Das Carina ist kein abgehobenes Gourmetlokal, sondern das, was ein gutes Quartier-Restaurant ausmacht:
                ein vertrauter Ort, an dem man sich auf einen heissen Café Crème am Morgen, ein warmes Mittagsgericht
                oder ein geselliges Bier zum Feierabend trifft.
              </p>
              <div className="pt-2">
                <button
                  id="intro-read-about-btn"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#BC5434] hover:text-[#8E3218] transition-colors cursor-pointer group"
                >
                  <span>Mehr über Carina erfahren</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F2ECE2] p-5 rounded-2xl border border-[#E0D5C7] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#E3D8C8] flex items-center justify-center text-[#BC5434]">
                  <Coffee className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-lg font-bold text-[#241814]">
                  Kaffee & Morgens
                </h3>
                <p className="text-xs text-[#6B5A51] leading-relaxed">
                  Starten Sie den Tag mit frisch gemahlenem Kaffee, Espresso oder Cappuccino, begleitet von feinen Gipfeli.
                </p>
              </div>

              <div className="bg-[#F2ECE2] p-5 rounded-2xl border border-[#E0D5C7] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#E3D8C8] flex items-center justify-center text-[#55623B]">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-lg font-bold text-[#241814]">
                  Tagesfrische Küche
                </h3>
                <p className="text-xs text-[#6B5A51] leading-relaxed">
                  Bodenständige Schweizer Mittagsteller und wechselnde Tagesgerichte zur Stärkung während des Werktags.
                </p>
              </div>

              <div className="bg-[#F2ECE2] p-5 rounded-2xl border border-[#E0D5C7] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#E3D8C8] flex items-center justify-center text-[#BC5434]">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-lg font-bold text-[#241814]">
                  Zentral in Luzern
                </h3>
                <p className="text-xs text-[#6B5A51] leading-relaxed">
                  An der Hauptstrasse 9 gelegen, gut angebunden mit dem Bus und unkompliziert für Gäste aus der Region.
                </p>
              </div>

              <div className="bg-[#F2ECE2] p-5 rounded-2xl border border-[#E0D5C7] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#E3D8C8] flex items-center justify-center text-[#55623B]">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-lg font-bold text-[#241814]">
                  Persönlicher Kontakt
                </h3>
                <p className="text-xs text-[#6B5A51] leading-relaxed">
                  Keine anonymen Buchungssysteme – rufen Sie uns einfach unter 041 240 81 25 an für Auskünfte und Plätze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOOD & CAFÉ EXPERIENCE (EDITORIAL MENU PREVIEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#55623B]">
                Kulinarisches Angebot
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#241814] mt-1">
                Ehrliche Speisen &amp; Getränke
              </h2>
              <p className="text-sm text-[#6B5A51] max-w-lg mt-1">
                Bei uns geniessen Sie bewährte Klassiker der Schweizer Gastronomie und erfrischende Getränke ohne Umschweife.
              </p>
            </div>

            <button
              id="home-full-menu-btn"
              onClick={() => onNavigate('menu')}
              className="self-start md:self-auto inline-flex items-center gap-2 bg-[#241814] hover:bg-[#3D2C24] text-white px-5 py-2.5 rounded-full text-xs font-medium transition-colors cursor-pointer"
            >
              <span>Vollständiges Angebot ansehen</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#BC5434]" />
            </button>
          </div>

          {/* 4 Category Cards in Asymmetrical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MENU_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="bg-[#FAF6F0] border border-[#E0D5C7] rounded-2xl p-6 hover:border-[#BC5434] transition-colors group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-serif-display text-xl font-bold text-[#241814] group-hover:text-[#BC5434] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs font-medium text-[#55623B] mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#6B5A51] mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Sample items */}
                <div className="space-y-2 border-t border-[#EAE1D3] pt-3">
                  {category.items.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-baseline justify-between gap-2 text-xs">
                      <span className="font-semibold text-[#241814] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BC5434]" />
                        {item.name}
                      </span>
                      {item.tag && (
                        <span className="text-[10px] font-semibold text-[#55623B] bg-[#E8EFE1] px-1.5 py-0.5 rounded">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Menu Notice Banner */}
          <div className="bg-[#EFE8DC] border border-[#D8CABE] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 text-[#523E34]">
              <Sparkles className="w-4 h-4 text-[#BC5434] shrink-0" />
              <span>
                <strong>Hinweis zu Tagesmenüs:</strong> Unser Mittagstisch wechselt täglich frisch. Rufen Sie uns unter{' '}
                <a href={BUSINESS_INFO.phoneRaw} className="font-bold underline text-[#241814]">
                  {BUSINESS_INFO.phone}
                </a>{' '}
                an, um das aktuelle Tagesgericht zu erfahren.
              </span>
            </div>
            <a
              id="home-notice-call-btn"
              href={BUSINESS_INFO.phoneRaw}
              className="shrink-0 bg-[#BC5434] text-white px-4 py-1.5 rounded-full font-semibold hover:bg-[#A34527] transition-colors"
            >
              Menü anfragen
            </a>
          </div>
        </div>
      </section>

      {/* 4. REASONS TO VISIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#241814] text-[#FAF6F0] rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest text-[#BC5434] font-semibold">
              Gute Gründe
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#FAF6F0] mt-1">
              Warum Gäste ins Carina kommen
            </h2>
            <p className="text-sm text-[#C9B8A9] mt-2">
              Ob für eine kurze Pause oder ein gemütliches Beisammensein – Carina steht für das unkomplizierte Luzerner Quartierleben.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REASONS_TO_VISIT.map((reason, idx) => (
              <div
                key={idx}
                className="bg-[#2E1F1A] border border-[#432F26] rounded-2xl p-6 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#BC5434] bg-[#3B2820] px-2.5 py-0.5 rounded inline-block mb-3">
                    {reason.badge}
                  </span>
                  <h3 className="font-serif-display text-lg font-bold text-[#FAF6F0] leading-snug">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-[#BFAEA0] leading-relaxed mt-2">
                    {reason.lead}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCATION & ATMOSPHERE SECTION WITH GENUINE RATING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Atmosphere & Location Details (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF6F0] border border-[#E0D5C7] rounded-3xl p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#55623B]">
                Standort & Atmosphäre
              </span>
              <h2 className="font-serif-display text-3xl font-bold text-[#241814]">
                Mitten im Quartier an der Hauptstrasse 9
              </h2>
              <p className="text-sm text-[#523E34] leading-relaxed">
                Das Restaurant Carina befindet sich an der Hauptstrasse 9 in 6015 Luzern.
                Dank der verkehrsgünstigen Lage ist es sowohl für Anwohner als auch für Reisende
                im Grossraum Luzern ein praktischer und gemütlicher Einkehrort.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#523E34]">
                <div className="flex items-center gap-2.5">
                  <Navigation className="w-4 h-4 text-[#BC5434] shrink-0" />
                  <span>Öffentlicher Verkehr: Busverbindungen in direkter Gehdistanz an der Hauptstrasse.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#55623B] shrink-0" />
                  <span>Adresse: Hauptstrasse 9, 6015 Luzern (PLZ 6015).</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#BC5434] shrink-0" />
                  <span>Telefonkontakt: 041 240 81 25 für aktuelle Öffnungszeiten & Tischfragen.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EAE1D3] mt-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#715A4F]">Sie planen einen Besuch?</p>
                <p className="text-sm font-semibold text-[#241814]">Wir freuen uns auf Sie.</p>
              </div>

              <button
                id="location-to-contact-btn"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 bg-[#BC5434] hover:bg-[#A34527] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Anfahrt & Kontakt anzeigen</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Transparent Rating Display (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <RatingBadge variant="card" />
          </div>
        </div>
      </section>

      {/* 6. USEFUL FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#55623B]">
            Häufige Fragen
          </span>
          <h2 className="font-serif-display text-3xl font-bold text-[#241814]">
            Fragen zu Ihrem Besuch im Carina
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5A51]">
            Wissenswertes rund um Anreise, Tagesmenüs und telefonische Reservierungen.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="bg-[#FAF6F0] border border-[#E0D5C7] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-[#F2ECE2]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-display font-bold text-base text-[#241814]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#BC5434] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#523E34] leading-relaxed border-t border-[#EAE1D3]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. STRONG FINAL VISIT / CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#FAF6F0] border-2 border-[#BC5434] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-[#BC5434]/5 rounded-full pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#BC5434] font-semibold bg-[#F0E4D8] px-3 py-1 rounded-full inline-block">
              Herzlich willkommen
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#241814] leading-tight">
              Kommen Sie vorbei oder rufen Sie uns an.
            </h2>
            <p className="text-sm sm:text-base text-[#523E34] leading-relaxed">
              Ob für einen schnellen Morgenkaffee, ein währschaftes Mittagessen oder ein gemütliches Beisammensein – wir freuen uns auf Ihren Besuch an der Hauptstrasse 9 in 6015 Luzern.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                id="final-cta-phone"
                href={BUSINESS_INFO.phoneRaw}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#BC5434] hover:bg-[#A34527] text-white px-8 py-3.5 rounded-full text-base font-semibold shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>041 240 81 25 anrufen</span>
              </a>

              <button
                id="final-cta-contact"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EAE2D4] hover:bg-[#DFD5C4] text-[#241814] px-7 py-3.5 rounded-full text-base font-medium border border-[#D5C7B5] transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#55623B]" />
                <span>Kontakt & Anreise</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
