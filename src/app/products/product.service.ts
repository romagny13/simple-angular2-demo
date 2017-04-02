import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductService {
  constructor(private http: Http) { }

  private getOptions(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return options;
  }

  getProductsP(): Promise<Product[]> {
    return this.http.get('api/products') // returns an observable
      .toPromise()
      .then(response => <Product[]>response.json().data)
      .catch((error) => Promise.reject('Cannot load products'));
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('api/products')
      .map((response: Response) => <Product[]>response.json().data)
      .do((data) => console.log(data))
      .catch((error) => this.handleError(error));
  }


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(`Error status code ${error.status} at ${error.url}`);
  }
}
