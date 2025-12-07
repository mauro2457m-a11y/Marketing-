export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AIAssistantConfig {
  personality: string;
  themeColor: 'cyan' | 'indigo' | 'emerald' | 'rose';
  avatarUrl: string;
  welcomeMessage: string;
}

export interface ProductData {
  hero: HeroContent;
  features: Feature[];
  testimonials: Testimonial[];
  faq: FAQItem[];
  aiAssistant: AIAssistantConfig;
}

export interface ChatMessage {
  id: number;
  sender: 'user' | 'ai';
  text: string;
}