import { NgModule } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {TextCustomPipe} from "../../shared/pipes/text-custom.pipe";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    TextCustomPipe,
    ProductsRoutingModule,
    SharedModule,
    RouterModule,
    CurrencyPipe,
    NgForOf
  ],
  exports: [
    ProductsRoutingModule,
    ProductComponent,
  ]
})
export class ProductsModule { }
