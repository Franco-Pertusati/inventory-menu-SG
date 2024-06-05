export interface Product {
    name: string;
    price: number;
    cost: number;
    code: string;
    optionsDisplayed?: boolean;
    editingName?: boolean;
    editingPrice?: boolean;
    editingCode?: boolean;
    enabled: boolean;
  }