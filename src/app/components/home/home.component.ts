import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoriesService} from "../../services/categories.service";
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product/Product";
import {DecimalPipe, NgStyle} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgStyle,
    DecimalPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

 products: Product[]=[];

constructor(private productService: ProductService) {


}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }



}