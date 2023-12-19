import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  hiddeCart = signal(true)

  toggleCart(){
    this.hiddeCart.update((state) => !state)
  }
}
