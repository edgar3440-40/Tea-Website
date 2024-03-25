import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {CardService} from "../../services/card.service";

declare var $: any;
declare var bootstrap: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  public subscriptionOrder: Subscription | null = null;

  checkoutForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{11}$/)]],
    country: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s\/\-]+$/)]],
    index: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s\/\-]+$/)]],
    address: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s\/\-]+$/)]],
    product: [{value:'', disabled: false}, [Validators.required]],
    comment: [''],

  })
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private cardService: CardService,
  ) {

  }


  ngOnInit(): void {


    $("#accordion").accordion();


    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params['card']) {
        const cardValue = params['card'];

          this.checkoutForm.patchValue({
            product: cardValue
          });

          // Если Input disabled, значение не передается на сервер. Вы можете попробовать
          // this.checkoutForm.get('product')?.disable();
      }
    });

  }

  ngAfterViewInit() {
    const myModalAlternative = new bootstrap.Modal('#modal', {})
    myModalAlternative.show();

  }


  public createOrder() {
    if (this.checkoutForm.valid) {
      const formValues = this.checkoutForm.value;
      // Ensure that formValues has all the required properties
      const data = {
        name: formValues.firstName || null,
        last_name: formValues.lastName || null,
        phone: formValues.phoneNumber || null,
        country: formValues.country || null,
        zip: formValues.index || null,
        product: formValues.product || null,
        address: formValues.address || null,
        comment: formValues.comment || null
      };
      this.subscriptionOrder = this.cardService.createOrder(data)
        .subscribe(response => {
          console.log(response);
        });
    } else {

    }
  }
}
