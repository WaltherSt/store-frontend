
import {createAction, props} from "@ngrx/store";
import {OrderDetail, Product} from "../reducers/reducers";




export const addToCart = createAction(
  '[Home] Add to cart',
  props<{ orderDetail: OrderDetail }>()
);

export const removeFromCart= createAction(
  '[ShoppingComponent] Remove from cart',
  props<{ id: number }>()
);

export const increaseQuantity= createAction(
  '[ShoppingComponent] Increase Quantity',
  props<{id:number}>()

);

export const decreaseQuantity= createAction(
  '[ShoppingComponent] Decrease Quantity',
  props<{id:number}>()
)
