import React, { useState } from 'react';
import { Coffee, UtensilsCrossed, Sparkles, Phone, Info, AlertCircle, Check } from 'lucide-react';
import { NavPage } from '../types';
import { BUSINESS_INFO, MENU_CATEGORIES } from '../data/restaurantData';

interface MenuPageProps {
  onNavigate: (page: NavPage) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? MENU_CATEGORIES
      : MENU_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <div className="space-y-12 md:space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-8 pt-6 md:pt-10">
      {/* 1. HEADER */}
      <section className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D4] border border-[#D9CEBF] text-xs font-semibold text-[#55623B]">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>Speisen & Getränke • Carina Luzern</span>
        </div>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#241814] leading-tight">
          Unser kulinarisches Angebot
        </h1>
        <p className="text-base sm:text-lg text-[#523E34] leading-relaxed">
          Klassischer Schweizer Kaffeegenuss, feine Snacks und täglich frisch zubereitete Mittagsmenüs.
          Da wir grossen Wert auf saisonale Frische legen, variieren unsere warmen Gerichte täglich.
        </p>
      </section>

      {/* 2. IMPORTANT NOTICE ON DAILY MENUS & PRICING */}
      <section className="bg-[#FAF6F0] border-2 border-[#BC5434] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#BC5434]">
            <Info className="w-4 h-4" />
            <span>Tagesaktuelle Menüs & Preise</span>
          </div>
          <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#241814]">
            Fragen Sie nach unserem heutigen Mittagsmenü
          </h2>
          <p className="text-xs sm:text-sm text-[#523E34] leading-relaxed">
            Unsere warmen Mittagsgerichte und aktuellen Tagesempfehlungen werden täglich frisch auf unserer Schiefertafel im Lokal angeschlagen.
            Sie möchten vorab wissen, was heute serviert wird, oder einen Tisch für den Mittagstisch anfragen?
            Rufen Sie uns unkompliziert an:
          </p>
        </div>

        <a
          id="menu-call-daily-btn"
          href={BUSINESS_INFO.phoneRaw}
          className="shrink-0 inline-flex items-center gap-2.5 bg-[#BC5434] hover:bg-[#A34527] text-white px-6 py-3.5 rounded-full text-sm font-semibold shadow-sm transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4" />
          <span>{BUSINESS_INFO.phone}</span>
        </a>
      </section>

      {/* 3. CATEGORY SELECTOR PILLS */}
      <section className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#E0D5C7]">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-[#241814] text-white shadow-xs'
              : 'bg-[#FAF6F0] border border-[#D9CEBF] text-[#523E34] hover:bg-[#EAE2D4]'
          }`}
        >
          Alle Bereiche ({MENU_CATEGORIES.length})
        </button>

        {MENU_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-[#241814] text-white shadow-xs'
                  : 'bg-[#FAF6F0] border border-[#D9CEBF] text-[#523E34] hover:bg-[#EAE2D4]'
              }`}
            >
              {cat.title}
            </button>
          );
        })}
      </section>

      {/* 4. EDITORIAL MENU PRESENTATION */}
      <section className="space-y-12">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="bg-[#FAF6F0] border border-[#E0D5C7] rounded-3xl p-6 sm:p-10 space-y-6"
          >
            <div className="border-b border-[#E6DDD3] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#241814]">
                  {category.title}
                </h2>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#55623B] mt-0.5">
                  {category.subtitle}
                </p>
              </div>
              <span className="text-xs text-[#715A4F] italic">
                Vor Ort serviert
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#523E34] leading-relaxed max-w-2xl">
              {category.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#F2ECE2] p-5 rounded-2xl border border-[#E2D7C8] space-y-1.5 hover:border-[#BC5434] transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif-display text-base font-bold text-[#241814]">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="text-[10px] font-bold text-[#55623B] bg-[#E8EFE1] px-2 py-0.5 rounded-full shrink-0">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#6B5A51] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 5. ALLERGENS & SERVICE ADVICE */}
      <section className="bg-[#EFE8DC] border border-[#D5C7B7] rounded-2xl p-6 text-xs text-[#523E34] space-y-3">
        <div className="flex items-center gap-2 font-bold text-[#241814]">
          <AlertCircle className="w-4 h-4 text-[#BC5434]" />
          <span>Allergene &amp; Lebensmittelinformation</span>
        </div>
        <p className="leading-relaxed">
          Liebe Gäste, über Zutaten in unseren Gerichten, die Allergien oder Intoleranzen auslösen können, informiert Sie unsere Servicecrew gerne mündlich vor Ort. Bitte weisen Sie uns bei Ihrer Bestellung auf allfällige Unverträglichkeiten hin.
        </p>
      </section>
    </div>
  );
};
