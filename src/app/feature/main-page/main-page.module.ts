import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import {AccordionComponent} from "./accordion/accordion.component";
import {MainComponent} from "./main/main.component";
import {MainPopupComponent} from "./main-popup/main-popup.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";




@NgModule({
  declarations: [MainComponent,
    AccordionComponent,
    MainPopupComponent
  ],
  imports: [
    NgbAccordionModule,
    RouterModule,
    CommonModule,
    MainPageRoutingModule,
    SharedModule
  ],
  exports: [
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
