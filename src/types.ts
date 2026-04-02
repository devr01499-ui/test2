export interface Service {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  icon: string;
  videoUrl: string;
  demoContent: string;
  pros?: string[];
  howWeExcel?: string;
  industries?: {
    name: string;
    content: string;
  }[];
  useCases?: {
    name: string;
    content: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}
