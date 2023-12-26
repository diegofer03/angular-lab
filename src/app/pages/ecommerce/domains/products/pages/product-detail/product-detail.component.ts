import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { CartService } from '@services/cart.service';
import { ProductsService } from '@services/products.service';
import { product } from 'app/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
  private productService = inject(ProductsService)
  private cartService = inject(CartService)
  @Input() id? : string;
  product = signal<product | null>(null)
  cover = signal<string>('')

  ngOnInit(){
    if(this.id){
      this.productService.getOneProducts(this.id).subscribe({
        next: (data: any) => {
          this.product.set(data)
          if(data.images.length > 0) this.cover.set(data.images[0])
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

  changecover(img : string){
    this.cover.set(img)
  }

  addProduct(){
    const product = this.product()
    if(product) this.cartService.addToCart(product)
  }
}
