import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main.component";
import {OrderModule} from "../order/order.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    OrderModule,
    RouterLink
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
