import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shopping', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule' },
    { path: '**', pathMatch: 'full', redirectTo: '/' }
];

export const routing = RouterModule.forRoot(routes);
