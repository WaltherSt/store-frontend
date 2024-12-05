export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: Category;
  images: Image[];
  comments: Comment[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Image {
  id: number;
  url: string;
}

export interface Comment {
  id: number;
  comment: string;
  date: string | null; // Usar 'null' para representar fechas no definidas
  customer: Customer;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  address: string;
  password: string;
  phone: string;
  orders: any[]; // Puedes ajustar esto si los "orders" tienen una estructura definida
}
