import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  // Changement du compteur par défaut pour mettre en évidence le 'Input'
  public result: number = 3;

  constructor() {}

  ngOnInit() {}

  public cptChanged(newVal: number) {
    this.result = newVal;
  }
}
