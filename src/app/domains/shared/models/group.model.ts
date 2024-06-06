import { Product } from './product.model'; // Asegúrate de importar el modelo correcto

export interface Group {
  name: string;
  products: Product[];
  enabled: boolean;
  optionsDisplayed?: boolean;
  editingName?: boolean;
  listExpanded?: boolean;
}
