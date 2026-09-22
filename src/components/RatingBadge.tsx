import React from 'react';
import { Star, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface RatingBadgeProps {
  variant?: 'compact' | 'card' | 'detailed';
  className?: string;
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({ variant = 'card', className = '' }) => {
  const { rating, reviewCount } = BUSINESS_INFO;

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAE2D5] border border-[#D9CEBF] text-xs text-[#241814] ${className}`}>
        <div className="flex items-center gap-0.5 text-[#BC5434]">
          <Star className="w-3.5 h-3.5 fill-[#BC5434]" />
        </div>
        <span className="font-semibold">{rating.toFixed(1)} / 5</span>
        <span className="text-[#6D594E]">({reviewCount} Bewertungen)</span>
      </div>
    );
  }

  return (
    <div
      id="factual-rating-card"
      className={`bg-[#FAF6F0] border border-[#E0D5C7] p-6 rounded-2xl shadow-xs relative overflow-hidden ${className}`}
    >
      {/* Decorative subtle corner tag */}
      <div className="flex items-center justify-between gap-4 mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#55623B] bg-[#EAE3D6] px-2.5 py-1 rounded-md">
          Öffentliche Verzeichnisbewertung
        </span>
        <span className="text-xs text-[#715A4F] flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-[#8F7D72]" />
          Transparente Gästebewertung
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
        <div className="flex items-baseline gap-2">
          <span className="font-serif-display text-4xl sm:text-5xl font-bold text-[#241814] tracking-tight">
            {rating.toFixed(1)}
          </span>
          <span className="text-lg text-[#715A4F] font-medium">/ 5.0</span>
        </div>

        {/* 5-star visual showing 3 filled stars */}
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-[#BC5434]">
            {[1, 2, 3, 4, 5].map((starIndex) => (
              <Star
                key={starIndex}
                className={`w-5 h-5 ${
                  starIndex <= Math.round(rating)
                    ? 'fill-[#BC5434] text-[#BC5434]'
                    : 'text-[#D0C2B2] fill-transparent'
                }`}
              />
            ))}
          </div>
          <p className="text-xs font-medium text-[#523E34]">
            Basierend auf <strong className="text-[#241814]">{reviewCount} verifizierten Verzeichniseinträgen</strong>
          </p>
        </div>
      </div>

      <p className="text-xs text-[#6B5A51] mt-4 pt-3 border-t border-[#EAE1D3] leading-relaxed">
        Als lokales Restaurant & Café an der Hauptstrasse 9 nehmen wir die Meinungen und Erfahrungen unserer Gäste ernst.
        Kommen Sie vorbei und machen Sie sich Ihr eigenes Bild bei einem Kaffee oder feinen Mittagsteller.
      </p>
    </div>
  );
};
