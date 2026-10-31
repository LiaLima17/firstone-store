export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Oversized Heavy Hoodie 'Void'",
    category: "Roupas",
    price: 480.00,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    description: "Algodão egípcio heavyweight 450GSM, modelagem boxy com capuz estruturado.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "2",
    name: "Cargo Technical Pants 'Cyber'",
    category: "Roupas",
    price: 520.00,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    description: "Sarja tecnológica impermeável com múltiplos bolsos utilitários e fit ajustável.",
    sizes: ["38", "40", "42", "44"],
  },
  {
    id: "3",
    name: "Crossbody Utility Bag 'Firstone'",
    category: "Acessórios",
    price: 260.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description: "Cordura balística com fivelas de engate rápido e acabamento fosco.",
    sizes: ["Único"],
  },
  {
    id: "4",
    name: "Tee Acid Wash 'Eclipse'",
    category: "Roupas",
    price: 220.00,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    description: "Tratamento de lavagem ácida artesanal com estampa em serigrafia de alta densidade.",
    sizes: ["P", "M", "G", "GG"],
  },
];