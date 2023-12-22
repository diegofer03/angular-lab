import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient)
  constructor() { }

  getProducts(){
    return this.http.get('https://api.escuelajs.co/api/v1/products')
  }
}
