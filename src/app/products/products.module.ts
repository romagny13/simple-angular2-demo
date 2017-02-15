import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { ProductStartComponent } from './product-start/product-start.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsComponent, ProductListComponent, ProductDetailComponent, ProductStartComponent],
  providers: [ProductService]
})
export class ProductsModule { }
