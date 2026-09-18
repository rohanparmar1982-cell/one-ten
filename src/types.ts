export type Page = 'home' | 'menu' | 'about' | 'gallery' | 'reservations' | 'contact';

export type MenuCategoryId = 
  | 'all' 
  | 'starters' 
  | 'tandoor' 
  | 'mains' 
  | 'vegetarian' 
  | 'non-vegetarian' 
  | 'breads' 
  | 'rice' 
  | 'desserts' 
  | 'beverages';

export interface Dish {
  id: string;
  name: string;
  category: MenuCategoryId;
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  spiceLevel?: 1 | 2 | 3; // 1 = mild, 2 = medium, 3 = fiery
  tags?: string[];
  pairing?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  location: string;
  date: string;
  highlight: string;
}

export type GalleryCategory = 'all' | 'food' | 'interior' | 'chef' | 'events';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'interior' | 'chef' | 'events';
  image: string;
  description: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface ReservationFormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'indoor-main' | 'private-dining' | 'patio-terrace' | 'chefs-counter';
  occasion: string;
  specialRequests: string;
}

export interface ReservationValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ReservationRecord {
  id?: string;
  booking_reference: string;
  full_name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seating_preference: string;
  occasion: string;
  special_requests?: string;
  status?: string;
  created_at?: string;
}

