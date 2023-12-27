import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import {product} from 'app/models/product.model'
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '@services/cart.service';
import { ProductsService } from '@services/products.service';
import { category } from 'app/models/category.model';
import { CategoriesService } from '@services/categories.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent, RouterLink],
  templateUrl: './list.component.html'
})
export class ListComponent {
  private cartService = inject(CartService)
  private productService = inject(ProductsService)
  private categoriesService = inject(CategoriesService)
  @Input() categoryId? : string

  products = signal<product[]>([])
  categories = signal<category[]>([])

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
    this.getProducts()
    this.getCategories()
  }

  ngOnChanges(changes: SimpleChanges){
    this.getProducts()
  }

  addEvent(product: product){
    this.cartService.addToCart(product)
  }

  getProducts(){
    this.productService.getProducts(this.categoryId)
      .subscribe({
        next: (products: any ) => {
          this.products.set(products)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  getCategories(){
    this.categoriesService.getCategories()
      .subscribe({
        next: (data: any ) => {
          this.categories.set(data)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }
}
