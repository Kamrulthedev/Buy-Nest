export type TCardIncrement = {
  id: string;
  values: number;
};
type SortType = "low-to-high" | "high-to-low" | null;
export type ProductsState = {
  products: TProductProps[];
  searchQuery: string;
  value: number;
  card: number;
  selectedProduct: TProductProps | null;
  cardPrduct: TProductProps[];
  cardInrement: TCardIncrement[];
  singleProduct?: TProductProps;
  minPrice: number;
  maxPrice: typeof Infinity;
  sort?: SortType;
};

export interface CartItem extends ProductsState {
  quantity: number;
}

export interface TProductProps {
  quantity: number;
  _id: string;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
  update?: string;
}

export interface AddToCartPayload {
  product: TProductProps;
  quantity: number;
}

export interface TCartItem extends TProductProps {
  quantity: number;
}

export interface TCard {
  items: TCartItem[];
}

export interface IFormInput {
  title: string;
  _id: string;
  price: number;
  description: string;
  brand: string;
  availableQuantity: number;
  rating: number;
}
