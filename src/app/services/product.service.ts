import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl:string = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }


  createProduct(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  getAllProducts():Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
