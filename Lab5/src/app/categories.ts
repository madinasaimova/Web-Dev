import { Product, products } from './products';

export interface Category {
  name: string;
  products: Product[];
}
