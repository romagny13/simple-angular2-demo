import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-product-detail',
  template: `
    <h1>Details</h1>
    <p>Product id: {{ id }}</p>
  `
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  message: string;
  id: number;
  subscription: Subscription;

  constructor(private _route: ActivatedRoute) {
    // this.message = 'Product id:' + _route.snapshot.params['id'];
    this.subscription = _route.params.subscribe((param) => this.id = param['id']);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
