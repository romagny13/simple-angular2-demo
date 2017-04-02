/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
    let service: ProductService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProductService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backendInstance, options) => new Http(backendInstance, options),
                    deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [HttpModule]
        });
    });

    /*  beforeEach(inject([ProductService], (productService: ProductService) => {
          service = productService;
      }));

    it('should get products with observable', async(inject([ProductService], (productService: ProductService) => {
        productService.getProducts().subscribe((result) => {
            console.log('result', result);
            expect(result.length).toBeGreaterThan(1);
        });
    })));

     it('should get products with observable', (done) => {
         service.getProducts().subscribe((result) => {
             console.log(result);
             expect(result.length).toBeGreaterThan(1);
             done();
         });
     });

     it('should get products with promise', (done) => {
         service.getProductsP().then((result) => {
             console.log(result);
             expect(result.length).toBeGreaterThan(1);
             done();
         });
     });*/
});
