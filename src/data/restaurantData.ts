import { BusinessInfo, MenuItemCategory, GalleryPhoto, FAQItem } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Carina',
  category: 'Restaurant / Café',
  street: 'Hauptstrasse 9',
  zipCode: '6015',
  city: 'Luzern',
  country: 'Schweiz',
  address: 'Hauptstrasse 9, 6015 Luzern, Schweiz',
  phone: '041 240 81 25',
  phoneRaw: 'tel:0412408125',
  rating: 3.0,
  reviewCount: 14,
  description:
    'Carina ist ein gemütliches Quartier-Restaurant und Café an der Hauptstrasse 9 in Luzern. Ein ungezwungener Treffpunkt für Nachbarn, Berufstätige und Reisende, die ehrlichen Kaffee, warme Tagesküche und persönliche Gastlichkeit schätzen.',
  shortDescription: 'Quartier-Restaurant & Café an der Hauptstrasse 9 in 6015 Luzern.'
};

export const MENU_CATEGORIES: MenuItemCategory[] = [
  {
    id: 'coffee-cafe',
    title: 'Kaffee & Heissgetränke',
    subtitle: 'Klassische Schweizer Kaffeekultur',
    description:
      'Frisch zubereitete Kaffeespezialitäten für den morgendlichen Start oder die genussvolle Pause am Nachmittag.',
    items: [
      {
        name: 'Café Crème',
        description: 'Der Schweizer Klassiker, frisch gemahlen und mit feiner Crema serviert.',
        tag: 'Klassiker'
      },
      {
        name: 'Espresso & Ristretto',
        description: 'Kräftig gerösteter Espresso mit vollmundigem Aroma.',
      },
      {
        name: 'Cappuccino & Schale (Milchkaffee)',
        description: 'Mit cremig aufgeschäumter Schweizer Milch verfeinert.',
      },
      {
        name: 'Heisse & Kalte Schokolade',
        description: 'Feinste Schweizer Schokolade, auf Wunsch mit Rahm.',
      },
      {
        name: 'Tee-Auswahl',
        description: 'Verschiedene Kräuter-, Früchte- und Schwarzteesorten.',
      }
    ]
  },
  {
    id: 'lunch-dishes',
    title: 'Mittagstisch & Warme Küche',
    subtitle: 'Täglich wechselnde Angebote',
    description:
      'Unsere Küchenbrigade bereitet täglich frische, bodenständige Gerichte zu. Die aktuellen Tagesmenüs erfahren Sie direkt vor Ort oder telefonisch unter 041 240 81 25.',
    items: [
      {
        name: 'Tagesmenü mit Suppe oder Salat',
        description: 'Ausgewogenes Mittagsgericht mit frischen Beilagen, täglich variierend.',
        tag: 'Täglich frisch'
      },
      {
        name: 'Vegetarisches Tagesgericht',
        description: 'Saisonale pflanzliche Option für den leichten Mittagshunger.',
      },
      {
        name: 'Klassische Schweizer Tellergerichte',
        description: 'Währschafte Hausmannskost nach Art des Hauses, frisch aus der Pfanne.',
      },
      {
        name: 'Gartenfrische Salatschüssel',
        description: 'Knackige Blattsalate der Saison mit hausgemachtem Dressing.',
      }
    ]
  },
  {
    id: 'bakery-snacks',
    title: 'Bäckerei, Snacks & Gebäck',
    subtitle: 'Für den kleinen Hunger & süsse Momente',
    description:
      'Passend zum Kaffee bieten wir feine Snacks, Sandwiches und traditionelles Gebäck an.',
    items: [
      {
        name: 'Frische Gipfeli & Kleingebäck',
        description: 'Knusprige Buttergipfeli zum traditionellen Morgenkaffee.',
        tag: 'Morgens'
      },
      {
        name: 'Belegte Brötli & Sandwiches',
        description: 'Tagesfrisch zubereitete Sandwiches mit Käse, Schinken oder saisonalem Belag.',
      },
      {
        name: 'Süsses Gebäck & Kuchen',
        description: 'Wechselnde Kuchenspezialitäten und süsse Teilchen für den Nachmittag.',
      }
    ]
  },
  {
    id: 'drinks-refreshments',
    title: 'Erfrischungen, Bier & Wein',
    subtitle: 'Kühle Durstlöscher & Gesellige Gläser',
    description:
      'Geniessen Sie erfrischende Schweizer Mineralwasser, Säfte sowie feine Biersorten und ausgewählte Weine zum Feierabend.',
    items: [
      {
        name: 'Schweizer Mineralwasser & Softdrinks',
        description: 'Kohlensäurehaltig oder still, Rivella, Süssmost und klassische Erfrischungen.',
      },
      {
        name: 'Lagerbier & Spezialbiere',
        description: 'Kühles Bier im Offenausschank oder in der Flasche serviert.',
      },
      {
        name: 'Offene Weine (Weiss & Rot)',
        description: 'Ausgewählte Weine im Offenausschank nach Tagesempfehlung zum Essen oder Apéro.',
        tag: 'Apéro'
      },
      {
        name: 'Alkoholfreie Spezialitäten',
        description: 'Fruchtsäfte, Bittergetränke und saisonale Durstlöscher.',
      }
    ]
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Gemütliche Kaffee-Atmosphäre',
    subtitle: 'Einladender Raum für gesellige Momente',
    category: 'atmosphere',
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gemütliches Café und Bar-Ambiente im Restaurant Carina'
  },
  {
    id: 'gal-2',
    title: 'Frischer Kaffee mit Crema',
    subtitle: 'Sorgfältig zubereiteter Espresso & Schale',
    category: 'coffee',
    url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
    alt: 'Frische Tasse Kaffee auf einem Holztisch'
  },
  {
    id: 'gal-3',
    title: 'Tischgedeck zum Mittagessen',
    subtitle: 'Platz nehmen und geniessen',
    category: 'dining',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gedeckter Tisch im Restaurantbereich'
  },
  {
    id: 'gal-4',
    title: 'Ruhige Gaststube',
    subtitle: 'Natürliches Licht und warmer Holzcharakter',
    category: 'atmosphere',
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sonnendurchflutetes Café-Interieur mit Holztischen'
  },
  {
    id: 'gal-5',
    title: 'Umgebung Luzern',
    subtitle: 'Zentral gelegen im Bezirk Luzern',
    category: 'surroundings',
    url: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80',
    alt: 'Luzern Landschaft und städtische Umgebung'
  }
];

export const REASONS_TO_VISIT = [
  {
    title: 'Echte Quartieratmosphäre',
    lead: 'Ein unkomplizierter Ort ohne Schnickschnack, an dem sich Stammgäste und Vorbeigehende gleichermassen willkommen fühlen.',
    badge: 'Lokal'
  },
  {
    title: 'Zentral an der Hauptstrasse 9',
    lead: 'Bequem erreichbar im Luzerner Quartier mit nahen ÖV-Verbindungen und Parkmöglichkeiten in Gehdistanz.',
    badge: 'Erreichbar'
  },
  {
    title: 'Täglich frische Mittagsangebote',
    lead: 'Bodenständige Küche und warme Mittagsmenüs zur Stärkung während des Arbeitstages oder beim Ausflug.',
    badge: 'Frisch'
  },
  {
    title: 'Entspannte Kaffeepause',
    lead: 'Geniessen Sie eine ruhige Tasse Kaffee, ein knuspriges Gipfeli oder ein kühles Feierabendbier in freundlicher Runde.',
    badge: 'Gemütlich'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'Besuch & Lage',
    question: 'Wo genau befindet sich das Restaurant & Café Carina?',
    answer:
      'Das Restaurant Carina befindet sich an der Hauptstrasse 9 in 6015 Luzern (Stadtteil Littau/Luzern). Es liegt direkt an der Hauptverkehrsachse und ist sowohl mit dem öffentlichen Verkehr als auch mit dem Auto gut erreichbar.'
  },
  {
    category: 'Speisen & Menü',
    question: 'Wie erfahre ich das aktuelle Tagesmenü?',
    answer:
      'Da unsere Mittagsmenüs täglich frisch nach Marktangebot zubereitet werden, präsentieren wir das Tagesmenü direkt vor Ort auf unserer Tafel. Sie können uns auch jederzeit telefonisch unter 041 240 81 25 anrufen, um das Tagesangebot zu erfragen.'
  },
  {
    category: 'Reservierung',
    question: 'Ist eine Tischreservierung erforderlich?',
    answer:
      'Für einen spontanen Kaffee oder ein schnelles Mittagessen sind spontane Besucher herzlich willkommen. Bei Gruppen oder zur Mittagsspitzenzeit empfehlen wir einen kurzen Anruf unter 041 240 81 25, um freie Plätze zu sichern.'
  },
  {
    category: 'Öffnungszeiten & Kontakt',
    question: 'Wo kann ich die aktuellen Öffnungszeiten einsehen?',
    answer:
      'Für die jeweils aktuellen Tagesöffnungszeiten und Feiertagsregelungen kontaktieren Sie uns bitte direkt per Telefon unter 041 240 81 25. Unser Team gibt Ihnen gerne persönlich Auskunft.'
  },
  {
    category: 'Bewertungen',
    question: 'Wie wird das Carina bewertet?',
    answer:
      'Carina verzeichnet auf öffentlichen Verzeichnissen eine Gesamtwertung von 3.0 von 5 Sternen basierend auf 14 Kundenstimmen. Wir schätzen ehrliches Feedback unserer Gäste und arbeiten kontinuierlich daran, den Besuch angenehm zu gestalten.'
  }
];
