export type ProductSize = {
  size: string;
  weight: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  scent: string;
  sizes: ProductSize[];
  color: string;
  image: string;
};

// Fragrâncias e descrições baseadas no material enviado pela Aromar.
// Tamanhos e preços informados pela marca.
export const products: Product[] = [
  {
    id: "aura",
    name: "Aura",
    subtitle: "Leveza, conforto e sofisticação.",
    scent: "Lavanda · Floral · Amadeirado",
    sizes: [
      { size: "P", weight: "20 g", price: 19.9 },
      { size: "M", weight: "200 g", price: 40 },
    ],
    color: "lavender",
    image: "/images/velas-aromar.png",
  },
  {
    id: "vanila-dream",
    name: "Vanila Dream",
    subtitle: "Aconchego, prazer e sensualidade.",
    scent: "Jasmim · Caramelo · Baunilha",
    sizes: [
      { size: "P", weight: "20 g", price: 19.9 },
      { size: "M", weight: "200 g", price: 40 },
    ],
    color: "amber",
    image: "/images/velas-aromar.png",
  },
  {
    id: "confort-musk",
    name: "Confort Musk",
    subtitle: "Frescor, aconchego e sofisticação.",
    scent: "Amadeirado · Cítrico · Floral · Especiarias",
    sizes: [
      { size: "P", weight: "20 g", price: 19.9 },
      { size: "M", weight: "200 g", price: 40 },
    ],
    color: "stone",
    image: "/images/velas-aromar.png",
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);
