import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import {product} from 'app/models/product.model'
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from 'app/pages/ecommerce/services/cart.service';
import { ProductsService } from 'app/pages/ecommerce/services/products.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html'
})
export class ListComponent {
  private cartService = inject(CartService)
  private productService = inject(ProductsService)

  products = signal<product[]>([])

  constructor(){
    // this.products.set([
    //   {
    //     id: Date.now(),
    //     title: 'product 1',
    //     price: 123,
    //     img: 'https://picsum.photos/640/640?r=22',
    //     createdAt: new Date().toISOString()
    //   },
    //   {
    //     id: Date.now(),
    //     title: 'product 2',
    //     price: 1223,
    //     img: 'https://picsum.photos/640/640?r=244',
    //     createdAt: new Date().toISOString()
    //   },
    //   {
    //     id: Date.now(),
    //     title: 'product 3',
    //     price: 13453,
    //     img: 'https://picsum.photos/640/640?r=26',
    //     createdAt: new Date().toISOString()
    //   },
    //   {
    //     id: Date.now(),
    //     title: 'product 1',
    //     price: 123,
    //     img: 'https://picsum.photos/640/640?r=22',
    //     createdAt: new Date().toISOString()
    //   },
    //   {
    //     id: Date.now(),
    //     title: 'product 2',
    //     price: 1223,
    //     img: 'https://picsum.photos/640/640?r=244',
    //     createdAt: new Date().toISOString()
    //   },
    //   {
    //     id: Date.now(),
    //     title: 'product 3',
    //     price: 13453,
    //     img: 'https://picsum.photos/640/640?r=26',
    //     createdAt: new Date().toISOString()
    //   }
    // ])
  }

  ngOnInit(){
    this.productService.getProducts()
      .subscribe({
        next: (data) => {
          console.log(data)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  addEvent(product: product){
    this.cartService.addToCart(product)
  }
}
