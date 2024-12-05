import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../types/Categorie";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private url:string = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) {}

    findAll():Observable<Categorie[]>{
      return this.http.get<Categorie[]>(this.url)
    }

}
