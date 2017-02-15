import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { routing } from './app-routing';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    /* ShoppingListModule,  */ // <- lazy loading
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
