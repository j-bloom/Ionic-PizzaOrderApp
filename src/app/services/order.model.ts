export interface Pizza {
  quantity: number;
  pizzaTopping: string;
  pizzaSize: string;
}

export interface CurrentOrder {
  listOfPizzas: Pizza[];
  totalOrderPrice: number;
  totalOrderQuantity: number;
}

export interface PreviousOrder {
  orderDate: Date;
  totalOrderPrice: number;
  totalOrderQuantity: number;
} 

export interface PizzaPrice {
  pizzaSize: string;
  price: number;
}