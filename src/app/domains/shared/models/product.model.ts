export interface Product {
    name: string;
    price: number;
    cost: number;
    code: string;
    ingredients: object;
    optionsDisplayed?: boolean;
    editingName?: boolean;
    editingPrice?: boolean;
    editingCode?: boolean;
    enabled: boolean;
  }