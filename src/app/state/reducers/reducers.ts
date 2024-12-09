import {createReducer, on,} from "@ngrx/store";
import {addToCart, decreaseQuantity, increaseQuantity, removeFromCart} from "../actions/actions";


export interface Customer {
  id: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: number;
  images: string[]; // Lista de URLs de imágenes
  comments: any[];  // Puedes cambiar `any[]` por un tipo específico si tienes más detalles sobre los comentarios
}

export interface OrderDetail {
  product: Product;
  quantity: number;
  price: number;
}

export interface Order {
  customer: Customer;
  orderDetails: OrderDetail[];
}

export const initialState: Order = {
  customer: {id: 0},
  orderDetails: []
}
export const shoppingCartReducer = createReducer(
  initialState,
  on(addToCart, (state, {orderDetail}) => ({
    ...state,
    orderDetails: [...state.orderDetails, orderDetail]
  })),

  on(removeFromCart, (state, {id}) => ({
    ...state,
    orderDetails: state.orderDetails.filter((item) => item.product.id != id)
  })),

  on(increaseQuantity, (state, { id }) => ({
    ...state,
    orderDetails: state.orderDetails.map((item) =>
      item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  })),

  on(decreaseQuantity, (state, { id }) => ({
    ...state,
    orderDetails:state.orderDetails.map((item) =>
    item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item)
  }))
);





