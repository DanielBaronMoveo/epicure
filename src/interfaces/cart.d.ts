export interface CartItem {
  dish: Dish;
  side: string;
  changes: string[];
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  quantity: number;
}
