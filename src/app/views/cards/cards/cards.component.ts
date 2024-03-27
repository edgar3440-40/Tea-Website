import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CardService} from "../../../shared/services/card.service";
import {CardType} from "../../../shared/types/card.type";
import {tap} from "rxjs";

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  loading: boolean = false;

  cards: CardType[] = []

  constructor(private  cardService: CardService, private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
    this.loading = true;
    this.cardService.getCards()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.cards = data;
            console.log(this.cards)
          },
          error: (error) => {

            console.log(error);
            this.router.navigate(['/']);
          }
        })
  }

}
