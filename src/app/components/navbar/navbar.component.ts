import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {ActivatedRoute, NavigationEnd, Router, RouterLink} from "@angular/router";
import { AsyncPipe, NgIf } from "@angular/common";
import { Store } from "@ngrx/store";
import { Order } from '../../state/reducers/reducers';
import { map, Observable } from "rxjs";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartCount:number= 0;
  isLoggedIn: boolean = false; // Cambia según el estado de sesión
  userName: string = 'Juan Pérez'; // Nombre del usuario (puede ser dinámico)
  userAvatar: string = 'https://via.placeholder.com/40'; // URL del avatar del usuario
  routePath: string = ""

  constructor(private store: Store<{ car: Order }>,private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.routePath = this.router.url;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routePath = event.urlAfterRedirects;
        console.log("Navigation route", this.routePath);
      }
    });
    this.store.select('car').subscribe( car=> {
      this.cartCount= car.orderDetails.length;
    })
  }
}
