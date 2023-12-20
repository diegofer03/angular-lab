import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { product } from 'app/models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  hiddeCart = signal(true)

  @Input() cart : product[] = []

  toggleCart(){
    this.hiddeCart.update((state) => !state)
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
