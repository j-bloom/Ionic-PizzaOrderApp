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
