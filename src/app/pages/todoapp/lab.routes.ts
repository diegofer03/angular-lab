import { Routes } from '@angular/router';
import LabComponent  from './lab.component';

export default [
  {
    path: '',
    loadComponent: () => import('./lab.component'),
    title: 'TodoApp'
  }
] as Routes ;
