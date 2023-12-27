import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { category } from 'app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  http = inject(HttpClient)

  constructor() { }

  getCategories(){
    return this.http.get<category>(`https://api.escuelajs.co/api/v1/categories`)
  }
}
