import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public cpt: number = 0;
  @Output() cptChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  btnPlusClicked() {
    this.cpt++;
    this.cptChanged.emit(this.cpt);
  }

  btnMinusClicked() {
    this.cpt--;
    this.cptChanged.emit(this.cpt);
  }
}
