import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {



  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;
  @Input() data: string = 'Hello Dear user!!!';

  constructor(private modalService: NgbModal) {

  }

  ngOnInit(): void {

    $("#accordion").accordion();

  }

  ngAfterViewInit() {
    this.modalService.open(this.popup);
  }



}
