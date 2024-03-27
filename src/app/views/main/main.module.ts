import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main.component";
import {OrderModule} from "../order/order.module";



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    OrderModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
