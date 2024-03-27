import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardsComponent} from "./cards/cards.component";
import {CardComponent} from "./card/card.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    CardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    CardsComponent,
    CardComponent
  ]
})
export class CardsModule { }
