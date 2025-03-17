import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {RouterLink, RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
