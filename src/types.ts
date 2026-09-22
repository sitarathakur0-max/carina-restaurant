export type NavPage = 'home' | 'about' | 'menu' | 'gallery' | 'contact';

export interface BusinessInfo {
  name: string;
  category: string;
  address: string;
  street: string;
  zipCode: string;
  city: string;
  country: string;
  phone: string;
  phoneRaw: string;
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
}

export interface MenuItemCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: {
    name: string;
    description: string;
    tag?: string;
  }[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: 'atmosphere' | 'coffee' | 'dining' | 'surroundings';
  url: string;
  alt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
