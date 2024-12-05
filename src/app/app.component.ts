import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {ShoppingComponent} from "./components/shopping/shopping.component";
import {MenuComponent} from "./components/menu/menu.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {HomeComponent} from "./components/home/home.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {CommentComponent} from "./components/comment/comment.component";
import {UserComponent} from "./components/user/user.component";
import {ConfirmComponent} from "./components/confirm/confirm.component";
import {GroupComponent} from "./components/group/group.component";
import {FormProductComponent} from "./components/product/form-product/form-product.component";
import {CustomerComponent} from "./components/customer/customer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, ShoppingComponent, MenuComponent, RegisterComponent, LoginComponent, ProductDetailComponent, HomeComponent, CategoriesComponent, CommentComponent, UserComponent, ConfirmComponent, GroupComponent, FormProductComponent, CustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
}
