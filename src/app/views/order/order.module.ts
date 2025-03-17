import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from "./order.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  exports: [
    OrderRoutingModule
  ]
})
export class OrderModule { }
