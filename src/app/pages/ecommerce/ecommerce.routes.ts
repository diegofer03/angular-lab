import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListComponent } from './domains/products/pages/list/list.component';

export default [
  {
    path: '',
    component: ListComponent,
    title: 'Home'
  }
] as Routes ;
