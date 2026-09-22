import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Bus,
  Car,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const ContactPage: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Allgemeine Anfrage',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bitte hinterlassen Sie eine kurze Nachricht.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Die Nachricht sollte mindestens 10 Zeichen lang sein.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate frontend validation & transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Allgemeine Anfrage',
        message: '',
      });
      setErrors({});
    }, 600);
  };

  return (
    <div className="space-y-12 md:space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-8 pt-6 md:pt-10">
      {/* 1. HEADER */}
      <section className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D4] border border-[#D9CEBF] text-xs font-semibold text-[#55623B]">
          <MapPin className="w-3.5 h-3.5" />
          <span>Kontakt & Standort • Carina Luzern</span>
        </div>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#241814] leading-tight">
          Wir freuen uns auf Ihren Kontakt
        </h1>
        <p className="text-base sm:text-lg text-[#523E34] leading-relaxed">
          Haben Sie Fragen zu unserem Angebot, möchten Sie einen Tisch anfragen oder uns eine Nachricht senden?
          Rufen Sie uns direkt an oder nutzen Sie das Kontaktformular.
        </p>
      </section>

      {/* 2. DIRECT CONTACT STRIP */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#FAF6F0] border border-[#E0D5C7] rounded-2xl p-6 space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#EAE2D5] flex items-center justify-center text-[#BC5434] mb-3">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#715A4F]">
            Telefonische Auskunft
          </span>
          <p className="font-serif-display text-2xl font-bold text-[#241814]">
            <a
              id="contact-box-phone"
              href={BUSINESS_INFO.phoneRaw}
              className="hover:text-[#BC5434] transition-colors"
            >
              {BUSINESS_INFO.phone}
            </a>
          </p>
          <p className="text-xs text-[#6B5A51]">
            Schnellster Weg für Tagesmenüs &amp; Platzanfragen.
          </p>
        </div>

        <div className="bg-[#FAF6F0] border border-[#E0D5C7] rounded-2xl p-6 space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#EAE2D5] flex items-center justify-center text-[#55623B] mb-3">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#715A4F]">
            Adresse
          </span>
          <p className="font-serif-display text-xl font-bold text-[#241814]">
            {BUSINESS_INFO.street}
          </p>
          <p className="text-xs text-[#6B5A51]">
            {BUSINESS_INFO.zipCode} {BUSINESS_INFO.city}, Schweiz
          </p>
        </div>

        <div className="bg-[#FAF6F0] border border-[#E0D5C7] rounded-2xl p-6 space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#EAE2D5] flex items-center justify-center text-[#BC5434] mb-3">
            <Clock className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#715A4F]">
            Öffnungszeiten
          </span>
          <p className="font-serif-display text-lg font-bold text-[#241814]">
            Auskunft per Telefon
          </p>
          <p className="text-xs text-[#6B5A51]">
            Bitte rufen Sie uns für aktuelle Tages- &amp; Feiertagszeiten an.
          </p>
        </div>
      </section>

      {/* 3. CONTACT FORM & LOCATION MAP SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Frontend-validated Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#FAF6F0] border border-[#E0D5C7] rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="space-y-2 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#55623B]">
              Schriftliche Anfrage
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#241814]">
              Nachricht an das Carina senden
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5A51]">
              Füllen Sie die folgenden Felder aus. Wir beantworten Ihre Anfrage schnellstmöglich.
            </p>
          </div>

          {submitSuccess ? (
            <div className="bg-[#E9EFE0] border border-[#BACDA6] rounded-2xl p-6 text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-[#55623B] text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-xl font-bold text-[#241814]">
                Vielen Dank für Ihre Nachricht!
              </h3>
              <p className="text-xs sm:text-sm text-[#43512E] max-w-md mx-auto">
                Ihre Mitteilung wurde erfasst. Für dringende Angelegenheiten oder kurzfristige Tischreservationen erreichen Sie uns direkt telefonisch unter <strong>041 240 81 25</strong>.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="mt-2 text-xs font-semibold text-[#BC5434] hover:underline cursor-pointer"
              >
                Weitere Nachricht senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-[#241814] mb-1">
                    Ihr Name <span className="text-[#BC5434]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="z. B. Beat Müller"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#BC5434] transition-all ${
                      errors.name ? 'border-red-500 bg-red-50/30' : 'border-[#D9CEBF]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-[#241814] mb-1">
                    E-Mail-Adresse <span className="text-[#BC5434]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@beispiel.ch"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#BC5434] transition-all ${
                      errors.email ? 'border-red-500 bg-red-50/30' : 'border-[#D9CEBF]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-[#241814] mb-1">
                    Telefonnummer (optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="041 ... oder 079 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#BC5434]"
                  />
                </div>

                {/* Subject / Purpose */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-[#241814] mb-1">
                    Betreff / Anliegen
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#BC5434]"
                  >
                    <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                    <option value="Tisch- & Platzanfrage">Tisch- &amp; Platzanfrage</option>
                    <option value="Frage zum Tagesmenü">Frage zum Tagesmenü</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-[#241814] mb-1">
                  Ihre Nachricht <span className="text-[#BC5434]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Wie können wir Ihnen weiterhelfen?"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#BC5434] transition-all ${
                    errors.message ? 'border-red-500 bg-red-50/30' : 'border-[#D9CEBF]'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#BC5434] hover:bg-[#A34527] text-white px-7 py-3 rounded-full text-sm font-semibold shadow-sm transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Wird gesendet...' : 'Nachricht absenden'}</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#715A4F] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#55623B]" />
                <span>Ihre Angaben werden vertraulich behandelt und ausschliesslich für Ihre Anfrage verwendet.</span>
              </div>
            </form>
          )}
        </div>

        {/* Right: Interactive Location & Route Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF6F0] border border-[#E0D5C7] rounded-3xl p-6 sm:p-8 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#55623B]">
              Lage & Anreise
            </span>
            <h3 className="font-serif-display text-2xl font-bold text-[#241814]">
              So finden Sie zu uns
            </h3>

            {/* Custom stylized map graphic representing Hauptstrasse 9, 6015 Luzern */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D5C7B7] bg-[#EBE4D8] p-4 text-center">
              <div className="h-44 rounded-xl bg-[#E2D8C9] relative flex flex-col items-center justify-center p-4 border border-[#D1C3B2]">
                {/* Street layout visual mock */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#523E34_1px,transparent_1px)] [background-size:12px_12px]" />
                
                {/* Street road representation */}
                <div className="absolute w-full h-8 bg-[#C7BAA8] top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#523E34]">
                    Hauptstrasse
                  </span>
                </div>

                {/* Marker badge */}
                <div className="relative z-10 bg-[#BC5434] text-white p-2.5 rounded-full shadow-lg animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="relative z-10 bg-[#241814] text-[#FAF6F0] px-3 py-1 rounded-full text-xs font-bold mt-2 shadow-sm">
                  Carina • Hauptstrasse 9
                </div>
              </div>

              {/* External map link */}
              <div className="pt-3">
                <a
                  id="open-google-maps-btn"
                  href="https://www.google.com/maps/search/?api=1&query=Carina+Hauptstrasse+9+6015+Luzern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BC5434] hover:text-[#8E3218] transition-colors"
                >
                  <span>In Google Maps öffnen</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Practical arrival instructions */}
            <div className="space-y-3 text-xs text-[#523E34] border-t border-[#EAE1D3] pt-4">
              <div className="flex items-start gap-3">
                <Bus className="w-4 h-4 text-[#55623B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#241814]">Mit dem öffentlichen Verkehr:</strong>
                  <p className="text-[#6B5A51] mt-0.5">
                    Buslinien ab Bahnhof Luzern Richtung Littau / Hauptstrasse. Haltestellen in unmittelbarer Gehdistanz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Car className="w-4 h-4 text-[#BC5434] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#241814]">Mit dem Auto:</strong>
                  <p className="text-[#6B5A51] mt-0.5">
                    Direkte Anbindung über die Hauptstrasse. Öffentliche Parkplätze befinden sich in der näheren Umgebung im Quartier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
