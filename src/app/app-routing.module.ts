import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./views/main/main.component";
import {CardsComponent} from "./views/cards/cards/cards.component";
import {CardComponent} from "./views/cards/card/card.component";
import {AuthGuard} from "./core/auth/auth.guard";

const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'cards', component: CardsComponent},
  {path: 'cards/:id', component: CardComponent},

  // {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
