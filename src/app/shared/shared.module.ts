import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {ShortenTextPipe} from "./pipes/shorten-text.pipe";
import {CardService} from "./services/card.service";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShortenTextPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ShortenTextPipe,
  ]
})
export class SharedModule { }
