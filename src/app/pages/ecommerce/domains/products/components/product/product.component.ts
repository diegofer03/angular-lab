import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from 'app/models/product.model';
import { ReversePipe } from 'app/pages/ecommerce/pipes/reverse.pipe';
import { TimeagoPipe } from 'app/pages/ecommerce/pipes/timeago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeagoPipe],
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input({required: true}) product! : product

  @Output() addedProduct = new EventEmitter()

  imgSrc: string = 'https://picsum.photos/640/640?r=' + Math.random();

  addToCart(){
    this.addedProduct.emit(this.product)
  }

}
