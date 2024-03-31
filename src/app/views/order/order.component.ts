import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CardService} from "../../shared/services/card.service";
import {Observable, Subscription, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription() ;

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  modalService: NgbModal | null = null;
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
              private router: Router, modalService: NgbModal) {
    this.modalService = modalService;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params['card']) {
        const cardValue = params['card'];

        this.checkoutForm.patchValue({
          product: cardValue
        });


      }
    });
  }
  public createOrder() {
    if (this.checkoutForm.valid) {
      const formValues = this.checkoutForm.value;
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
      this.subscription.add(this.cardService.createOrder(data)

        .subscribe(
          () => {
              this.modalService?.open(this.popup)
              },
          ));
    } else {

    }
  }

  ngOnDestroy() {
    this.modalService?.dismissAll(this.popup);
    this.subscription.unsubscribe();
  }
}
