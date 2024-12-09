import { Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ShoppingComponent} from "./components/shopping/shopping.component";
import {CustomerComponent} from "./components/customer/customer.component";

export const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'category/:name', component: CategoriesComponent},
  { path: 'car', component: ShoppingComponent },
  { path: 'register', component: CustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: CustomerComponent },
  { path: '**', component: PageNotFoundComponent },

];
