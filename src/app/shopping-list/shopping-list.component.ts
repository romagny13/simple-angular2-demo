import { Component } from '@angular/core';
import { Subscription, Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {

  canDeactivate(): Observable<boolean> | boolean {
    return confirm('Deactivate?');
  }
}
