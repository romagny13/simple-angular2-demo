import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListGuard } from './shopping-list.guard';

const routes: Routes = [
  {
    path: '', children: [ /* lazy loading */
      { path: '', component: ShoppingListComponent, canActivate: [ShoppingListGuard], canDeactivate: [ShoppingListGuard] }
      /* other */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShoppingListRoutingModule { }
