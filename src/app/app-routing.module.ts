import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {CardsComponent} from "./components/cards/cards.component";
import {CardComponent} from "./components/card/card.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'cards/:id', component: CardComponent},

  // {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
