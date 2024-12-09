import { Component } from '@angular/core';
import {DecimalPipe, NgStyle} from "@angular/common";

import {ProductService} from "../../services/product.service";
import {Store} from "@ngrx/store";

import {Observable} from "rxjs";
import {Order, OrderDetail, Product} from "../../state/reducers/reducers";
import {addToCart} from "../../state/actions/actions";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DecimalPipe,
    NgStyle
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[]=[];
  order$:Observable<Order>

  constructor(private productService: ProductService,private store:Store<{order:Order}>) {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
    this.order$= this.store.select('order')
  }

  addProduct(product: Product,quantity:number):void {
    const orderDetail:OrderDetail={
      product,
      quantity,
      price:product.price*quantity,

    }

    this.store.dispatch(addToCart({orderDetail:orderDetail}));
  }

  ngOnInit(): void {

  }



}
