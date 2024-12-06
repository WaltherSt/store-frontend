import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

private url :string = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  customerRegister(formData: FormData):Observable<any>{
    return this.http.post(this.url,formData);
  }


}
