import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Order, OrderDetail} from '../../state/reducers/reducers';
import {decreaseQuantity, increaseQuantity, removeFromCart} from "../../state/actions/actions";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent implements OnInit {

  details: OrderDetail[] = [];
  total = 0;
  customer:number=0;

  constructor(private store: Store<{ car: Order }>) {
  }

  ngOnInit(): void {
    this.store.select('car').subscribe((car) => {
      this.details = car.orderDetails

      this.total = car.orderDetails.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      this.customer= car.customer.id;
    })
  }

  increaseQuantity(detail: OrderDetail): void {
    this.store.dispatch(increaseQuantity({id: detail.product.id}))
  }

  decreaseQuantity(detail: OrderDetail): void {
    if (detail.quantity > 1) {
      this.store.dispatch(decreaseQuantity({id: detail.product.id}))
    } else {
      this.removeItem(detail);
    }
  }

  removeItem(detail: OrderDetail): void {
    this.store.dispatch(removeFromCart({id: detail.product.id}));
  }


}
