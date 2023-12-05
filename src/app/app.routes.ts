import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LabComponent } from './pages/lab/lab.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home'
  },
  {
    path: 'lab',
    component: LabComponent,
    title: 'lab'
  }
];
