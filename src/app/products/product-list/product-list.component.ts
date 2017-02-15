import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  errorMessage: string;
  asyncProducts: any;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    // Observable
    /* this._productService.getProducts()
       .subscribe(
       products => this.products = products,
       error => this.errorMessage = <any>error
       );*/
    // async pipe
    this.asyncProducts = this._productService.getProducts();


    // Promise
    /*this._productService.getProductsP()
      .then(
      products => this.products = products,
      error => this.errorMessage = <any>error
      );*/

  }
}

