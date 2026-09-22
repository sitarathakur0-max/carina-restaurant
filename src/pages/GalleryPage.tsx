import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, MapPin, ZoomIn } from 'lucide-react';
import { NavPage, GalleryPhoto } from '../types';
import { GALLERY_PHOTOS, BUSINESS_INFO } from '../data/restaurantData';

interface GalleryPageProps {
  onNavigate: (page: NavPage) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const handleNext = () => {
    if (!activePhoto) return;
    const currentIndex = GALLERY_PHOTOS.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % GALLERY_PHOTOS.length;
    setActivePhoto(GALLERY_PHOTOS[nextIndex]);
  };

  const handlePrev = () => {
    if (!activePhoto) return;
    const currentIndex = GALLERY_PHOTOS.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    setActivePhoto(GALLERY_PHOTOS[prevIndex]);
  };

  return (
    <div className="space-y-12 pb-20 max-w-7xl mx-auto px-4 sm:px-8 pt-6 md:pt-10">
      {/* 1. HEADER */}
      <section className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D4] border border-[#D9CEBF] text-xs font-semibold text-[#55623B]">
          <Camera className="w-3.5 h-3.5" />
          <span>Impressionen • Carina Luzern</span>
        </div>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#241814] leading-tight">
          Atmosphäre &amp; Eindrücke
        </h1>
        <p className="text-base sm:text-lg text-[#523E34] leading-relaxed">
          Gewinnen Sie einen Eindruck von unserem gemütlichen Lokal, der Kaffeekultur und der ruhigen Stimmung an der Hauptstrasse 9 in 6015 Luzern.
        </p>
      </section>

      {/* 2. GALLERY GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_PHOTOS.map((photo, index) => {
          const isLarge = index === 0;
          return (
            <div
              key={photo.id}
              className={`group relative bg-[#FAF6F0] border border-[#E0D5C7] rounded-3xl overflow-hidden shadow-xs cursor-pointer ${
                isLarge ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              onClick={() => setActivePhoto(photo)}
            >
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10]">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241814]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover overlay hint */}
                <div className="absolute top-4 right-4 bg-[#241814]/60 backdrop-blur-xs text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#BC5434] bg-[#241814]/70 px-2 py-0.5 rounded inline-block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#FAF6F0]">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#D8C8B8] mt-0.5">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. LIGHTBOX MODAL */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#241814] rounded-3xl overflow-hidden border border-[#433128] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 bg-[#241814]/80 hover:bg-[#BC5434] text-white p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Schliessen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Nav Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#241814]/80 hover:bg-[#BC5434] text-white p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#241814]/80 hover:bg-[#BC5434] text-white p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="aspect-[16/10] max-h-[70vh] bg-black">
              <img
                src={activePhoto.url}
                alt={activePhoto.alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Caption */}
            <div className="p-6 bg-[#241814] text-[#FAF6F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#3B2921]">
              <div>
                <h4 className="font-serif-display text-xl font-bold">{activePhoto.title}</h4>
                <p className="text-xs text-[#B8A79A] mt-0.5">{activePhoto.subtitle}</p>
              </div>

              <div className="text-xs text-[#9E8B7E] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#BC5434]" />
                <span>Carina • Hauptstrasse 9, 6015 Luzern</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
