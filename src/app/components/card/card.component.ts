import {Component, Input, OnInit} from '@angular/core';
import {CardService} from "../../services/card.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CardType} from "../../types/card.type";
import {tap} from "rxjs";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: CardType;

  loading: boolean = false;

  cardDesc: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private cardService: CardService, private router: Router) {
    this.card = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: ''
    }
  }

  ngOnInit(): void {


    const routePath = this.activatedRoute.snapshot.routeConfig?.path;
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      if(routePath === 'cards') {
        this.cardDesc = true;
        console.log('CardDesc is true')
        console.log(routePath)
      } else {
        this.cardDesc = false;
        console.log('CardDesc is false')
        console.log(routePath)
      }
      if(params['id']) {

        this.cardService.getCard(+params['id'])
          .pipe(
            tap(() => {
            })
          )
          .subscribe({
            next: (data) => {
              this.card = data;

            },
            error: (error) => {
              this.router.navigate(['/'])
            }
          })
      }
      this.loading = false;
    });
  }

}
