import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Observable, Subscription} from "rxjs";

declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  modalObservable: Observable<string> | null;
  subs: Subscription = new Subscription();

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;
  @Input() data: string = 'Hello Dear user!!!';

  constructor(private modalService: NgbModal) {

    this.modalObservable = new Observable((obs) => {
      setTimeout(() => {
        obs.next()
      }, 10000)
    })

  }

  ngOnInit(): void {

    $("#accordion").accordion();

  }

  ngOnDestroy() {
    this.modalService.dismissAll();
    this.subs!.unsubscribe();
  }

  ngAfterViewInit() {
    this.subs = this.modalObservable!.subscribe((): void => {
      this.modalService.open(this.popup);
    })
  }
}
