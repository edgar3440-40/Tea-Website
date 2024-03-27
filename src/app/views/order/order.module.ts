import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from "./order.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
