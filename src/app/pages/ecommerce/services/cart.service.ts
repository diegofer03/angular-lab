import { Injectable, computed, signal } from '@angular/core';
import { product } from 'app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<product[]>([])
  total = computed(() => {
    const cart = this.cart()
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { }

  addToCart(product: product){
    this.cart.update(value => [...value, product])
  }
}
