import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';

export default [
  {
    path: '',
    component: ListComponent,
    title: 'Home'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About'
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  }
] as Routes ;
