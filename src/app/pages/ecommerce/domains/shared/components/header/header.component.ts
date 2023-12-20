import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { product } from 'app/models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  hiddeCart = signal(true)
  total = signal(0)

  @Input() cart : product[] = []

  toggleCart(){
    this.hiddeCart.update((state) => !state)
  }

  ngOnChanges(changes : SimpleChanges){
    const cart = changes['cart']
    if(cart) this.total.set(this.getTotalPrice())
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
