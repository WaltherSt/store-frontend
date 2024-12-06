import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../interfaces/city/City";

@Injectable({
  providedIn: 'root'
})
export class CityService {
 private  url:string= "https://api-colombia.com/api/v1/city";

  constructor(private http: HttpClient) { }

getAllCities():Observable<City[]>{
   return this.http.get<City[]>(this.url)
}


}
