import { Injectable } from '@angular/core';
import {CardType} from "../types/card.type";
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class CardService {

  private Cards: CardType[] = [];

  constructor(private http: HttpClient) { }

  getCards(): Observable<CardType[]> {
    return this.http.get<CardType[]>(environment.apiURL +  'tea')
  }

  getCard(id:number): Observable<CardType>  {
    return this.http.get<CardType>(environment.apiURL +  `tea?id=${id}`)
  }

  createOrder(data: {
    name: string | null,
    last_name: string | null,
    phone: string | null,
    country: string | null,
    zip: string | null,
    product: string | null,
    address: string | null,
    comment?: string | null,
              }
  ) {
    return this.http.post<{success: boolean, message?: string}>(environment.apiURL +  `order-tea`, data)
  }
}
