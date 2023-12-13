import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input({required: true}) img : string = ''
  @Input({required: true}) title : string = ''
  @Input({required: true}) price : number = 0

  @Output() addedProduct = new EventEmitter()

  imgSrc: string = 'https://picsum.photos/640/640?r=' + Math.random();

  addToCart(){
    this.addedProduct.emit(this.img)
  }

}
