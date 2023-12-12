import { Route } from '@angular/router';
import { AppComponent } from './app.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'home'},

    {
        path: '',
        component: AppComponent,
        children: [
            {path: 'home', loadChildren: () => import('app/pages/ecommerce/ecommerce.routes')},
            {path: 'lab', loadChildren: () => import('app/pages/todoapp/lab.routes')},
        ]
    }
];
