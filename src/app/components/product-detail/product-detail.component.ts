import { Component } from '@angular/core';
import {CommentComponent} from "../comment/comment.component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommentComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

}
