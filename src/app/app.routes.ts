import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/ecommerce/domains/shared/components/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: ''},
    {
      path: '',
      component: LayoutComponent,
      children: [
        {path: '', loadChildren: () => import('app/pages/ecommerce/ecommerce.routes')},
      ]
    },
    {
      path: 'todoapp',
      component: AppComponent,
      children: [
        {path: '', loadChildren: () => import('app/pages/todoapp/lab.routes')},
      ]
    },
    {path: '**', redirectTo: 'home'},
];
