import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { product } from 'app/models/product.model';
import { CartService } from '@services/cart.service';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private cartService = inject(CartService)

  hiddeCart = signal(true)
  total = this.cartService.total
  cart = this.cartService.cart

  toggleCart(){
    this.hiddeCart.update((state) => !state)
  }

  getTotalPrice() {
    return this.cart().reduce((total, product) => total + product.price, 0);
  }
}
