import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient)
  constructor() { }

  getProducts(categoryId?: string){
    const url = new URL ('https://api.escuelajs.co/api/v1/products')
    if(categoryId){
      url.searchParams.set('categoryId', categoryId)
    }
    return this.http.get(url.toString())
  }

  getOneProducts(id : string){
    return this.http.get(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}
