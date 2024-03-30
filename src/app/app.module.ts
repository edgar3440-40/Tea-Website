import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardService} from "./shared/services/card.service";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {MainModule} from "./views/main/main.module";
import {CardsModule} from "./views/cards/cards.module";
import {OrderModule} from "./views/order/order.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    NgbModule,
    CoreModule,
    SharedModule,
    MainModule,
    CardsModule,
    OrderModule,

  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
