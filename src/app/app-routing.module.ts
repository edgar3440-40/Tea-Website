import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./views/main/main.component";
import {CardsComponent} from "./views/cards/cards/cards.component";
import {CardComponent} from "./views/cards/card/card.component";
import {OrderComponent} from "./views/order/order.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'cards/:id', component: CardComponent},
  {path: 'order', component: OrderComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling: 'enabled', useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
