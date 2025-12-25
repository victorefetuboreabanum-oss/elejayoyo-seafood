
export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  status: 'Fresh' | 'Available' | 'Low Stock';
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}
